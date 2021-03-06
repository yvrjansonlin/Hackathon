// access db
var db = require('../db/config/config');

module.exports = {
  // Return a new promise for finding a single user
  findOne: function (user) {
    console.log(user)
    return new Promise ((resolve, reject) => {
      const queryString = 'SELECT * FROM Users WHERE username=?';
      db.query(queryString, [user.username], (err, res) => {
        if (err) {
          // send back an error
          console.log("Got an error:", err);
          reject(err);
        } else {
          if (res.length) {
            // found a user with username that was passed in
            console.log("Found a user", res[0]);
            resolve(res[0]);
          } else {
            // did not find a user with username
            console.log("Did not find a user", res);
            resolve(false);
          }
        }
      });
    });
  },
  create: function(user) {
    console.log("hi")
    return new Promise ((resolve, reject) => {
      const queryString = 'INSERT INTO Users SET ?';
      console.log("hello")
      db.query(queryString, user, (err, res) => {
        if (err) {
            console.log("got error:", err);
            reject(err);
          } else {
            console.log(user);
            resolve(user);
          }
      });
    });
  }
}