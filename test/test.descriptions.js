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
const PersonalityTraitDescriptions = require('../src/index');
const PersonalityTraitDescriptionsV2 = require('../src/index-v2');
const PersonalityTraitDescriptionsV3 = require('../src/index-v3');

describe('descriptions', () => {

  describe('version 2', () => {
    describe('standalone module', () => {
      it('should work with default options', () => {
        const traitDescriptions = new PersonalityTraitDescriptionsV2();
        assert.equal(traitDescriptions.description('Agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
      });
      it('should work with locale', () => {
        const traitDescriptions = new PersonalityTraitDescriptionsV2({ locale : 'es' });
        assert.equal(traitDescriptions.description('Agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Más alto: Auto-disciplinados, conscientes de sus deberes, o tendientes a querer alcanzar logros por encima de las medidas o expectativas externas. \nMás bajo: Más propensos a preferir lo espontáneo por sobre lo planificado.');
      });
      it('should work when changing locale', () => {
        const traitDescriptions = new PersonalityTraitDescriptionsV2();
        assert.equal(traitDescriptions.description('Agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');

        traitDescriptions.setLocale('es');
        assert.equal(traitDescriptions.description('Agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Más alto: Auto-disciplinados, conscientes de sus deberes, o tendientes a querer alcanzar logros por encima de las medidas o expectativas externas. \nMás bajo: Más propensos a preferir lo espontáneo por sobre lo planificado.');
      });
    });

    describe('default module', () => {
      it('get default (English) trait description: Agreeableness', () => {
        const traitDescriptions = new PersonalityTraitDescriptions();
        assert.equal(traitDescriptions.description('Agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
      });

      it('get default (English) trait description: Gregariousness', () => {
        const traitDescriptions = new PersonalityTraitDescriptions();
        assert.equal(traitDescriptions.description('Gregariousness'), 'Fondness for the company of others; sociability.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[5], 'Eagerness to trying new activities and experiencing new things.');
      });

      it('get English trait description: Agreeableness', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'en', version : 'v2' });
        assert.equal(traitDescriptions.description('Agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
      });

      it('get English trait description: Activity level', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'en', version : 'v2' });
        assert.equal(traitDescriptions.description('Activity level'), 'Pace of living; level of busyness.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[15], 'Will-power; the capacity to begin tasks and follow through to completion in spite of boredom or distractions.');
      });

      it('get Spanish trait description: Agreeableness', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'es', version : 'v2' });
        assert.equal(traitDescriptions.description('Agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Más alto: Auto-disciplinados, conscientes de sus deberes, o tendientes a querer alcanzar logros por encima de las medidas o expectativas externas. \nMás bajo: Más propensos a preferir lo espontáneo por sobre lo planificado.');
      });

      it('get Spanish trait description: Trust', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'es', version : 'v2' });
        assert.equal(traitDescriptions.description('Trust'), 'Nivel de creencia en la sinceridad y buenas intenciones de los demás.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[50], 'Éxito personal a través de la demostración de competencia de acuerdo a estándares sociales.');
      });

      it('get Japanese trait description: Agreeableness', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ja', version : 'v2' });
        assert.equal(traitDescriptions.description('Agreeableness'), '高い人： 他人とうまくやっていくことを重要視するタイプです。人間の本性に関して楽観的な見方をしています。\n低い人： 他人より自分の興味を優先するタイプです。 他人の言葉の裏を考えてしまう傾向があります。');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], '高い人： 自己統制をし、誠実、あるいは外部の期待や評価に応えようとするタイプです。\n低い人： 計画に従うより、自発的に物事を行うことを好むタイプです。');
      });

      it('get Japanese trait description: Trust', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ja', version : 'v2' });
        assert.equal(traitDescriptions.description('Trust'), '他人から誠実さと善意に対して信頼されている度合い。');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[50], '社会的な基準に基づいて能力を実証することによる個人的な成功。');
      });

      it('get Korean trait description: Agreeableness', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ko', version : 'v2' });
        assert.equal(traitDescriptions.description('Agreeableness'), '높은 사람: 다른사람들과 함께하는 가치. 그들은 인간 본성에 대해 보다 낙관적인 견해를 가지고 있습니다. 낮은 사람: 다른 사람들보다 자기 이익을 중시합니다. 그들은 다른 사람들의 동기유발에 회의적입니다.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], '높은 사람: 보다 자기훈련이 되었고 충실함. 혹은 예상 밖이거나 척도에 거스르는 것에 반한 성취를 목표로 합니다. 낮은 사람: 계획적인 것보다 즉흥적으로 선호하는 경향이 있습니다.');
      });

      it('get Korean trait description: Trust', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ko', version : 'v2' });
        assert.equal(traitDescriptions.description('Trust'), '타인의 성의와 선의에 대한 믿음.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[50], '사회적 기준에 따른 능력의 입증을 통한 개인적인 성공.');
      });
      it('should work when changing locale', () => {
        const traitDescriptions = new PersonalityTraitDescriptions();
        assert.equal(traitDescriptions.description('Agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');

        traitDescriptions.setLocale('es');
        assert.equal(traitDescriptions.description('Agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Más alto: Auto-disciplinados, conscientes de sus deberes, o tendientes a querer alcanzar logros por encima de las medidas o expectativas externas. \nMás bajo: Más propensos a preferir lo espontáneo por sobre lo planificado.');
      });
    });
  });

  describe('version 3', () => {
    describe('standalone module', () => {
      it('should work with default options', () => {
        const traitDescriptions = new PersonalityTraitDescriptionsV3();
        assert.equal(traitDescriptions.description('big5_agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
      });
      it('should work with locale', () => {
        const traitDescriptions = new PersonalityTraitDescriptionsV3({ locale : 'es' });
        assert.equal(traitDescriptions.description('big5_agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[48], 'Independencia en las acciones, los pensamientos, sentimientos y disposición a nuevas experiencias.');
      });
      it('should work when changing locale', () => {
        const traitDescriptions = new PersonalityTraitDescriptionsV3();
        assert.equal(traitDescriptions.description('big5_agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');

        traitDescriptions.setLocale('es');
        assert.equal(traitDescriptions.description('big5_agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[48], 'Independencia en las acciones, los pensamientos, sentimientos y disposición a nuevas experiencias.');
      });
    });

    describe('default module', () => {
      it('get English trait description: big5_agreeableness', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'en', version : 'v3' });
        assert.equal(traitDescriptions.description('big5_agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
      });

      it('get English trait description: need_harmony', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'en', version : 'v3' });
        assert.equal(traitDescriptions.description('need_harmony'), 'A need to appreciate or please other people, their viewpoints, and feelings.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[47], 'Respect, commitment, and acceptance of the customs and ideas that one\'s culture and/or religion provides.');
      });

      it('get Spanish trait description: big5_agreeableness', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'es', version : 'v3' });
        assert.equal(traitDescriptions.description('big5_agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[48], 'Independencia en las acciones, los pensamientos, sentimientos y disposición a nuevas experiencias.');
      });

      it('get Spanish trait description: facet_morality', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'es', version : 'v3' });
        assert.equal(traitDescriptions.description('facet_morality'), 'Franqueza y expresión genuina; cándido, franco.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[29], 'Tendencia a experimentar –pero no necesariamente expresar– ira o frustración.');
      });

      it('get Japanese trait description: big5_agreeableness', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ja', version : 'v3' });
        assert.equal(traitDescriptions.description('big5_agreeableness'), '高い人： 他人とうまくやっていくことを重要視するタイプです。人間の本性に関して楽観的な見方をしています。\n低い人： 他人より自分の興味を優先するタイプです。 他人の言葉の裏を考えてしまう傾向があります。');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], '高い人： 自己統制をし、誠実、あるいは外部の期待や評価に応えようとするタイプです。\n低い人： 計画に従うより、自発的に物事を行うことを好むタイプです。');
      });

      it('get Japanese trait description: need_harmony', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ja', version : 'v3' });
        assert.equal(traitDescriptions.description('need_harmony'), '他人、彼らの見解、及びおよび感覚を高く評価したり喜ばせる必要性。');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[47], '文化や宗教の違いによる習慣やアイディアに対する尊敬、約束、および受け入れ。');
      });

      it('get Korean trait description: big5_agreeableness', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ko', version : 'v3' });
        assert.equal(traitDescriptions.description('big5_agreeableness'), '높은 사람: 다른사람들과 함께하는 가치. 그들은 인간 본성에 대해 보다 낙관적인 견해를 가지고 있습니다. \n낮은 사람: 다른 사람들보다 자기 이익을 중시합니다. 그들은 다른 사람들의 동기유발에 회의적입니다.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], '높은 사람: 보다 자기훈련이 되었고 충실함. 혹은 예상 밖이거나 척도에 거스르는 것에 반한 성취를 목표로 합니다. \n낮은 사람: 계획적인 것보다 즉흥적으로 선호하는 경향이 있습니다.');
      });

      it('get Korean trait description: need_harmony', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ko', version : 'v3' });
        assert.equal(traitDescriptions.description('need_harmony'), '다른 사람들, 그들의 견해 그리고 감정에 감사하거나 기뻐 할 필요성.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[47], '문화 그리고/또는 종교가 제공하는 관습 및 아이디어에 대한 존중, 헌신 및 수용');
      });

      it('should work when changing locale', () => {
        const traitDescriptions = new PersonalityTraitDescriptions({ version : 'v3' });
        assert.equal(traitDescriptions.description('big5_agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');

        traitDescriptions.setLocale('es');
        assert.equal(traitDescriptions.description('big5_agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
        assert.equal(traitDescriptions.descriptions().length, 52);
        assert.equal(traitDescriptions.descriptions()[48], 'Independencia en las acciones, los pensamientos, sentimientos y disposición a nuevas experiencias.');
      });
    });
  });
});
