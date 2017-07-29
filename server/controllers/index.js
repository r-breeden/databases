var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      //   console.log('hello!!!');
      // let body = '';
      // req.on('data', (chunk) => {
      //   body += chunk;
      // });
      // req.on('end', ()=> {
      //   var message = JSON.parse(body);
      //   models.messages.post(message, res);
      // });
      models.messages.post(req.body, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //   console.log('**** user: ');
      //   console.log(req.body);
      // let body = '';
      // req.on('data', (chunk) => {
      //   body += chunk;
      // });
      // req.on('end', ()=> {
      //   var user = JSON.parse(body);
      //   models.users.post(user, res);
      // });
      models.users.post(req.body, res);
    }
  }
};

