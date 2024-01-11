import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КабинетMixin
} from '../mixins/regenerated/models/i-i-s-ali-dent-кабинет';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КабинетMixin, Validations, {
});

defineProjections(Model);

export default Model;
