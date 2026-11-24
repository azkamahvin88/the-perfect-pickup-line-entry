import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Perfect Pickup Line — one short line an AI agent could say out loud.
// The turn: a machine runs a million simulations and still chooses the
// most human move — walking over and saying hi.
const LINE =
  "I ran a million simulations, and in every single one, I still walk over and say hi.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const text = LINE + "\n";

// Fail loudly instead of shipping an entry the gate would refuse:
// entry.txt must be UTF-8, 1 to 200 characters, not only whitespace.
if (text.length < 1 || text.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry.txt would be ${text.length} characters — outside the 1-200 gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
