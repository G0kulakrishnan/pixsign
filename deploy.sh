#!/bin/bash
# PixSign – VPS Deploy Script
# Usage: bash deploy.sh
# Run this ON the VPS server: ssh root@85.208.51.93 then bash deploy.sh

set -e

REPO="https://github.com/G0kulakrishnan/pixsign.git"
APP_DIR="/var/www/pixsign"
BUILD_DIR="$APP_DIR/build_tmp"

echo "=========================================="
echo " PixSign Deploy"
echo "=========================================="

# 1. Install Node if missing
if ! command -v node &> /dev/null; then
  echo "[1/6] Installing Node.js..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
else
  echo "[1/6] Node $(node -v) already installed"
fi

# 2. Clone or pull latest code into temp build dir
echo "[2/6] Fetching latest code from GitHub..."
rm -rf "$BUILD_DIR"
git clone "$REPO" "$BUILD_DIR"

# 3. Install dependencies & build
echo "[3/6] Installing dependencies..."
cd "$BUILD_DIR"
npm install

echo "[4/6] Building production bundle..."
npm run build

# 4. Deploy dist/ to web root
echo "[5/6] Deploying to $APP_DIR ..."
mkdir -p "$APP_DIR"
rsync -a --delete "$BUILD_DIR/dist/" "$APP_DIR/"

# 5. Cleanup
echo "[6/6] Cleaning up..."
rm -rf "$BUILD_DIR"

echo ""
echo "✅ Deploy complete! Files live at $APP_DIR"
echo "   Make sure Nginx is configured (see below if first deploy)"
echo ""
