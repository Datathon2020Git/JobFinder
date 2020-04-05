
FROM job-finder_datathonbuild as builder
WORKDIR /usr/src/app
RUN ls
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=builder /usr/src/app/apps/job-finder/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/apps/job-finder /usr/share/nginx/html