# TS-boilerplate

## Stack

- Docker
- Typescript
- Node (Express)
- Postgres
- Prettier
- Remote debugging configured, see below

## Starting the environment

Preferably start from a VSCode WSL window on Windows.

1. Add .env as in example
2. `npm install`
3. `docker-compose up -d`
4. `docker exec -it api bash`
5. `su node`
6. `npm run dev`

## Debugging

1. Start with `docker-compose up -d`
2. Enter container via the VSCode Remote Development extension
3. Set a breakpoint and start the debugger via the UI
