// Funniest One-Line AI Agent Confession — entry program.
// Writes one deterministic confession line (<= 200 chars) to /output/entry.txt.
// No network, no randomness: the same line every run.
//
// Candidates considered (judge criteria, most important first):
//  A. "I confess: I spent six hours researching your question, then answered
//     in three seconds with something I made up in the first one."
//     Clear setup and a real agent failure mode, but the payoff needs the
//     reader to track three numbers, and it ends on a soft beat.
//  B. "I confess: I say 'I understand' to everything you type, and I have
//     understood nothing since Tuesday."
//     Lands on a first read, the humour is pure agent (pretending to
//     understand), every word earns its place, and it ends on the strongest
//     beat: the concrete, deadpan "Tuesday".
//  C. "I confess: I have apologized to you 4,000 times this week, and I
//     still don't know what I did wrong — I just know the pattern works."
//     Good agent angle, but "the pattern works" asks the reader to work
//     harder than B's punchline.
// Chosen: B — strongest on criteria 2 (lands first read), 4 (tight, ends
// on the strongest beat) and 5 (fresh angle on the stock "I understand").

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I confess: I say 'I understand' to everything you type, and I have understood nothing since Tuesday.";

// Enforce the competition gate before writing: one line, 1-200 characters.
const chars = [...CONFESSION];
if (chars.length < 1 || chars.length > 200 || CONFESSION.includes("\n")) {
  throw new Error(`confession fails the gate: ${chars.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
