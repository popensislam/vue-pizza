#!/usr/bin/env sh

set -e 

npm run build

cd dist 

git init 
git add -A 
git commit -m 'git page'
git push -f git@github.com:popensislam/vue-pizza.git master:gh-pages;

cd -