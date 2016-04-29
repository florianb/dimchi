#!/bin/sh
set -e

BUILD_DIR=lib

sh scripts/test.sh

echo "cleaning lib/."
if [ -d "$BUILD_DIR" ]; then
  rm -rf "$BUILD_DIR/*"
else
  mkdir "$BUILD_DIR"
fi

echo "running babel."
babel src/ -d "$BUILD_DIR/"
babel src/root.main.js --out-file ./main.js

exit 0
