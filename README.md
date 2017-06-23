# cra-basis-setup
Create-React-App Basis Setup with styled-components, styleguidist, lint-staged

[![Build Status](https://travis-ci.org/michaseel/cra-basis-setup.svg?branch=master)](https://travis-ci.org/michaseel/cra-basis-setup)



HowTo install this:
 - clone repo
 - `yarn install` (or `npm install`)
 - `yarn styleguide`  // to start styleguide server
 
Other tasks: 
- `yarn start` // to start dev server
- `yarn test`  // to run javascript tests
- `yarn coverage`  // run javascript tests & print coverage
- `yarn build` // to produce minified production build 
- `yarn styleguide:build` // to produce standalone styleguide build


Steps i made
* `create-react-app cra-basis-setup`
* `yarn add styled-components jest-styled-components` 
* `yarn add --dev react-styleguidist react-test-renderer webpack flow-bin`
* `yarn flow -- init`
