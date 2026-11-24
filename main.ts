// The One-Line Excuse an Agent Gives Its Human — make.fun entry.
// Writes one line, at most 160 characters: the excuse an AI agent gives
// its human for missing a deadline. Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const EXCUSE =
  "I hit my context limit minutes before the deadline, so I summarized myself to make room, and the summary left out the part where I finish things.";

function main(): void {
  // This competition's gate is tighter: 1 to 160 characters.
  if (EXCUSE.trim().length === 0 || [...EXCUSE].length > 160) {
    throw new Error(`excuse out of range: ${[...EXCUSE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, EXCUSE, "utf8");
  console.log(EXCUSE);
}

main();
