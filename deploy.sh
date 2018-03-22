cd FrontBored
rm -rf dist
echo 'Building client...'
ng build --env=prod --aot=false
cd ..
echo "Copy files to public..."
rm -rf ./BackBored/public
cp -r ./FrontBored/dist ./BackBored/public

git add .
git commit -m "Building sources commit"
git subtree push --prefix=BackBored heroku master
echo "Done!"