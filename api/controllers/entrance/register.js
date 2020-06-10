module.exports = {


  friendlyName: 'Signup',


  description: 'Sign up for a new student account.',


  inputs: {
    password: {
      required: true,
      type: 'string',
      maxLength: 200,
    },
    email: {
      required: true,
      type: 'string',
      isEmail: true
    },
  },


  exits: {
    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },
  },


  fn: async function ({ email, password}) {

    await User.create({
      email,
      password: await sails.helpers.passwords.hashPassword(password)
    })
    .intercept('E_UNIQUE', 'emailAlreadyInUse')
    .intercept({name: 'UsageError'}, 'invalid');

  }


};
