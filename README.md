# Ember-authentication-app

A basic app that requires authentication to access the main route. Built with Ember 2.3 and uses a simple Node/Express server (endpoints located /server/index.js) for authentication.

The login credentials are passed to the server, which verifies them and then returns a token. This token is required to access the main route.

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

### Important Notes

This app is very basic and is lacking:

* pluggable authenticators/authorizers
* error handling
* events, interception and redirection
* cross-tab communication
* session persistence across reloads
* authorization
* etc...

### References used to build this app

https://emberigniter.com/implementing-authentication-with-ember-services/
