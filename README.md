# Ember-authentication-app

A basic app that requires authentication to access the main route and show the fake secret codes. Built with Ember 2.3 and uses a simple Node/Express server (endpoints located /server/index.js) for authentication.

The login credentials are passed to the server, which verifies them and then returns a token. This token is required to access the main route.

The app also displays the email address of the authenticated user (currently hardcoded for testing purposes).

### Future plans

Update the app to authenticate using a rails backend.
https://github.com/doorkeeper-gem/doorkeeper
http://www.thegreatcodeadventure.com/jwt-authentication-with-rails-ember-part-i-rails-knock/

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### AWESOME references used in building this app

https://emberigniter.com/implementing-authentication-with-ember-services/
