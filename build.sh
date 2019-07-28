#!/bin/sh
HERE=$(pwd)

echo "Building the node app image..."

docker build -t node-app -f ./Dockerfile .

echo "Composing docker instances..."

docker-compose up -d
