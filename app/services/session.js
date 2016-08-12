// extend ESA’s Session service and add a (computed) property called currentUser

import Ember from 'ember';

import DS from 'ember-data';
import ESASession from "ember-simple-auth/services/session";

// export default Ember.Service.extend({
// });
export default ESASession.extend({

  store: Ember.inject.service(),

  currentUser: Ember.computed('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      const promise = this.get('store').queryRecord('user', {});
      // Since querying the backend for a user involves a promise, we
      // return a PromiseObject that will update our template when the
      // promise resolves.
      return DS.PromiseObject.create({ promise: promise });
    }
  })

});
