import Ember from 'ember';

export default Ember.Component.extend({

  // a service for authentication located in app/services/auth-manager.js
  authManager: Ember.inject.service(),


  actions:{
    authenticate () {
      const { login, password } = this.getProperties('login', 'password');
      this.get('authManager').authenticate(login, password).then(() => {
        alert('Success! Click the top link!');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    }
  }
});
