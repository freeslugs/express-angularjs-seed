# Express Angular Seed
======================

[Express.js](expressjs.com) [Angular.js](http://angularjs.org/) Seed 
 – No templating system, no jade or ejs. 
 – Uses straightforward html. 
 – Deeplinking within Angular.js

## How to use Express Angular Seed

Clone the express-angular-seed repository using `git clone https://github.com/freeslugs/express-angularjs-seed` and run `npm install` to download the dependencies.

### Running the app

Runs like a typical express app: `node app.js`

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      index.html        --> main page for app
      partials/         --> angular view partials
        partial1.html
        partial2.html
      css/              --> css files
        app.css         --> default stylesheet
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      lib/              --> angular and 3rd party JavaScript libraries
        angular/
          angular.js            --> the latest angular js
          angular.min.js        --> the latest minified angular js
          angular-*.js          --> angular add-on modules
          version.txt           --> version number  
    routes/
      api.js            --> route for serving JSON

## License
MIT

### Credits
Shout out to [btford](https://github.com/btford) who created the [angular-express-seed](https://github.com/btford/angular-express-seed) with jade. Used btford's work as a starting point.
