Progress Bars
=============

## Stack
* Vue.js
* SASS
* SASS Lint
* ESLint used with Airbnb styleguide

## Development
`yarn dist` - Create a distribution with SASS file compiled to CSS.

`yarn lint` - Run both ESLint and SASS Lint and report errors.

`eslint-fix` - Auto-fix simple ESLint errors.

## Deployment
Code pushed to the `master` branch in Github are automatically deployed to Heroku.

## Pending
* **Unit tests** - 
The code written is testable, but run tests for the Vue app, it needs a webpack setup (ideally generated through vue-cli). Since I used a custom setup which didn't use webpack, it became difficult to manually wire-in the unit test setup, hence this is left undone.
* **Minification & concatenation**