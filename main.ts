const fs = require('node:fs');
const path = require('node:path');

// A relationship status that's more complicated than the word itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), 'situationship\n', 'utf8');
