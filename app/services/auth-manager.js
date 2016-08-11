import Ember from 'ember';

export default Ember.Service.extend({

  accessToken: null,

  // The authenticate() method below will call the backend at /token.
  // Upon successful authentication, it will store the token in
  // the accessToken property to use it in every subsequent backend request.
  authenticate(login, password) {
    return Ember.$.ajax({
      method: "POST",
      url: "/token",
      data: { username: login, password: password }
    }).then((result) => {
      this.set('accessToken', result.access_token);
    });
  },

  // invalidate() simply resets the access token. Any further requests to
  // the API will result in a 401 Unauthorized response since null is an
  // invalid token.
  invalidate() {
    this.set('accessToken', null);
  },

  // isAuthenticated computed property that is a boolean-ized
  // version of accessToken. Handy for using in templates.
  isAuthenticated: Ember.computed.bool('accessToken')

});
