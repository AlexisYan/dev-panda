const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook')
const session = require('express-session');
const favicon = require('serve-favicon');
const path = require('path');

const isProd = !!(process.env.node_env === 'production')

if(!isProd) require('dotenv').load();

mongoose.connect(`mongodb://${process.env.UNAME}:${process.env.PASS}@${process.env.LOC}:${process.env.MDBPORT}/panda`);
const MongoStore = require('connect-mongo')(session);

const UserSchema = new mongoose.Schema({
  profileId: String,
  token: String,
});

const User = mongoose.model('User', UserSchema);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

passport.use(new FacebookStrategy({
  clientID: process.env.FB_APP_ID,
  clientSecret: process.env.FB_SECRET,
  callbackURL: `${isProd ? 'https://coordinator-app.herokuapp.com' : 'http://localhost:8080'}/auth/facebook/callback`,
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ profileId: profile.id }, (err, user) => {
    if (err) return done(err);
    if (user) return done(null, user);
    const newUser = new User();
    newUser.profileId = profile.id;
    newUser.token = accessToken;
    newUser.save(() => done(null, newUser));
  });
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
app.use(passport.initialize());
app.use(passport.session());

app.use('/static', express.static('public'));
app.use(bodyParser.json());
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => req.login(null, () => res.redirect('/')));

app.get('/auth/facebook/logout', (req, res) => {
  req.logout();
  res.end();
});

app.get('/', (req, res) => {
  // const user = req.user && { profileId: req.user.profileId, _id: req.user._id };

});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(process.env.WEB_PORT, () => console.log(`Server running on port ${process.env.WEB_PORT}`));
