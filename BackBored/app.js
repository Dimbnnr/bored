require('dotenv').config()
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const cors           = require("cors");
// const router = require("./routes/users");
const session        = require("express-session");
const passport       = require("passport");


const index = require('./routes/index');
const authUsers = require('./routes/users');
const proposition = require('./routes/propositions');
const review = require('./routes/review');


const app = express();


const mongoose = require ('mongoose');
mongoose.connect(process.env.mongoURL)
  .then(console.log(`Connected to ${process.env.mongoURL}!!!`));



  const corsOptions = {
    origin: true,
    credentials: true
  };
  app.use(cors(corsOptions));
  



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.use(session({ // para los cookies
  secret: "lab-angular-authentication", //nombre de la cookie que se guarda en el navegador
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 } // el cookie se genera solo cuando hay una llamada a una http
}));


// Passport configuration
require("./configuration/passport")(passport,app);



app.use('/', index);
app.use('/api/auth', authUsers);
app.use('/api/proposition', proposition);
app.use('/api/review', review);
// para hacer deploy en Heroku 
app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
