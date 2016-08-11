import Ember from 'ember';
import DS from 'ember-data';

// Important NOTE:
// replacing JSONAPIAdapter for this app, but will need to figure out
// how to get authentication to work with JSONAPIAdapter in the future

// export default DS.JSONAPIAdapter.extend({
export default DS.RESTAdapter.extend({
  // In order to load that data into our app, let’s update our custom adapter.
  // Simply adding the namespace for our API will suffice.
  namespace: 'api',

  // As our data requests go through Ember Data, make sure the access
  // token is included in the XHR request headers
  authManager: Ember.inject.service(),

  headers: Ember.computed('authManager.accessToken', function(){
    return {
      "Authorization": `Access granted to token ${this.get("authManager.accessToken")}`
    };
  })

});
