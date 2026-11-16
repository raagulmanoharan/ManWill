#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf dist
mkdir -p dist/assets
cp index.html research.html styles.css script.js dist/
for item in instrument-serif-regular.woff2 dm-sans-regular.woff2 LICENSE-instrument-serif.txt LICENSE-dm-sans.txt; do
  cp "assets/$item" dist/assets/
done
touch dist/.nojekyll
