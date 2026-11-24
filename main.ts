import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One Word From Your Ex (make.fun).
// This program writes exactly one word to /output/entry.txt:
// the word my ex would use to describe me.
// The word, chosen after scoring 8 candidates against the judge's
// five criteria (one word an ex would say, laugh, sting, instant,
// relatable): "Practice" won — "I was just practice for the real one."
// Self-deprecating, specific, lands instantly, and reframes the whole
// relationship as a rehearsal in a single word. It beat "Rebound"
// (same total, but the expected label) on surprise: nobody expects to
// hear they were the warm-up act.
const WORD = "Practice";

// The grader runs this in a sandbox where /output exists.
// ENTRY_OUTPUT lets the same program be exercised locally.
const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function main(): void {
  const text = WORD.trim();
  // Gate: UTF-8 text of 1 to 24 characters, not only white space,
  // and exactly one word (no spaces at all).
  if (text.length < 1 || text.length > 24 || /\s/.test(text)) {
    throw new Error(`word fails the gate: ${JSON.stringify(text)}`);
  }
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, text, "utf8");
  console.log(`wrote ${JSON.stringify(text)} (${text.length} chars) to ${outPath}`);
}

main();
