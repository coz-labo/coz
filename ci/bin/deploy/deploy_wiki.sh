#!/bin/bash

###
# Deploy wiki.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

cd docs/wiki/

git add . -A
git commit -am "Update wiki"

if [[ -n $(git diff --stat --cached origin/master) ]]; then
    # Push only if needed.
    git push
fi

cd ${BASE_DIR}

git add docs/wiki/ -fA
git commit -am "Update wiki"
git push