FROM node:10-alpine
WORKDIR /app
COPY angular.server.js dist/
WORKDIR /app/dist
COPY --from=datathonacr.azurecr.io/angular-builder:latest /app/dist/apps/job-finder /app/dist/
COPY --from=datathonacr.azurecr.io/e-vocation-modules:latest /app/node_modules /app/node_modules
EXPOSE 8080
CMD node angular.server.js