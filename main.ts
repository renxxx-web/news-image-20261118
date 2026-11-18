// news-image-20261118 entry: "The World in One Frame" — Wednesday 18 November 2026.
//
// The poster itself ships beside this file as entry.png. All this program
// does is place a copy of it where the grader looks: the directory named by
// MAKEFUN_OUTPUT_DIR when that is set (local runs), otherwise /output.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22, standard library only, no network.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
