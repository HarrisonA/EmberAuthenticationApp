// In order to replace our Authorization: Access token is "some token" header, 
// we will leverage ESA’s OAuth2Bearer authorizer

import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

export default OAuth2Bearer.extend();
