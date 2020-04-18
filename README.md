# JobFinder

Nx Monorepo Project using Angular and NestJs.

## Docker Commands

### Builder
Copy package.json and install node modules
docker build -f builder.Dockerfile . -t job-finder-builder

### Building and Pushing Angular to AzureAcr

docker build -f angular.Dockerfile . -t datathonacr.azurecr.io/datathon_front
docker build -f angular.Dockerfile . -t datathonacr.azurecr.io/datathon_front

### Building and Pushing NestJs

docker build -f nest.Dockerfile . -t datathonacr.azurecr.io/datathon_back
docker build -f nest.Dockerfile . -t datathonacr.azurecr.io/datathon_back