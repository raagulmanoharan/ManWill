#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf dist
mkdir -p dist/assets
cp index.html research.html styles.css script.js hero-motion.css hero-motion.js dist/
for item in inter-tight-latin.woff2 LICENSE-inter-tight.txt; do
  cp "assets/$item" dist/assets/
done
python3 scripts/build-visuals.py
python3 scripts/build-motion.py
if [[ -f production/review.html ]]; then cp production/review.html dist/review.html; fi
python3 scripts/version-assets.py
touch dist/.nojekyll
