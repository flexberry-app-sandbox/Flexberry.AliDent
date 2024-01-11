import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISAliDentДолжностьLForm from './forms/i-i-s-ali-dent-должность-l';
import IISAliDentЗаписьLForm from './forms/i-i-s-ali-dent-запись-l';
import IISAliDentКабинетLForm from './forms/i-i-s-ali-dent-кабинет-l';
import IISAliDentКлиентLForm from './forms/i-i-s-ali-dent-клиент-l';
import IISAliDentМатериалLForm from './forms/i-i-s-ali-dent-материал-l';
import IISAliDentПроизводительLForm from './forms/i-i-s-ali-dent-производитель-l';
import IISAliDentСотрудникLForm from './forms/i-i-s-ali-dent-сотрудник-l';
import IISAliDentУслугаLForm from './forms/i-i-s-ali-dent-услуга-l';
import IISAliDentДолжностьEForm from './forms/i-i-s-ali-dent-должность-e';
import IISAliDentЗаписьEForm from './forms/i-i-s-ali-dent-запись-e';
import IISAliDentКабинетEForm from './forms/i-i-s-ali-dent-кабинет-e';
import IISAliDentКлиентEForm from './forms/i-i-s-ali-dent-клиент-e';
import IISAliDentМатериалEForm from './forms/i-i-s-ali-dent-материал-e';
import IISAliDentПроизводительEForm from './forms/i-i-s-ali-dent-производитель-e';
import IISAliDentСотрудникEForm from './forms/i-i-s-ali-dent-сотрудник-e';
import IISAliDentУслугаEForm from './forms/i-i-s-ali-dent-услуга-e';
import IISAliDentДокументыModel from './models/i-i-s-ali-dent-документы';
import IISAliDentДолжностьModel from './models/i-i-s-ali-dent-должность';
import IISAliDentЗаписьModel from './models/i-i-s-ali-dent-запись';
import IISAliDentКабинетModel from './models/i-i-s-ali-dent-кабинет';
import IISAliDentКлиентModel from './models/i-i-s-ali-dent-клиент';
import IISAliDentМатериалModel from './models/i-i-s-ali-dent-материал';
import IISAliDentОказаниеУслугModel from './models/i-i-s-ali-dent-оказание-услуг';
import IISAliDentПроизводительModel from './models/i-i-s-ali-dent-производитель';
import IISAliDentСоставУслугиModel from './models/i-i-s-ali-dent-состав-услуги';
import IISAliDentСотрудникModel from './models/i-i-s-ali-dent-сотрудник';
import IISAliDentУслугаModel from './models/i-i-s-ali-dent-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-ali-dent-документы': IISAliDentДокументыModel,
    'i-i-s-ali-dent-должность': IISAliDentДолжностьModel,
    'i-i-s-ali-dent-запись': IISAliDentЗаписьModel,
    'i-i-s-ali-dent-кабинет': IISAliDentКабинетModel,
    'i-i-s-ali-dent-клиент': IISAliDentКлиентModel,
    'i-i-s-ali-dent-материал': IISAliDentМатериалModel,
    'i-i-s-ali-dent-оказание-услуг': IISAliDentОказаниеУслугModel,
    'i-i-s-ali-dent-производитель': IISAliDentПроизводительModel,
    'i-i-s-ali-dent-состав-услуги': IISAliDentСоставУслугиModel,
    'i-i-s-ali-dent-сотрудник': IISAliDentСотрудникModel,
    'i-i-s-ali-dent-услуга': IISAliDentУслугаModel
  },

  'application-name': 'Ali dent',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Ali dent',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ali dent',
          title: 'Ali dent'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'ali-dent': {
          caption: 'AliDent',
          title: 'AliDent',
          'i-i-s-ali-dent-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-ali-dent-материал-l': {
            caption: 'Материал',
            title: ''
          },
          'i-i-s-ali-dent-кабинет-l': {
            caption: 'Кабинет',
            title: ''
          },
          'i-i-s-ali-dent-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-ali-dent-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-ali-dent-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-ali-dent-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-ali-dent-должность-l': {
            caption: 'Должность',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-ali-dent-должность-l': IISAliDentДолжностьLForm,
    'i-i-s-ali-dent-запись-l': IISAliDentЗаписьLForm,
    'i-i-s-ali-dent-кабинет-l': IISAliDentКабинетLForm,
    'i-i-s-ali-dent-клиент-l': IISAliDentКлиентLForm,
    'i-i-s-ali-dent-материал-l': IISAliDentМатериалLForm,
    'i-i-s-ali-dent-производитель-l': IISAliDentПроизводительLForm,
    'i-i-s-ali-dent-сотрудник-l': IISAliDentСотрудникLForm,
    'i-i-s-ali-dent-услуга-l': IISAliDentУслугаLForm,
    'i-i-s-ali-dent-должность-e': IISAliDentДолжностьEForm,
    'i-i-s-ali-dent-запись-e': IISAliDentЗаписьEForm,
    'i-i-s-ali-dent-кабинет-e': IISAliDentКабинетEForm,
    'i-i-s-ali-dent-клиент-e': IISAliDentКлиентEForm,
    'i-i-s-ali-dent-материал-e': IISAliDentМатериалEForm,
    'i-i-s-ali-dent-производитель-e': IISAliDentПроизводительEForm,
    'i-i-s-ali-dent-сотрудник-e': IISAliDentСотрудникEForm,
    'i-i-s-ali-dent-услуга-e': IISAliDentУслугаEForm
  },

});

export default translations;
