import { AXON_SERVER_PORT } from "@lab/core/constants/ports";
import { websocket } from "hono/bun";

import { app } from "@/index";

export default {
  port: AXON_SERVER_PORT,
  fetch: app.fetch,
  websocket,
};
