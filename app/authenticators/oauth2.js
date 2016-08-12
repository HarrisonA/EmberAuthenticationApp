import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend();

// This strategy effectively replaces our Ember.$.ajax call
// to fetch the token at /token! All the heavy work is now done by
// Ember Simple Auth!


// NOTE: if need to override a token endpoint, here's how:

// export default OAuth2PasswordGrant.extend({
//   serverTokenEndpoint: "/path/to/token"
// });
