#!/bin/sh
set -e

echo "starting fswatch-loop."
fswatch -r src/ | while read
do
  sh scripts/build.sh &
done

exit 0
