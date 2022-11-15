# Kubectl useful commands


```sh
# Get all the nodes of the cluster
kubectl get nodes

# Namespace commands
kubectl get namespaces
kubectl create namespace app1
kubectl delete namespace app1

# Create deployment (Start applicacion)
kubectl create deployment hello-minikube --image=docker.io/nginx:1.23

# Create service (Expose the application)
kubectl expose deployment hello-minikube --type=ClusterIP --port=80     # Private. It can be accessed inside the cluster
kubectl expose deployment hello-minikube --type=LoadBalancer --port=80  # Public. It can be accessed outside the cluster

# Delete service
kubectl delete service hello-minikube

# Forward service
kubectl port-forward service/hello-minikube 7080:80
```
