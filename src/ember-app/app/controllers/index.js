import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ali-dent.caption'),
          title: i18n.t('forms.application.sitemap.ali-dent.title'),
          children: [{
            link: 'i-i-s-ali-dent-клиент-l',
            caption: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-клиент-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-ali-dent-материал-l',
            caption: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-материал-l.caption'),
            title: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-материал-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-ali-dent-кабинет-l',
            caption: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-кабинет-l.caption'),
            title: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-кабинет-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-ali-dent-услуга-l',
            caption: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-услуга-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-ali-dent-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-сотрудник-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-ali-dent-производитель-l',
            caption: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-производитель-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-ali-dent-запись-l',
            caption: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-запись-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-ali-dent-должность-l',
            caption: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.ali-dent.i-i-s-ali-dent-должность-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})