#!/bin/bash

###
# Run doc tasks.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../.." && pwd)

cd ${BASE_DIR}

bash ./ci/bin/build.sh
node ./ci/bin/doc/doc_apiguide.js
bash ./ci/bin/doc/doc_readme.sh

cp assets/images/coz-favicon.png docs/favicon.png
