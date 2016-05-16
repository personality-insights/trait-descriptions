/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const assert = require('chai').assert;
const log = require('winston');
const flatten = require('./utilities').flatten;
const PersonalityTraitDescriptions = require('../');

describe('descriptions', () => {

  it('correct descriptions for some traits', () => {
    const descriptions = new PersonalityTraitDescriptions();

    const testCases = [
      ['Openness', 'Openness to experience. Higher: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.\nLower: Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.'],
      ['Hedonism', 'Pleasure or sensuous gratification for oneself.'],
      ['Artistic interests', 'Appreciation for art and beauty, both man-made and in nature.'],
      ['Self-efficacy', 'Belief in one\'s own competence.']
    ];

    testCases.forEach(t => assert.equal(descriptions.description(t[0]), t[1], `Get description for '${t[0]}' trait`));
  });

  it('all traits have descriptions', () => {
    const descriptions = new PersonalityTraitDescriptions();
    const traits = flatten(require('./resources/profile'));

    traits.forEach(t => assert.isOk(descriptions.description(t.id), `Got description for trait '${t.id}'.`));
  });

});
