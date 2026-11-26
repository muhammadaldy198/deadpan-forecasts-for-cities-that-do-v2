// Deadpan Forecasts for Cities That Do Not Exist — v2 entry.
// One line, 136 characters: a deadpan broadcast forecast for Pyrelight,
// where the volcano next door is treated like a noisy neighbour.
// v2 adds one concrete forecast datum (6:47pm) to the v1 mechanism:
// scheduled Tuesday eruption, council noise complaint, single causal turn.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { dirname } from "node:path";

const FORECAST =
  "In Pyrelight, the volcano next door erupts at 6:47pm every Tuesday, so the council has asked it, in writing, to keep it down after nine.";

const target = "/output/entry.txt";
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, FORECAST, "utf8");
chmodSync(target, 0o644);
