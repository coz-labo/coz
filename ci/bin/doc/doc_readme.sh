#!/bin/bash

###
# Create readme.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

node ./bin/kyo render docs/readme/.*.bud
cp -f docs/readme/README.md README.md

echo "Generate file: README.md"