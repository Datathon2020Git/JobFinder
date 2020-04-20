FROM datathonacr.azurecr.io/e-vocation-modules:latest
WORKDIR /app
COPY ./ ./
RUN ls
RUN npm run build --prod