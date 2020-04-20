
FROM job-finder-modules as builder
WORKDIR  /app
COPY ./ ./
RUN npm run build api

FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app .
RUN ls
EXPOSE 8080
CMD ["node", "dist/apps/api/main.js"]
