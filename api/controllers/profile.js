module.exports = {


  friendlyName: 'Profile',


  description: 'Profile user.',


  fn: async function () {

    let user = null;

    user = await User.findOne(this.req.me);

    if (user) {
      delete user.password;

      return {
        ...user,
        fullName: 'Pancho via',
      };
    } else {
      return this.res.unauthorized();
    }


  }


};
