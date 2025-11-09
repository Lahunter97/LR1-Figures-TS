import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export default function readLines(relPath: string): string[] {
  const abs = resolve(process.cwd(), relPath);
  const content = readFileSync(abs, 'utf-8');
  return content.split(/\r?\n/).filter((l) => l.trim().length > 0);
}
