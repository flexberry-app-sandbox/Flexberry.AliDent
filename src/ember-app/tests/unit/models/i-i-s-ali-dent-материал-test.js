import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ali-dent-материал', 'Unit | Model | i-i-s-ali-dent-материал', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-ali-dent-документы',
    'model:i-i-s-ali-dent-должность',
    'model:i-i-s-ali-dent-запись',
    'model:i-i-s-ali-dent-кабинет',
    'model:i-i-s-ali-dent-клиент',
    'model:i-i-s-ali-dent-материал',
    'model:i-i-s-ali-dent-оказание-услуг',
    'model:i-i-s-ali-dent-производитель',
    'model:i-i-s-ali-dent-состав-услуги',
    'model:i-i-s-ali-dent-сотрудник',
    'model:i-i-s-ali-dent-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
