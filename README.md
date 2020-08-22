# WellBeFixed Russion Post

User segmentation algorithm for Russian Post

# Project Stack

- Front: React, Bootstrap, SCSS
- Back: Node JS, Express JS, Mongoose

## Necessary software for deployment
- Node JS (with npm)
- Git

## Available Scripts

### `npm install`

Install server dependencies

### `npm run client:install`

Install client dependencies

### `npm run build`

Build client packages

### `npm run dev`

Runs the app in the development mode

### `npm run start`

Runs the app in the production mode

### `npm run deploy:install`

Install all dependencies & build client

### `npm run deploy:update`

Update app from git & build client

mongoimport --uri "mongodb://root:<PASSWORD>@atlas-host1:27017,atlas-host2:27017,atlas-host3:27017/<DATABASE>?ssl=true&replicaSet=myAtlasRS&authSource=admin" --collection myData --drop --file /somedir/myFileToImport.json