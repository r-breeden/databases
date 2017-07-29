//RAB// this will load files in this folder (no need to reference the file in the folder directly)
var db = require('../db');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  //RAB// explain why application/json is required
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (res) {
      db.connection.query('SELECT * FROM Messages INNER JOIN Users ON messages.user_id = users.id', function(err, results, fields) {
        if (err) { throw err; }
        var data = {results: results};
        res.writeHead(200, headers);
        res.write(JSON.stringify(data));
        res.end();        
      });
    }, 
    post: function (message, res) {
      //RAB// this needed to be stringified. Explain why.
      var username = JSON.stringify(message.username);
      var text = JSON.stringify(message.text);
      var roomname = JSON.stringify(message.roomname);
      var subSQL = `SELECT id FROM Users WHERE username = ${username}`;
      var sql = `INSERT INTO Messages (user_id, text, roomname) VALUES ((${subSQL}), ${text}, ${roomname})`;
      db.connection.query(sql, function(error, results, fields) {
        if (error) { throw error; }
        res.writeHead(200, headers);
        res.write(JSON.stringify(results));
        res.end();        
      });
    }    
  },

  users: {
    get: function (res) {
      db.connection.query('SELECT * FROM Users', function(err, results, fields) {
        if (err) { throw err; }
        res.writeHead(200, headers);
        res.write(JSON.stringify(results));
        res.end(); 
      });
    },
    post: function (user, res) {
      //RAB// this needed to be stringified. Explain why.
      var username = JSON.stringify(user.username);
      var sql = `INSERT INTO Users (username) VALUES (${username})`;
      db.connection.query(sql, function(error, results, fields) {
        if (error) {
          res.writeHead(304, headers);
          res.end();
        } else {
          res.writeHead(200, headers);
          res.write(JSON.stringify(results));
          res.end();
        } 
      });
    }
  }
};
