### 0.1.0

Features: Transforming underscored and dashed selectors to camel-case ones.

### 0.2.0

Features: Added `option` to support forcing the transformation to one of two kinds of camelCase styles, including an option to turn this forcing off. This option is:
- forceCamelStyle: (`lowerCamelCase` | `UpperCamelCase` | `off`)
  - NOTE: the default when no option is provide is `lowerCamelCase` to support backwards compatibility with version `0.1.0`
