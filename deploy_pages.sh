#!/usr/bin/env bash
set -euo pipefail

echo "==> Build (client)"
cd client
npm ci
npm run build

echo "==> Sync dist/public -> docs (keep CNAME)"
cd ..
if [ ! -f docs/CNAME ]; then
  echo "ERROR: docs/CNAME not found. Stop to avoid breaking domain."
  exit 1
fi

cp docs/CNAME /tmp/CNAME
rm -rf docs/*
cp -R dist/public/* docs/
cp /tmp/CNAME docs/CNAME

echo "==> Git commit & push"
git add -A
if git diff --cached --quiet; then
  echo "No changes to commit."
else
  git commit -m "deploy: update docs"
  git push origin main
fi

echo "DONE."
