import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

// export default Ember.Route.extend({
export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('code');
  }
});


// Before adding the mixin code above, if no token is available when the
// secret route is accessed, a 401 Unauthorized error will be thrown (in the
// console). This will happen during the findAll call to the backend.

//By mixing in AuthenticatedRouteMixin we get that check for free
