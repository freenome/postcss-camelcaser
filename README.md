# PostCSS Camelcaser [![Build Status][ci-img]][ci]

[PostCSS] plugin which camelcases all your selectors.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/GMchris/postcss-camelcaser.svg
[ci]:      https://travis-ci.org/GMchris/postcss-camelcaser

Camelcaser transforms all your selectors to camel case, by default choosing to force the output to `lowerCamelCase`.

```css
.camel-case-me {
    /* Some stuff */
}
```

```css
.camelCaseMe {
  /* Same stuff */
}
```
## options
### `forceCaseStyle`
type: `('lowerCamelCase' | 'UpperCamelCase' | 'off')`

default: `lowerCamelCase`

Will force the camel case transformation to a specific [camel case](https://en.wikipedia.org/wiki/Camel_case) style.

The default style option, `lowerCamelCase`, will ensure that all transformation will have the lower camel case style:
- `Camel-case_me` => `camelCaseMe`

The `UpperCamelCase` style option will ensure that all transformations will have the upper camel case style:
- `camel-case_me` => `CamelCaseMe`

Using the `off` style option will maintain the case of the leading letter:
- `Camel-case_me` => `CamelCaseMe`
- `camel-case_me` => `camelCaseMe`

## Usage

```js
postcss([ require('postcss-camelcaser')(/* options */{}), ])
```

See [PostCSS] docs for examples for your environment.
