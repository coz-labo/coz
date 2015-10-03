#!/bin/bash

###
# use-custom-config-from-cli.sh
# This is a CLI shell file for "examples/06-customize-coz"
##

HERE=$(dirname $0)

cd ${HERE}

# Render bud with custom configuration.
coz render ".render-by-custom-cli.txt.bud" -c "use-custom-config-from-cli.config.js"