import { AXON_SERVER_PORT } from "@lab/core/constants/ports";

import { app } from "@/index";

export default {
  port: AXON_SERVER_PORT,
  fetch: app.fetch,
};
