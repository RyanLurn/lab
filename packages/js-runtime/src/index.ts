import { join } from "node:path";

import { scan } from "@/lexer/scan";

const sourceTextPath = join(import.meta.dir, "..", "fixtures/simple.js");
const sourceText = await Bun.file(sourceTextPath).text();

scan(sourceText);
