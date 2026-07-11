# Kubernetes Manifests for Kudos Backend

This directory contains the Kubernetes manifests required to deploy the kudos-backend service to the staging environment.

## Contents

### postgres-secret.yaml
A Kubernetes Secret manifest that stores the base64-encoded database connection string for the staging PostgreSQL database.

**Key Details:**
- Secret name: `postgres-secret`
- Secret key: `db-url`
- Encoded value: `postgres://user:pass@postgres-staging:5432/kudos_db`
- Namespace: `staging`

### kudos-backend-deployment.yaml
A Kubernetes Deployment manifest that defines the kudos-backend service pod specification, including:
- Container image: `kudos-backend:latest`
- Replica count: 1
- Port: 8080
- Environment variable `DB_URL` injected from the `postgres-secret` Secret

**Key Details:**
- Deployment name: `kudos-backend`
- App label: `kudos-backend`
- Namespace: `staging`
- The `DB_URL` environment variable is populated from `postgres-secret`'s `db-url` key using `valueFrom.secretKeyRef`

### kustomization.yaml
A Kustomize manifest that organizes and applies all Kubernetes manifests together.

## Deployment Instructions

To deploy these manifests to the staging cluster:

```bash
kubectl apply -k k8s/
```

Or to apply them explicitly with namespace:

```bash
kubectl apply -f k8s/ --namespace=staging
```

## Verification

After deployment, verify the pod is running correctly:

```bash
# Check pod status
kubectl get pods -n staging

# Check pod logs for any errors
kubectl logs -n staging -l app=kudos-backend

# Verify the secret was created
kubectl get secrets -n staging postgres-secret
```

## Base64 Encoding Reference

The `db-url` value in postgres-secret.yaml is base64-encoded:
- Original: `postgres://user:pass@postgres-staging:5432/kudos_db`
- Base64:   `cG9zdGdyZXM6Ly91c2VyOnBhc3NAcG9zdGdyZXMtc3RhZ2luZzo1NDMyL2t1ZG9zX2Ri`

To update the connection string, encode your new value using:
```bash
echo -n "postgres://user:pass@host:5432/db" | base64
```
