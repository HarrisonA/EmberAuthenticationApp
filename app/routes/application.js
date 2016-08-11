import Ember from 'ember';

export default Ember.Route.extend({
  // As visiting / initially will have us logged out, catch
  // that 401 Unauthorized and turn it into a redirect to /login.

  actions: {
    error: function(reason, transition){
      this.transitionTo('/login');
      return false;
    }
  }
});
