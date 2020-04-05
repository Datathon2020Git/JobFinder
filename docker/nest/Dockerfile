
FROM job-finder_datathonbuild as builder
WORKDIR  /usr/src/app
RUN npm run build api
CMD [ "node",'./dist/apps/api/main.js' ]

FROM node:alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist/apps/api .
CMD [ "node",'./main.js' ]
