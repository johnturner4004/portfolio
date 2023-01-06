const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const mongoose = require('mongoose');
const User = require('../modules/user.schema');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String
// });

// const User = mongoose.model('User', userSchema);

passport.deserializeUser((id, done) => {
  // pool
  //   .query('SELECT * FROM "user" WHERE id = $1', [id])
  //   .then((result) => {
  //     // Handle Errors
  //     const user = result && result.rows && result.rows[0];

  //     if (user) {
  //       // user found
  //       delete user.password; // remove password so it doesn't get sent
  //       // done takes an error (null in this case) and a user
  //       done(null, user);
  //     } else {
  //       // user not found
  //       // done takes an error (null in this case) and a user (also null in this case)
  //       // this will result in the server returning a 401 status code
  //       done(null, null);
  //     }
  //   })
  //   .catch((error) => {
  //     console.log('Error with query during deserializing user ', error);
  //     // done takes an error (we have one) and a user (null in this case)
  //     // this will result in the server returning a 500 status code
  //     done(error, null);
  //   });
  try {
    const user = User.findOne({ username: username })

    if (user) {
      delete user.password;
      done(null, user);
    } else {
      done(null, null);
    }
  } catch (err) {
    console.error(err, 'Error deserializing user');
    done(err, null);
  }
});

// Does actual work of logging in
passport.use(
  'local',
  new LocalStrategy((username, password, done) => {
  //   pool
  //     .query('SELECT * FROM "user" WHERE username = $1', [username])
  //     .then((result) => {
  //       const user = result && result.rows && result.rows[0];
  //       if (user && encryptLib.comparePassword(password, user.password)) {
  //         // All good! Passwords match!
  //         // done takes an error (null in this case) and a user
  //         done(null, user);
  //       } else {
  //         // Not good! Username and password do not match.
  //         // done takes an error (null in this case) and a user (also null in this case)
  //         // this will result in the server returning a 401 status code
  //         done(null, null);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('Error with query for user ', error);
  //       // done takes an error (we have one) and a user (null in this case)
  //       // this will result in the server returning a 500 status code
  //       done(error, null);
  //     });
    try {
      const user = User.findOne({ username: username })

      if (user && encryptLib.comparePassword(password, user.password)) {
        done(null, user);
      }
    } catch (err) {
      console.error(err, 'Error quering user')
      done(err, null);
    }
  })
);

module.exports = passport;