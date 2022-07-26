# cypress-slow-down ![cypress version](https://img.shields.io/badge/cypress-10.3.1-brightgreen) [![ci](https://github.com/bahmutov/cypress-slow-down/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bahmutov/cypress-slow-down/actions/workflows/ci.yml) [![cypress-slow-down](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/q3727b&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/q3727b/runs)

> Slow down your Cypress tests

Watch this plugin in the video [Slow Down Cypress Tests](https://youtu.be/lxx-_nAkQo8).

## Install

Add this NPM package to your project

```text
# install using NPM
$ npm i -D cypress-slow-down
# or install using Yarn
$ yarn add -D cypress-slow-down
```

Include the plugin and call its function from your spec or support file

```js
// cypress/e2e/spec.cy.js
import { slowCypressDown } from 'cypress-slow-down'
// slow down each command by the default amount
// which is 1 second
slowCypressDown()
```

## Options

You can control the delay before each command (in milliseconds)

```js
// when calling the slowCypressDown function
slowCypressDown(1000)
```

You can also control the delay using the [Cypress environment variable](https://on.cypress.io/environment-variables) `commandDelay`.

```js
// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      commandDelay: 500,
    },
  },
})
// cypress/e2e/spec.cy.js
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown() // slows down each command by 500ms
```

## Disable the slow down

You can disable the default slowdown by using `false`. For example, from the command line you can pass the boolean value:

```
$ npx cypress run --env commandDelay=false
```

Or you can use the [process (OS) environment variable](https://en.wikipedia.org/wiki/Environment_variable)

```
$ CYPRESS_commandDelay=false npx cypress run
```

Or you can use the `cypress.config.js` to disable the slowdown

```js
// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      commandDelay: false,
    },
  },
})
```

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2022

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Tips & Tricks Newsletter](https://cypresstips.substack.com/)
- [my Cypress courses](https://cypress.tips/courses)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cypress-slow-down/issues) on Github

## MIT License

Copyright (c) 2022 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
