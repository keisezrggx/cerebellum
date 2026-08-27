# Deployment

Keep deployment manifests, environment mappings, health checks, and rollback notes here. Do not put secret values in this directory.

Minimum production gates:

- `npm run lint`
- `npm run build`
- dependency and secret scanning in CI
- configured error logging and uptime monitoring
- database backup and restore verification
- documented rollback of the web release and schema changes