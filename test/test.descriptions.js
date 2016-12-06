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
const PersonalityTraitDescriptions = require('../src/personality-trait-descriptions');

describe('names', () => {

  it('get default (English) trait description: Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions();
    assert.equal(traitDescriptions.description('Agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
  });

  it('get English trait description: Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'en' });
    assert.equal(traitDescriptions.description('Agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
  });

  it('get Spanish trait description: Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'es' });
    assert.equal(traitDescriptions.description('Agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Más alto: Auto-disciplinados, conscientes de sus deberes, o tendientes a querer alcanzar logros por encima de las medidas o expectativas externas. \nMás bajo: Más propensos a preferir lo espontáneo por sobre lo planificado.');
  });

  // Japanese - to be implemented.  This is a placeholder.
  it('get Japanese trait description: Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ja' });
    assert.equal(traitDescriptions.description('Agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
  });

  // V3 tests
  it('get English trait description: Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'en', 'version' : 'v3' });
    assert.equal(traitDescriptions.description('big5_agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
  });

  it('get Spanish trait description: Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'es', 'version' : 'v3' });
    assert.equal(traitDescriptions.description('big5_agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Más alto: Auto-disciplinados, conscientes de sus deberes, o tendientes a querer alcanzar logros por encima de las medidas o expectativas externas. \nMás bajo: Más propensos a preferir lo espontáneo por sobre lo planificado.');
  });

  // Japanese - to be implemented.  This is a placeholder.
  it('get Japanese trait description: Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ja', 'version' : 'v3' });
    assert.equal(traitDescriptions.description('big5_agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
  });
});
