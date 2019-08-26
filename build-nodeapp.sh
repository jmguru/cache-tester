#!/bin/sh
HERE=$(pwd)

echo "Remove image"
docker images | grep 'demoicp/node-app' | awk '{print $3}' | xargs docker rmi -f

echo "Building the node app image..."
docker build -t demoicp/node-app:latest -f ./Dockerfile .

echo "Add tag to image..."
docker tag demoicp/node-app:latest mycluster.icp:8500/demoicp/node-app:latest

echo "Push image to private Docker registry"
docker login mycluster.icp:8500

docker push mycluster.icp:8500/demoicp/node-app:latest
