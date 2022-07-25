---
sidebar_position: 1
title: Run in Docker
---

# Run with Docker

## Dockerfile conventions

Squid template comes with a Dockerfile containing build targets for the processor and the API server. The same Dockerfile is used for building the images when the squid is deployed to Aquarium. 

`Dockerfile` expects the squid to follow the structure of [`squid-template`](https://github.com/subsquid/squid-template) and expects the following files and folders in the project root:

- `schema.graphql` -- the schema file
- `/db` -- the designated folder with the database migrations
- `/src` -- the source folder
- `/assets` -- the folder with additional files need for the squid (e.g. static data files)
- `tsconfig.json`, `package-lock.json`, `package.json` 

Note that the build will fail if `package-lock.json` is not aligned with the package versions defined in `package.json`.

Further, the following scripts must be defined in `package.json`:

- `db:migrate` to run the database migrations. This script is run in a separate init container when the squid is deployed to the Aquarium.
- `processor:start` to start the processor
- `query-node:start` to start the API server


## Build commands

**Build the processor:**
```bash
docker build . --target processor -t squid-processor 
```

**Build the API server:**
```bash
docker build . --target query-node -t graphql-server
```

Assuming the database is already running at localhost,
run the freshly built `squid-processor` and `graphq-server` images:

```bash
docker run --rm -e DB_HOST=host.docker.internal --env-file=.env squid-processor
```
and
```bash
docker run --rm -e DB_HOST=host.docker.internal --env-file=.env -p 4350:4350 graphql-server
```

Note, that `host.docker.internal` works only on Docker desktop and is suitable only for development, see [here](https://docs.docker.com/desktop/networking/#i-want-to-connect-from-a-container-to-a-service-on-the-host).

