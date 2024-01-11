import {
  defineNamespace,
  defineProjections,
  Model as ДокументыMixin
} from '../mixins/regenerated/models/i-i-s-ali-dent-документы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокументыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
