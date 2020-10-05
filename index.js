const http = require('http');
const { postgraphile } = require('postgraphile');
const numericPlugin = require('./PgNumericToFloatPlugin');
const { PG_CONNECTION_STRING } = require('./constants');

const port = process.env.PORT || 5000;

http.createServer(postgraphile(PG_CONNECTION_STRING, 'jore', {
  disableDefaultMutations: true,
  dynamicJson: true,
  enableCors: true,
  externalUrlBase: '/jore',
  graphiql: true,
  host: '0.0.0.0',
  retryOnInitFail: true,
  timeout: 36000000,
  disableQueryLog: true,
  appendPlugins: [ numericPlugin ]
})).listen(port, () => {
  console.log('JORE GraphQL listening on port ' + port)
});
