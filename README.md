# Descriptions for Personality Insights Traits
![last-release](https://img.shields.io/github/tag/personality-insights/trait-descriptions.svg)
[![npm-version](https://img.shields.io/npm/v/personality-trait-descriptions.svg)](https://www.npmjs.com/package/personality-trait-descriptions)
[![npm-license](https://img.shields.io/npm/l/personality-trait-descriptions.svg)](https://www.npmjs.com/package/personality-trait-descriptions)
[![Build Status](https://travis-ci.org/personality-insights/trait-descriptions.svg?branch=master)](https://travis-ci.org/personality-insights/trait-descriptions)
[![codecov.io](https://codecov.io/github/personality-insights/trait-descriptions/coverage.svg?branch=master)](https://codecov.io/github/personality-insights/trait-descriptions?branch=master)
[![npm-downloads](https://img.shields.io/npm/dm/personality-trait-descriptions.svg)](https://www.npmjs.com/package/personality-trait-descriptions)

Obtain descriptions for Personality Insights' traits.

## Installation

```sh
$ npm install personality-trait-descriptions
```

## Usage

```JavaScript
  var PersonalityTraitDescriptions = require('personality-trait-descriptions');

  // version refers to the version of Watson Personality Insights to use, v2 or v3
  var traitDescriptions = new PersonalityTraitDescriptions({ locale: 'es', version: 'v3' });

  // retrieve the trait description for a specified trait id (e.g., 'big5_agreeableness')
  var big5AgreeablenessTraitDescription  = traitDescriptions.description('big5_agreeableness');
  console.log('The trait description for trait id big5_agreeableness is ' + big5AgreeablenessTraitDescription);

  ```

## License

This library is licensed under Apache 2.0. Full license text is
available in [LICENSE](LICENSE).

## Changelog

__12-01-2016__
 * Added v3 descriptions
