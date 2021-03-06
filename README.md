[![Skylab](https://github.com/Iggy-Codes/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)
## FULL STACK FINAL PROJECT - SKYLAB CODERS BOOTCAMP - SUMMER 2017
___

### movTV
The application is live at heroku  
https://movtv.herokuapp.com   
In order to run it locally you must have node and bower installed on your computer.   
Clone this repo and execute both ```npm install``` and ```bower install``` commands in your terminal of choice. Then execute ```npm run dev``` to start the server. In order to store and retrieve data a running mongodb daemon will also be necessary.   
Note that the API key provided might no longer be active. You can get a new one [here](https://www.patreon.com/omdb)   

### Concept and design
This is a full stack web application designed using AngularJS in the front-end and NodeJS with Express in the back-end part. In order to store data it uses a MongoDB database through Mongoose. The authentication part was implemented using the module Passport.   
You'll find the full list of npm modules used as dependencies in the package.json and bower.json files.   
The app works as a media aggregator and a source of reviews and conversations about movies and Tv shows. Users can search movies and tv shows, add them to a personal collection, rate, comment and review them, and also view other users' reviews, ratings and collections.  

### Technologies
[![HTML5,CSS3 and JS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/) [![ES6](https://github.com/Iggy-Codes/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/) [![Bootstrap](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/) [![Bower](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bower.png)](http://bower.io/) [![SASS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/sass.png)](http://sass-lang.com) [![AngularJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/) [![NodeJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/) [![MongoDB](https://github.com/Iggy-Codes/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/) [![ExpressJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/expressjs.png)](http://www.expressjs.com/) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

### APIs
Data on Tv Shows and movies is served by [The Open Movie Database](http://www.omdbapi.com) API  
You can support its creator via Patreon [here](https://www.patreon.com/omdb)  
Application data(reviews, ratings, collections) is persisted through sessions using a database stored at [mLab](https://mlab.com/)




 



