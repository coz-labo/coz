#!/bin/bash

###
# Deploy docs.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

git subtree pull --prefix=docs origin gh-pages
git subtree push --prefix=docs origin gh-pages