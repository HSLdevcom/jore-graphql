const http = require('http');
const { postgraphile } = require('postgraphile');
const numericPlugin = require('./PgNumericToFloatPlugin');
const { PG_CONNECTION_STRING, DB_JORE_SCHEMA, SERVICE_PATH_PREFIX, PORT } = require('./constants');

if (!PG_CONNECTION_STRING) throw new Error("Missing required env PG_CONNECTION_STRING")

http.createServer(postgraphile(PG_CONNECTION_STRING, DB_JORE_SCHEMA, {
  disableDefaultMutations: true,
  dynamicJson: true,
  enableCors: true,
  externalUrlBase: SERVICE_PATH_PREFIX,
  graphiql: true,
  host: '0.0.0.0',
  retryOnInitFail: true,
  timeout: 36000000,
  disableQueryLog: true,
  appendPlugins: [ numericPlugin ]
})).listen(PORT, () => {
  console.log('JORE GraphQL listening on port ' + PORT)
});
