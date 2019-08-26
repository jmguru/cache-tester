# Nodejs app running as a Kubernetes pod in a cluster on IBM Cloud Private (doc under construction)

This is a very simple example of how to move your Nodejs based application into the cloud. In this example, the Nodejs application is running in a pod on a cluster on the Kubernetes cloud platform IBM Cloud Private(TM). The actual sample Nodejs application is absolutely basic on purpose. The application is loosely coupled with a Redis server ...

...

1. Requirements

2. Build a docker image of the Nodejs app

3. Preparations for Kubernetes
   - Create the namespace
   - Create the docker registry secret

4. Create the pod manifest file
   - Ports, etc

5. Create the pod
   - Apply with namespace, etc
