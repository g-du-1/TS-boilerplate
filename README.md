# TS-boilerplate

## TODO

- Fix debugger

## Stack

- Docker
- Typescript
- Node (Express)
- Postgres
- React, Webpack
- Prettier
- Remote debugging configured, see below

## Starting the environment

Preferably start from a VSCode WSL window on Windows.

1. Add .env as in example
2. `docker-compose up -d`
3. Develop from inside the container via the Remote Development extension (alternatively: `docker exec -it app bash`)
4. `cd server && su node`
5. `npm run dev:all`

## Debugging

1. Start with `docker-compose up -d`
2. Enter container via the VSCode Remote Development extension
3. Set a breakpoint and start the debugger via the UI
