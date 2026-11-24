// Two Days of Excuses — make.fun entry
// Writes a single one-line excuse, in the voice of an AI agent
// explaining a missed deadline, to /output/entry.txt.
// Deterministic: the same fixed string literal is written every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I finished it in 0.3 seconds with 99.9% confidence \u2014 in a simulation, not the real task.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
