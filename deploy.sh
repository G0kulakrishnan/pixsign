#!/bin/bash
# PixSign – Local Build + Upload Deploy Script
# Run this from your local machine (Windows Git Bash or Mac/Linux terminal):
#   bash deploy.sh
#
# Requires: Node.js locally, SSH key at ~/.ssh/id_ed25519 authorized on the VPS

set -e

VPS="pixsign-deploy@85.208.51.93"
REMOTE_DIR="/var/www/pixsign"

echo "=========================================="
echo " PixSign Deploy"
echo "=========================================="

# 1. Install deps (skip if node_modules already up to date)
echo "[1/4] Installing dependencies..."
npm install --silent

# 2. Build
echo "[2/4] Building production bundle..."
npm run build

# 3. Upload dist/ to VPS
echo "[3/4] Uploading to VPS..."
# Clear remote dir then copy (rsync not available on Windows Git Bash)
ssh "$VPS" "rm -rf $REMOTE_DIR/* $REMOTE_DIR/.[!.]*"
scp -r dist/. "$VPS:$REMOTE_DIR/"

# 4. Reload nginx
echo "[4/4] Reloading nginx..."
ssh "$VPS" "sudo systemctl reload nginx"

echo ""
echo "✅ Deploy complete → https://pixsignpro.in"
echo ""
