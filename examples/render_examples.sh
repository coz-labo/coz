#!/bin/bash

###
# Run build tasks.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/.." && pwd)

cd ${BASE_DIR}

bash ./examples/01.basic_examples/render_basic_example.sh
