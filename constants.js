module.exports = {
  PG_CONNECTION_STRING: process.env.PG_CONNECTION_STRING,
  DB_JORE_SCHEMA: process.env.DB_JORE_SCHEMA || 'jore',
  SERVICE_PATH_PREFIX: (process.env.SERVICE_PATH_PREFIX || '').replace(/\/$/, ''), // Remove trailing slash if accidentally given.
  PORT: process.env.PORT || 5000,
};
