import Ember from 'ember';

export default Ember.Component.extend({

  authManager: Ember.inject.service('session'),


  actions:{
    authenticate () {
      const { login, password } = this.getProperties('login', 'password');

      //NOTE: passing in an Authenticator "authenticator:oauth2"
      this.get('authManager').authenticate('authenticator:oauth2',login, password).then(() => {
        alert('Success! Click the top link!');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    }
  }
});

// An Authenticator is defined by ESA as:
//
// The authenticator authenticates the session. The actual
// mechanism used to do this might e.g. be posting a set of
// credentials to a server and in exchange retrieving an access
// token, initiating authentication against an external provider
// like Facebook etc. and depends on the specific authenticator.
