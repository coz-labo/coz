#!/bin/bash

###
# Deploy examples.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

git subtree push --prefix=examples origin live-examples