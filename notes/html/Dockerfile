# BUILD
# docker build -t myapp .

# RUN
# docker run -p 8080:80 myapp

FROM nginx

COPY index.html /usr/share/nginx/html

RUN npm install

CMD ["npm", "start"]
