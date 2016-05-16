# Descriptions for Personality Insights Traits
![last-release](https://img.shields.io/github/tag/personality-insights/trait-descriptions.svg)
[![npm-version](https://img.shields.io/npm/v/personality-trait-descriptions.svg)](https://www.npmjs.com/package/personality-trait-descriptions)
[![npm-license](https://img.shields.io/npm/l/personality-trait-descriptions.svg)](https://www.npmjs.com/package/personality-trait-descriptions)
[![Build Status](https://travis-ci.org/personality-insights/trait-descriptions.svg?branch=master)](https://travis-ci.org/personality-insights/trait-descriptions)
[![codecov.io](https://codecov.io/github/personality-insights/trait-descriptions/coverage.svg?branch=master)](https://codecov.io/github/personality-insights/trait-descriptions?branch=master)
[![npm-downloads](https://img.shields.io/npm/dm/personality-trait-descriptions.svg)](https://www.npmjs.com/package/personality-trait-descriptions)

Obtain descriptions for Personality Insights' traits.

## Getting Started

1. Require and instance `personality-trait-descriptions` component

  ```JavaScript
  const PersonalityTraitDescriptions = require('personality-trait-descriptions');
  const traitDescriptions = new PersonalityTraitDescriptions({ locale: 'es' });
  ```

2. Get your description

  ```JavaScript
  const opennessDescription  = traitDescriptions.description('Openness');
  const structureDescription = traitDescriptions.description('Structure');
  const hedonismDescription  = traitDescriptions.description('Hedonism');
  ```

3. Render descriptions somewhere! Try rendering them as cards!

See the complete [example code][example_code] or [try it live][live_example]

## More Features

There are more features available such as:

- Including the component as a browser script. Component will be exported as the
global variable `PersonalityTraitDescriptions`.

- Formatting descriptions in html or markdown optionally!
```JavaScript
const traitDescriptions   = new PersonalityTraitDescriptions({ format:'html' });
const hedonismDescription = traitDescriptions.description('Hedonism');
```

## API Methods

The available methods are the following ones:
  - `constructor :: (Options) -> PersonalityTraitDescriptions` - Obtain an instance of `PersonalityTraitDescriptions`.
  - `description :: (TraitID) -> String` - Obtain description for the given `TraitID`.

Definitions:
 - `TraitID` is an ID from IBM Watson Personality Insights traits.
 - `Options` are options for the trait descriptions component. Available options are:
   - `locale` - A `String` with the locale used to generate the labels.
   - `format` - A `String` with format. Available formats are `["plain", "html", "markdown"]`.

 [example_code]: https://github.com/personality-insights/trait-descriptions/blob/master/examples/example.html
 [live_example]: https://rawgit.com/personality-insights/trait-descriptions/master/examples/example.html
