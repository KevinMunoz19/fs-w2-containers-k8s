# Basic Budget Application

A basic budget javascript application using reacjs, express and Postgress.

## Using Docker

### 1. Postgres Container

```powershell
# RUN
docker run `
-e POSTGRES_PASSWORD=mypass `
-e PGDATA=/var/lib/postgresql/data/pgdata `
-v PGDISCO:/var/lib/postgresql/data `
-v $pwd\db:/docker-entrypoint-initdb.d ` # Load init.sql
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

# Build
docker build -t backend:0.1.0 backend/

# RUN
docker run `
-e POSTGRES_HOST=172.17.0.2 `
-e POSTGRES_PASS=mypass `
-d -p 3800:3800 backend:0.1.0
```

### 3. Frontend Container

```powershell
# Dev purposes
docker run `
-e REACT_APP_BACKEND_BASE_URL=http://localhost:3800 `
-v $pwd\frontend:/code `
-w /code `
-p 3000:3000 --rm -it `
node:18-buster-slim "/bin/bash"

# Build
docker build -t frontend:0.1.0-alpine frontend/

# RUN
docker run -d -p 80:80 frontend:0.1.0-alpine

```