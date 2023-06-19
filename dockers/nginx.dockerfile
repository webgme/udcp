FROM nginx:stable
ARG udcpoption=default

# Delete default config
RUN rm -r /etc/nginx/conf.d && rm /etc/nginx/nginx.conf

COPY ./config/nginx.${udcpoption}.conf /etc/nginx/nginx.conf