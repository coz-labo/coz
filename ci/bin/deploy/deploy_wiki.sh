#!/bin/bash

###
# Deploy wiki.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

git submodule init
git submodule update

cd ${BASE_DIR}/docs/wiki/

git pull
git merge origin/master
git submodule update

git commit -am "Update wiki"
git push