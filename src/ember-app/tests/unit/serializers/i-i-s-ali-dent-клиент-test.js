import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ali-dent-клиент', 'Unit | Serializer | i-i-s-ali-dent-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-ali-dent-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-ali-dent-единицы',
    'transform:i-i-s-ali-dent-тип-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
