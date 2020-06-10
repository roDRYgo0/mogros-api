/**
 * Pet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },
    number: {
      type: 'number',
      required: true
    },
    color: {
      type: 'string',
      required: true
    },
  },

};

