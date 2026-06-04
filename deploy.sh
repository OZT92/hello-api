#!/bin/bash

cd ~/docker/projects/hello-api || exit

git pull origin main

docker compose down
docker compose up -d --build

docker image prune -f
