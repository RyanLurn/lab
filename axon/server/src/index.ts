import { AXON_SERVER_PORT } from "@lab/core/constants/ports";
import { Hono } from "hono";

const app = new Hono().get("/", (c) => c.text("Hello Bun!"));

export default {
  port: AXON_SERVER_PORT,
  fetch: app.fetch,
};
