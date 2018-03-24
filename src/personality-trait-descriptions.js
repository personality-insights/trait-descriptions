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

const pairs = require('lodash.pairs');
const format = require('./utilities/format-text');

class PersonalityTraitDescriptionsImpl {

  constructor(options, I18nData) {
    this._options = options;
    this.I18nData = I18nData;
    this.setLocale(options.locale);
  }

  setLocale(locale) {
    if (this._locale !== locale) {
      this._locale = locale;
      const i18n = new this.I18nData(locale);
      this._descriptions = i18n.data();
    }
  }

  description(traitId) {
    return format(this._descriptions[traitId], this._options);
  }

  descriptions() {
    return pairs(this._descriptions).map(function(p) { return p[1]; });
  }
}

module.exports = PersonalityTraitDescriptionsImpl;
