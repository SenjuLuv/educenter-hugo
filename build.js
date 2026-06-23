const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const outDir = path.join(srcDir, 'dist');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function cleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

// Clean dist
cleanDir(outDir);

// Copy index.html
fs.copyFileSync(path.join(srcDir, 'index.html'), path.join(outDir, 'index.html'));

// Copy pages
const pagesSrc = path.join(srcDir, 'pages');
const pagesDest = path.join(outDir, 'pages');
if (fs.existsSync(pagesSrc)) {
  copyDir(pagesSrc, pagesDest);
}

// Copy assets
const assetsSrc = path.join(srcDir, 'assets');
const assetsDest = path.join(outDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  copyDir(assetsSrc, assetsDest);
}

console.log('Build complete! Output in:', outDir);
