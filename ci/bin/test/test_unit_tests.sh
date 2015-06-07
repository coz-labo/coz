#!/bin/bash

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

npm run unittest -- ${BASE_DIR}/test/unit_tests/*_test.js ${BASE_DIR}/test/unit_tests/**/*_test.js