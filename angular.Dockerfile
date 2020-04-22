FROM datathonacr.azurecr.io/angular-builder:latest
WORKDIR /app/dist/apps/job-finder
COPY angular.server.js .
EXPOSE 8080
CMD node angular.server.js