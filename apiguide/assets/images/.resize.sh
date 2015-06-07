#!/bin/bash

###
# Resize images with imagemagick.
##

HERE=$(cd "$(dirname $0)" && pwd)

cd ${HERE}

convert -resize x256 .src/coz-banner-src.png coz-banner.png
convert -resize x512 .src/coz-outline-src.jpg coz-outline.jpg
