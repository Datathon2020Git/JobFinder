
FROM job-finder_datathonbuild as builder
WORKDIR  /app
RUN npm run build api

FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app ./app
RUN ls
EXPOSE 8080
CMD [ "node",'./app/dist/apps/api/main' ]
