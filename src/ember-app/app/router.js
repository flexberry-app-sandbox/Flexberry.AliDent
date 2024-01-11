import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-ali-dent-должность-l');
  this.route('i-i-s-ali-dent-должность-e',
  { path: 'i-i-s-ali-dent-должность-e/:id' });
  this.route('i-i-s-ali-dent-должность-e.new',
  { path: 'i-i-s-ali-dent-должность-e/new' });
  this.route('i-i-s-ali-dent-запись-l');
  this.route('i-i-s-ali-dent-запись-e',
  { path: 'i-i-s-ali-dent-запись-e/:id' });
  this.route('i-i-s-ali-dent-запись-e.new',
  { path: 'i-i-s-ali-dent-запись-e/new' });
  this.route('i-i-s-ali-dent-кабинет-l');
  this.route('i-i-s-ali-dent-кабинет-e',
  { path: 'i-i-s-ali-dent-кабинет-e/:id' });
  this.route('i-i-s-ali-dent-кабинет-e.new',
  { path: 'i-i-s-ali-dent-кабинет-e/new' });
  this.route('i-i-s-ali-dent-клиент-l');
  this.route('i-i-s-ali-dent-клиент-e',
  { path: 'i-i-s-ali-dent-клиент-e/:id' });
  this.route('i-i-s-ali-dent-клиент-e.new',
  { path: 'i-i-s-ali-dent-клиент-e/new' });
  this.route('i-i-s-ali-dent-материал-l');
  this.route('i-i-s-ali-dent-материал-e',
  { path: 'i-i-s-ali-dent-материал-e/:id' });
  this.route('i-i-s-ali-dent-материал-e.new',
  { path: 'i-i-s-ali-dent-материал-e/new' });
  this.route('i-i-s-ali-dent-производитель-l');
  this.route('i-i-s-ali-dent-производитель-e',
  { path: 'i-i-s-ali-dent-производитель-e/:id' });
  this.route('i-i-s-ali-dent-производитель-e.new',
  { path: 'i-i-s-ali-dent-производитель-e/new' });
  this.route('i-i-s-ali-dent-сотрудник-l');
  this.route('i-i-s-ali-dent-сотрудник-e',
  { path: 'i-i-s-ali-dent-сотрудник-e/:id' });
  this.route('i-i-s-ali-dent-сотрудник-e.new',
  { path: 'i-i-s-ali-dent-сотрудник-e/new' });
  this.route('i-i-s-ali-dent-услуга-l');
  this.route('i-i-s-ali-dent-услуга-e',
  { path: 'i-i-s-ali-dent-услуга-e/:id' });
  this.route('i-i-s-ali-dent-услуга-e.new',
  { path: 'i-i-s-ali-dent-услуга-e/new' });
});

export default Router;
