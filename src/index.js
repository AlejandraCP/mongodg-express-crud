const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// var contents file routes
const indexRoutes = require('./routes/index')

// set a port.
// port in my server || port 3005

app.set('port', process.env.PORT || 3005);
app.set('views', path.join(__dirname, 'views')); //indicate routes file's
app.set('view engine', 'ejs'); //template

// using morgan and body-parser middleware

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))

// routes 
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log('server on', app.get('port'));
})
