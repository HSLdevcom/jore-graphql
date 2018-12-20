# Jore GraphQL server

### Prerequisites

Start a postgis docker container:
```
docker run --name jore-postgis -e POSTGRES_PASSWORD=mysecretpassword -d mdillon/postgis
```

Import data using [jore-graphql-import](https://github.com/HSLdevcom/jore-graphql-import)

### Install

Build the container:
```
docker build -t hsldevcom/jore-graphql .
```

### Run

Start the server:
```
docker run --link jore-postgis -e "PG_CONNECTION_STRING=postgres://postgres:mysecretpassword@jore-postgis:5432/postgres" -d -p 0.0.0.0:5000:5000 hsldevcom/jore-graphql
```

### Issues

The Postgraphql version used in this project does not have its timeout values configurable. Timeout configuration was added in Postgraphql 4, under the new name Postgraphile. 

Some queries, such as routemap queries, might sometimes take rather long. For example a routemap over the whole region has so much computation, so it will certainly be over the timeout threshold. 

Because of this, we have needed to manually set the timeout by bashing in to the docker container and setting the server timeout in the source code.
This should of course be avoided, and it's probably motivated to migrate to Postgraphile 4 as soon as possible, which would solve this issue.
Migrating to Postgraphile has some issues, one issue is that Floats are printed with quotes in Postgraphile 4, which might well make our Javascript projects confused.
Below is the series of actions required to manually set the timeout value:

docker exec -it {docker_id} bash
apt-get update
apt-get install vim
cd /node_modules/postgraphql/build/postgraphql
vim cli.js
// Find server initiation, insert a new row and specify:
server.timeout = 0;
// exit vim
// exit docker
// restart docker using
docker-compose restart jore-graphql

