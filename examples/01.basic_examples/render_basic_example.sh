#!/bin/bash

###
# Render bud files in this directory.
###

HERE=$(cd "$(dirname $0)" && pwd)

cd ${HERE}

# Render all bud files in this directory.
coz render .*.bud


