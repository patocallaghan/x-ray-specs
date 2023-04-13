# X-Ray Specs: See Through Your Test Suite!

## Description
Example Ember app to accompany lightning talk at [Ember.js Dublin](https://www.meetup.com/emberjsdublin/events/292260220/), Phorest, 13th April 2023 

[Slides](https://docs.google.com/presentation/d/1wlaY57nhbpEf6o_EsjHIApdEfEaObGyO8ZjUeaeL2M4)

This repo shows how to use Testem to capture data from your test suite and potentially do something with it, i.e. send it to some third party vendor.

## Instructions
* `yarn test:ember` and see `console.log` in the terminal output

## Interesting files
* [/tests/test-helper.js](https://github.com/patocallaghan/x-ray-specs/blob/master/tests/test-helper.js) - Adds Testem Custom Adapter
* [testem.js](https://github.com/patocallaghan/x-ray-specs/blob/master/testem.js) - Configures reporter
* [lib/custom-xunit-reporter.js](https://github.com/patocallaghan/x-ray-specs/blob/master/lib/custom-xunit-reporter.js) - Configures custom and captures test data

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd x-ray-specs`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint`
* `yarn lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
