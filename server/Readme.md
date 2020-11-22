# Spellbook Shelf Server

## Docker dev environement

```bash
docker build -t shelfserver:dev -f Dockerfile.dev .
docker run -it -p 127.0.0.1:8080:8080 shelfserver:dev
```

## Docker prod environement

```bash
docker build -t shelfserver:prod -f Dockerfile.prod .
docker run -d -p 127.0.0.1:5000:8080 shelfserver:prod
```
