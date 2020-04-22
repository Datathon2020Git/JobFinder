# JobFinder

Nx Monorepo Project using Angular and NestJs.

## Docker Instructions

The builder.Dockerfile initializes node_module dependencies for all projects.
The angular.builder.Dockerfile builds create the dist folder for angular
The angular.Dockerfile deploys the build

Make Sure to update those files in the correct sequence.


## Builder

Copy package.json and install node modules
docker build -f builder.Dockerfile . -t job-finder-builder

### Building and Pushing Angular to AzureCr

docker build -f angular.builder.Dockerfile . -t datathonacr.azurecr.io/datathon_front
docker push datathonacr.azurecr.io/datathon_front
docker build -f angular.Dockerfile . -t datathonacr.azurecr.io/datathon_front
docker push datathonacr.azurecr.io/datathon_front

### Building and Pushing NestJs to AzureCr

docker build -f nest.Dockerfile . -t datathonacr.azurecr.io/datathon_back
docker push datathonacr.azurecr.io/datathon_back