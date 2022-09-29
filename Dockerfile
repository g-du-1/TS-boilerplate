FROM node:18.10

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY ./src ./src

RUN npm install

# Disable this so we can start it from inside the container via the debugger
# CMD npm run dev