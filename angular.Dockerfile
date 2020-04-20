
FROM job-finder-modules as builder
WORKDIR /app
COPY ./ ./
RUN ls
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=builder /app/apps/job-finder/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/apps/job-finder /usr/share/nginx/html