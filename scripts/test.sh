#!/bin/sh
set -e

echo "running xo."
xo

echo "running ava."
nyc ava

exit 0
