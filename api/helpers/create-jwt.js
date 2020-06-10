var jwt = require('jsonwebtoken');

module.exports = {


  friendlyName: 'Create jwt',


  description: 'Create token with user inf',


  inputs: {
    user: {
      description: 'User object that with contains all properties.',
      type: 'ref',
      required: true,
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function ({ user }, exits) {
    let token = await jwt.sign({
      id: user.id,
    }, sails.config.custom.jwtKey);
    exits.success(token);
  }


};

