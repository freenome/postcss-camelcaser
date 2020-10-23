### 0.1.0

Features: Transforming underscored and dashed selectors to camel-case ones.

### 0.2.0

Features: Added `option` to support forcing the transformation to one of two kinds of camelCase styles, including an option to turn this forcing off. This option is:
- forceCamelStyle: (`lowerCamelCase` | `UpperCamelCase` | `off`)
  - NOTE: the default when no option is provide is `lowerCamelCase` to support backwards compatibility with version `0.1.0`

### 0.3.0
Upgraded to work with Postcss 8.0 APIs by implementing the `Root()` implementation based on the [migration guide](https://evilmartians.com/chronicles/postcss-8-plugin-migration).

### 0.3.1
Improved the performance of the plugin by switching from the `Root()` to the `Rule()` Postcss API.

### 0.3.2
Upgraded `ava`, `eslint` and `eslint-config-postcss` to the latest versions to eliminate a security violation.
