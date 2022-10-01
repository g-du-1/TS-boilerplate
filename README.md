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
2. `docker-compose up -d && docker exec -it --user node app bash` from an outside terminal
3. Change to server directory
4. `npm run dev:all`
5. Develop from inside the container via the Remote Development extension

## Removing everything from Docker

1. `docker-compose down`
2. `docker system prune -a && docker volume prune`
