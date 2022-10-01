# TS-boilerplate

## Stack

- Docker
- Typescript
- Node (Express)
- Postgres
- React, Webpack
- Prettier
- Remote debugging configured

## Starting the environment

Preferably start from a VSCode WSL window on Windows.

1. Add .env as in example
2. `docker-compose up -d`
3. Develop from inside the container via the Remote Development extension (alternatively: `docker exec -it app bash`)
4. `cd server && su node`
5. `npm run dev:all`
