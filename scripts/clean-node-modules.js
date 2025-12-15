/**
 * Recursively removes every `node_modules` directory inside the repo root.
 * Designed to behave consistently across macOS, Linux, and Windows/WSL.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const skipDirs = new Set(['.git', '.turbo', '.next', 'coverage', 'dist']);

async function removeNodeModules(root) {
  const removed = [];
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();

    let entries;
    try {
      entries = await fs.promises.readdir(current, { withFileTypes: true });
    } catch {
      // Ignore directories we cannot read (permission issues, etc.).
      continue;
    }

    for (const entry of entries) {
      if (entry.isSymbolicLink()) continue;

      const fullPath = path.join(current, entry.name);

      if (entry.name === 'node_modules' && entry.isDirectory()) {
        try {
          await fs.promises.rm(fullPath, { recursive: true, force: true });
          removed.push(fullPath);
        } catch (error) {
          console.error(`Failed to remove ${fullPath}:`, error.message);
        }
        continue;
      }

      if (entry.isDirectory() && !skipDirs.has(entry.name)) {
        stack.push(fullPath);
      }
    }
  }

  return removed;
}

(async () => {
  const removedPaths = await removeNodeModules(rootDir);

  if (removedPaths.length === 0) {
    console.log('No node_modules directories found.');
    return;
  }

  console.log('Removed node_modules directories:');
  removedPaths.sort().forEach((p) => {
    console.log(`- ${p}`)}
  );
})();
