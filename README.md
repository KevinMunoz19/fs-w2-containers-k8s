# Basic Budget Application

A basic budget javascript application using reacjs, express and Postgress.

## Using Docker

### 1. Postgres Container

```powershell
docker run `
-e POSTGRES_PASSWORD=mypass `
-e PGDATA=/var/lib/postgresql/data/pgdata `
-v PGDISCO:/var/lib/postgresql/data `
-v C:\Users\jesgu\code\fs-w2-containers-k8s\db:/docker-entrypoint-initdb.d `
-d -p 5432:5432 postgres:14.5
```

### 2. Backend Container

```powershell
# Dev purposes
docker run `
-e POSTGRES_HOST=172.17.0.2 `
-e POSTGRES_PASS=mypass `
-v $pwd\backend:/code `
-w /code `
-p 3800:3800 --rm -it `
node:18-buster "/bin/bash"
```

# RUN
```powershell
docker run `
-e POSTGRES_HOST=172.17.0.2 `
-e POSTGRES_PASS=mypass `
-d -p 3800:3800 backend:0.1.0
```

### 3. Frontend Container

```powershell
```