/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  * Public routes                                                            *
  ***************************************************************************/
  'POST  /login':                             { action: 'entrance/login' },
  'POST /register':                             { action: 'entrance/register' },
  'GET /profile':                             { action: 'profile' },

};
