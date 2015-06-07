#!/bin/bash

###
# Resize images with imagemagick.
##

HERE=$(cd "$(dirname $0)" && pwd)

cd ${HERE}

convert -resize x256 .src/coz-outline-src.jpg coz-outline.jpg
convert -resize x256 .src/coz-banner-src.jpg coz-banner.jpg