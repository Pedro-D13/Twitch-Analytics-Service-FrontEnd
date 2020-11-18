

# #### stage 1
# FROM node:13.11.0 as node
# LABEL author="Pedro Dias"
# WORKDIR /app
# COPY . .
# RUN npm install
# # ARG env=prod
# # RUN npm run build -- --prod --environment $env
# RUN npm run build --prod

# #### stage 2
# FROM nginx:alpine
# VOLUME /var/cache/nginx
# COPY --from=node /app/dist/twitch-analytics-service-frontend2/. /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
