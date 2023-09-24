# Étape 1: Compilation des fichiers TypeScript
FROM node:latest AS build

WORKDIR /app

COPY / /app/
RUN npm ci

FROM node:latest

WORKDIR /app

# Copie des fichiers générés à partir de l'étape de compilation
COPY --from=build /app/ /app/
COPY package.json package-lock.json /app/
COPY --from=build /app/node_modules/ /app/node_modules/



CMD [ "node", "." ]

LABEL org.opencontainers.image.source=https://github.com/Oxyrobit/DiscordJS-Bot-Template