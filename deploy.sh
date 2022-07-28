rm -rf dist 
yarn build
cd dist
git init
git add .
git commit -m 'update'
git brsnch -M main
git remote add origin git@github.com:HHuangYQ/Grape-ui.git
git push -f -u origin main
cd -