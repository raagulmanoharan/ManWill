#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf dist
mkdir -p dist/assets/visuals
cp index.html research.html styles.css script.js dist/
cp assets/inter-tight-latin.woff2 assets/LICENSE-inter-tight.txt dist/assets/
cp -R assets/brand assets/vendor dist/assets/
mkdir -p dist/assets/editorial
for item in coffee-lettering-white.webp brewing-editorial.webp macro.webp beans.webp; do
  cp "assets/editorial/$item" dist/assets/editorial/
done
for item in people-brewer.webp current-shop-day.jpg current-shop-counter.jpg; do
  cp "assets/visuals/$item" dist/assets/visuals/
done
python3 scripts/version-assets.py
touch dist/.nojekyll
printf 'Built editorial Manwill proposal.\n'
