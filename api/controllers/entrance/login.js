module.exports = {


  friendlyName: 'Login',


  description: 'Log in using the provided email and password combination.',


  inputs: {
    email: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    },
  },


  exits: {
    success: {
      description: 'The requesting user agent has been successfully logged in.',
    },

    badCombo: {
      description: `The provided email and password combination does not
      match any user in the database.`,
      responseType: 'unauthorized',
    }
  },


  fn: async function ({ email, password }) {

    let user = await User.findOne({
      email: email.toLowerCase()
    });

    if (!user) {
      throw 'badCombo';
    }

    await sails.helpers.passwords.checkPassword(password, user.password)
      .intercept('incorrect', 'badCombo');

    let token = await sails.helpers.createJwt.with({ user });

    return {
      ...user,
      token
    };

  }


};
