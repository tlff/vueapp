node -v
npm -v
if [ -e "./node_modules" ]
then 
    npm run build
else
    npm i
    npm run build
fi
