#!/bin/sh

kubectl delete namespace demoicp
kubectl create namespace demoicp

kubectl delete secret myregistrykey
kubectl create secret docker-registry myregistrykey \
  --docker-server=mycluster.icp:8500 \
  --docker-username=admin \
  --docker-password=AHippopotamusPlaysHopscotchWithAnElephant \
  --docker-email=griffitj@us.ibm.com \
  --namespace=demoicp

echo "secret created:"
kubectl get secret myregistrykey --namespace demoicp --output="jsonpath={.data.\.dockerconfigjson}" | base64 --decode
