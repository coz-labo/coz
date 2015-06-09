#!/bin/bash

###
# Run build tasks.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

node ./ci/bin/render/render_bud.js

cp -rf docs/examples .
bash ./examples/render-these.sh