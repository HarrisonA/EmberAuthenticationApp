// Important NOTE:
// replacing JSONAPIAdapter for this app, but will need to figure out
// how to get authentication to work with JSONAPIAdapter in the future

import DS from 'ember-data';


// export default DS.JSONAPIAdapter.extend({
/*
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
*/

// NOTE: UPDATE!!!   the application adapter code above had the
// authManager injected and sent an Authorization header.
// Again, ESA takes care of this for us:

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:application'
});


// NOTE:  What is an Authorizer?
/*
Authorizers use the session data aqcuired by an authenticator
when authenticating the session to construct authrorization
data that can e.g. be injected into outgoing network requests
etc. Depending on the authorization mechanism the authorizer
implements, that authorization data might be an HTTP header,
query string parameters, a cookie etc.
*/
