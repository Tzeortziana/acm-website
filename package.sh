#!/bin/bash

# build the site
# MAYBE: add RAYON_NUM_THREADS=1 before build if needed
npx next build

# copy the folders inside standalone
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

zip -r standalone.zip .next/standalone