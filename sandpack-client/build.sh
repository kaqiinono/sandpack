nvm use 12
node -v
rm -rf dist
yarn build

cd ..
npm link @jd/sandpack-client

echo 'switch to node 14'
