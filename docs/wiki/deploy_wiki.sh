#!/bin/bash

###
# Deploy wiki.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

WORK_DIR="${BASE_DIR}/.work/wiki_repo"
SRC_DIR="${BASE_DIR}/docs/wiki"

rm -rf ${WORK_DIR}
mkdir -p ${WORK_DIR}

cd ${WORK_DIR}

git clone https://github.com/okunishinishi/node-coz.wiki.git ${WORK_DIR}

rm ${WORK_DIR}/*.md
cp ${SRC_DIR}/*.md ${WORK_DIR}

cd ${WORK_DIR}
git add . -A
git commit -am "Update wiki"
git push

cd ${BASE_DIR}

rm -rf ${WORK_DIR}