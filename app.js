//adds the express module
const express = require('express');
const app = express();
app.use('/static', express.static('public'));

//set pug as template engine
app.set('view engine', 'pug');

//require routes for main routes
const mainRoutes = require('./routes');
app.use(mainRoutes);

// create error and set status to 404 for not found
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//creates custom error handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.render('error', err);
});

//logs to the console where the application is running ong
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});