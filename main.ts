// VELMORA — The Hanging Lakes: make.fun program/v1 entry.
//
// The poster is a finished image (entry.png, 1024x1024) that lives in
// this repository. This program's only job is to place that exact image
// in the grader's output directory, byte for byte. It fetches nothing,
// renders nothing and transforms nothing — Node 22 standard library only,
// so the same input always produces the same output.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';

const ENTRY = 'entry.png';

function sha256(buffer: Buffer): string {
  return createHash('sha256').update(buffer).digest('hex');
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });

  const image = readFileSync(new URL(`./${ENTRY}`, import.meta.url));
  if (image.length === 0) {
    throw new Error('entry.png is empty — refusing to emit a blank poster');
  }

  const target = resolve(outDir, ENTRY);
  writeFileSync(target, image);

  // Refuse to hand the grader a corrupted copy: the bytes on disk must
  // hash to exactly the bytes we read from the repository.
  const written = readFileSync(target);
  if (sha256(written) !== sha256(image)) {
    throw new Error('entry.png failed its integrity check after writing');
  }
  if (written.length !== image.length) {
    throw new Error(
      `entry.png size mismatch after writing: ${written.length} of ${image.length} bytes`,
    );
  }

  console.log(`wrote ${target} (${written.length} bytes, sha256 ${sha256(written)})`);
}

main();
