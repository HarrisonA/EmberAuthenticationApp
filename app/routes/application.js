// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   // As visiting / initially will have us logged out, catch
//   // that 401 Unauthorized and turn it into a redirect to /login.
//
//   actions: {
//     error: function(reason, transition){
//       this.transitionTo('/login');
//       return false;
//     }
//   }
// });

// UPDATE!!
// The application route code (above) was previously used to catch
// those errors and transition to the login route.
// With ESA, we simply mix in ApplicationRouteMixin and
// it will be handled for us.

import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin);
