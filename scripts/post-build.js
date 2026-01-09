import { copyFileSync, existsSync } from 'fs';

const workerSource = '.cloudflare-pages/entry.cloudflare-pages.js';
const workerDest = 'dist/_worker.js';

if (existsSync(workerSource)) {
    copyFileSync(workerSource, workerDest);
    console.log('✓ Copied worker file to dist/_worker.js');
} else {
    console.error('✗ Worker file not found at:', workerSource);
    process.exit(1);
}
