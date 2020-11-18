FROM nginx:alpine
LABEL author="Pedro Dias"
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
