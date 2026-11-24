import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "My printer has never printed on the first try. It waits — patient, smug, blinking — until the deadline is four minutes away, then jams on page one, eats the good paper, and flashes PAPER JAM like it's my fault. It doesn't print documents. It prints regret.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
