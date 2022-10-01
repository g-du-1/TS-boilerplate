# TS-boilerplate

## Stack

- Docker
- Typescript
- Node (Express)
- Postgres
- Webpack
- React
- Sass
- ESLint
- Prettier
- Remote debugging configured

## Starting the environment

Preferably start from a VSCode WSL window on Windows.

1. Add .env as in example
2. `docker-compose up` from an outside terminal
3. Develop from inside the container via the Remote Development extension

### Alternatively:

1. `docker exec -it --user node app bash`
2. Change to server directory
3. `npm run dev:all`

## Removing everything from Docker

1. `docker-compose down`
2. ` docker system prune -a && docker volume prune`
