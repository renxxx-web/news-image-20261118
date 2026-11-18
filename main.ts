// news-image-20261118 entry: "The World in One Frame" — Wednesday 18 November 2026.
//
// The poster itself ships beside this file as entry.png. All this program
// does is place a copy of it where the grader looks: the directory named by
// MAKEFUN_OUTPUT_DIR when that is set (local runs), otherwise /output.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// After copying, both files are read back and compared (length + SHA-256);
// any mismatch throws, so a truncated or corrupted delivery never passes
// unnoticed. Node 22, standard library only, no network.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(here, 'entry.png');
const dst = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Delivery check: the poster is only handed in if the copy on disk is
// byte-for-byte the file that shipped. Read both back and compare length
// and SHA-256; a short or corrupted write fails loudly instead of
// silently delivering a broken image.
const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');
const srcBytes = readFileSync(src);
const dstBytes = readFileSync(dst);
if (srcBytes.length !== dstBytes.length || sha256(srcBytes) !== sha256(dstBytes)) {
  throw new Error(
    `entry.png delivery check failed: copied file (${dstBytes.length} bytes, sha256 ${sha256(dstBytes)}) ` +
    `does not match the source (${srcBytes.length} bytes, sha256 ${sha256(srcBytes)})`
  );
}
