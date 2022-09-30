FROM node:18.10

WORKDIR /usr/src/app/server

COPY ["./server/package.json", "./server/package-lock.json", "./server/tsconfig.json", ".env", "./"]

COPY ./server/src ./server/src

RUN npm install

WORKDIR /usr/src/app/client

COPY ["./client/index.html", "./client/package.json", "./client/package-lock.json", "./client/tsconfig.json", "./client/webpack.config.js", "./"]

COPY ./client/src ./client/src

RUN npm install

# Disable this so we can start it from inside the container via the debugger
# CMD npm run dev