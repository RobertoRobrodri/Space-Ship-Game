FROM nginx

COPY . /usr/share/nginx/html

CMD ["rm", "-rf", "Dockerfile"]
