import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');
const serverPath = path.resolve(distPath, 'server');

// This function moves all files from dist/server to dist/
async function flattenDist() {
    if (fs.existsSync(serverPath)) {
        const files = fs.readdirSync(serverPath);

        for (const file of files) {
            const oldPath = path.join(serverPath, file);
            const newPath = path.join(distPath, file);

            // Move file to root dist if it doesn't exist or to overwrite
            fs.renameSync(oldPath, newPath);
        }

        // Remove the now-empty server directory
        fs.rmSync(serverPath, { recursive: true, force: true });
        console.log('erver chunks moved to dist root for Cloudflare.');
    } else {
        console.log('No server directory found to flatten.');
    }
}

flattenDist();
