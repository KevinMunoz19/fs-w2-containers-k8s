# BUILD
# docker build -t backend:0.1.0 .
# RUN
# docker run -d -p 3800:3800 -e POSTGRES_HOST=172.17.0.2 -e POSTGRES_PASS=mypass backend:0.1.0

FROM node:18-alpine3.15

ENV POSTGRES_USER=postgres \
    POSTGRES_PASS=your_pass \
    POSTGRES_HOST=localhost \
    POSTGRES_DATABASE=postgres \
    POSTGRES_PORT=5432 \
    SERVER_PORT=3800

COPY . /opt/app

WORKDIR /opt/app

RUN npm install

CMD ["npm", "start"]
