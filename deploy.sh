rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin https://github.com/HHuangYQ/Grape-ui &&
git push -f -u origin main &&
cd -
echo hhuangyq.github.io/grape-ui/index.html