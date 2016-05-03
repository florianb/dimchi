#!/bin/sh
set -e

BUILD_DIR=lib

sh scripts/test.sh

echo "cleaning lib/."
if [ -d "$BUILD_DIR" ]; then
  echo "removing $BUILD_DIR/."
  rm -rf "$BUILD_DIR/"
else
  echo "creating $BUILD_DIR/."
  mkdir "$BUILD_DIR"
fi

echo "copying src/ to lib/."
cp -vr src/ "$BUILD_DIR/"

echo "running babel."
babel src/ -d "$BUILD_DIR/"

exit 0
