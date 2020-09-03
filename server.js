const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const buildRoutes = require('./routes/build-routes');
const authRouter = require('./routes/auth-routes');
const partRoutes = require('./routes/part-routes')
const user_buildRouter = require('./routes/user_build-routes')
const app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    key: process.env.SECRET_KEY,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('src'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

app.get('/api', (req, res) => {
  res.send('Goodbye Cruel World!');
});

app.use('/api/builds', buildRoutes)
app.use('/api/parts', partRoutes)
app.use('/api/auth', authRouter)
app.use('/api/user', user_buildRouter)

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Not found!',
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err,
    message: err.message,
  });
});