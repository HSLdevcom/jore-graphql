# Jore GraphQL importer and server

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
