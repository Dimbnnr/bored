cd FrontBored
rm -rf dist
echo 'Building client...'
ng build --env --aot=false
cd ..
echo "Copy files to public..."
rm -rf ./server/public
cp -r ./FrontBored/dist ./BackBored/public

git add .
git commit -m "Building sources commit"
git subtree push --prefix=BackBored heroku master
echo "Done!"