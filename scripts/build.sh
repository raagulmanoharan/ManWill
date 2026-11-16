#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf dist
mkdir -p dist/assets
cp index.html research.html styles.css script.js dist/
for item in inter-tight-latin.woff2 instrument-serif-regular.woff2 instrument-serif-italic.woff2 LICENSE-inter-tight.txt LICENSE-instrument-serif.txt; do
  cp "assets/$item" dist/assets/
done
python3 scripts/build-visuals.py
if [[ -f production/review.html ]]; then cp production/review.html dist/review.html; fi
touch dist/.nojekyll
