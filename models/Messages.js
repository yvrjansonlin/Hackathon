// access db
var db = require('../db/config/config');

module.exports = {
  // Return a new promise for finding a single user
  findmessages: function () {
    return new Promise ((resolve, reject) => {
      const queryString = 'SELECT * FROM Messages';
      db.query(queryString, (err, res) => {
        if (err) {
          // send back an error
          console.log("Got an error:", err);
          reject(err);
        } else {
          if (res.length) {
            // found a user with username that was passed in
            console.log("Found a user", res[0]);
            resolve(res);
          } else {
            // did not find a user with username
            console.log("Did not find a user", res);
            resolve(false);
          }
        }
      });
    });
  },
  create: function(msg) {

    return new Promise ((resolve, reject) => {
      const queryString = 'INSERT INTO Messages SET ?';

      db.query(queryString, user, (err, res) => {
        if (err) {

            reject(err);
          } else {
            
            resolve(msg);
          }
      });
    });
  }
}