export type HealthStatus = {
  status: "ok";
  service: "cerebellum-web";
};

export function getHealthStatus(): HealthStatus {
  return {
    status: "ok",
    service: "cerebellum-web",
  };
}