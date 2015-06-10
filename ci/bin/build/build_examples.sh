#!/bin/bash

###
# Run build tasks.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

node ./ci/bin/render/render_bud.js

bash ./docs/examples/render_examples.sh
cp -rf docs/examples .
