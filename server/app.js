'use strict';
require('dotenv').config();

/** Module dependencies. */
const express      = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const path = require('path');
const sequelizeDB = require('./models/');

const port = process.env.PORT || 5000;
const app = express();

app.set('port', port);
app.use(cookieParser())
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: false }))
   .use(logger('dev'))

  if(process.env.NODE_ENV === 'production'){
    //
    app.use(express.static(path.resolve(__dirname, '../client/build')));

    require('./routes')(app);
    app.get( "/*", (request, response) => {
      response.sendFile(path.resolve(__dirname, '../client/build/index.html'));
    })
  }

  app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
  });
