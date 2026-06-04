#!/bin/bash

cd ~/docker/projects/hello-api || exit

git fetch origin main

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" != "$REMOTE" ]; then
  echo "New commit found. Deploying..."

  git pull origin main

  docker compose down
  docker compose up -d --build
  docker image prune -f

  echo "Deploy completed."
else
  echo "No changes."
fi
