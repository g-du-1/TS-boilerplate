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
2. `docker-compose up` from an outside terminal
3. Develop from inside the container via the Remote Development extension 

### Alternatively:
1. `docker exec -it app bash`
2. `cd server && su node`
3. `npm run dev:all`
