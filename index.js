const http = require('http')
const { postgraphile } = require('postgraphile')
const numericPlugin = require('./PgNumericToFloatPlugin')

const port = process.env.PORT || 5000

http.createServer(postgraphile(process.env.PG_CONNECTION_STRING, 'jore', {
  disableDefaultMutations: true,
  dynamicJson: true,
  enableCors: true,
  graphqlRoute: '/graphql',
  graphiqlRoute: '/graphiql',
  graphiql: true,
  host: '0.0.0.0',
  timeout: 36000000,
  disableQueryLog: true,
  appendPlugins: [ numericPlugin ]
})).listen(port, () => {
  console.log('JORE GraphQL listening on port ' + port)
})
