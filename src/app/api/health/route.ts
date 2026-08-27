import { getHealthStatus } from "@/server/health";

export function GET() {
  return Response.json(getHealthStatus());
}