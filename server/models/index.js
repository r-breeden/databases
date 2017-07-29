//RAB// this will load files in this folder (no need to reference the file in the folder directly)
var db = require('../db');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () {
      db.connection.query('SELECT * FROM Messages', function(err, results, fields) {
        if (err) {
          throw err;
        }
        
      });
    }, 
    // a function which can be used to insert a message into the database
    post: function (message, res) {
      var username = JSON.stringify(message.username);
      var text = JSON.stringify(message.text);
      var roomname = JSON.stringify(message.roomname);
      var sql = `INSERT INTO Messages (username, text, roomname) VALUES (${username}, ${text}, ${roomname})`;
      db.connection.query(sql, function(error, results, fields) {
        if (error) {
          throw error;
        } else {
          console.log('One message inserted!');
          res.writeHead(200, headers);
        }        
      });
    }    
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user, res) {
      var username = JSON.stringify(user.username);
      var sql = `INSERT INTO Users (username) VALUES (${username})`;
      console.log(sql);
      db.connection.query(sql, function(error, results, fields) {
        if (error) {
          throw error;
        } else {
          console.log('One user inserted!');
          res.writeHead(200, headers);
        }        
      });
    }
  }
};

