#!/bin/bash
# PixSign – VPS Deploy Script
# Usage (from local machine): bash deploy.sh
# Or SSH in as deploy user: ssh pixsign-deploy@85.208.51.93 then bash deploy.sh

set -e

REPO="https://github.com/G0kulakrishnan/pixsign.git"
APP_DIR="/var/www/pixsign"
BUILD_DIR="/tmp/pixsign_build"

echo "=========================================="
echo " PixSign Deploy"
echo "=========================================="

# 1. Check Node
if ! command -v node &> /dev/null; then
  echo "[1/5] Node not found — install it as root first: apt install nodejs"
  exit 1
else
  echo "[1/5] Node $(node -v) ✓"
fi

# 2. Clone latest code
echo "[2/5] Fetching latest code from GitHub..."
rm -rf "$BUILD_DIR"
git clone "$REPO" "$BUILD_DIR"

# 3. Install & build
echo "[3/5] Installing dependencies..."
cd "$BUILD_DIR"
npm install --silent

echo "[4/5] Building production bundle..."
npm run build

# 4. Deploy to web root
echo "[5/5] Deploying to $APP_DIR ..."
mkdir -p "$APP_DIR"
cp -r "$BUILD_DIR/dist/." "$APP_DIR/"
rm -rf "$BUILD_DIR"

# 5. Reload nginx
sudo systemctl reload nginx

echo ""
echo "✅ Deploy complete → https://www.pixsign.in"
echo ""
