'use strict';

/**
 * Файл настроек приложения
 */

module.exports = {
  api: {
    // Сервис для распознавания капчи
    captcha: {
      service: '<service>', // rucaptcha, antigate, etc.
      key:     '<api_key>'
    },

    // Данные аккаунта cleverbot
    cleverbot: {
      login:    'mckv2@yandex.ru',
      password: 'шдшд20197520',
      botapi: 'CCC4eXDWgbCl9Sza6wwvyFd9SIA'
    },

    // Сервис для определения эмоций на лице
    // https://www.microsoft.com/cognitive-services/en-us/subscriptions
    emotions: '<api_key>',

    // ivona.com
    ivona: {
      accessKeyId:     '<access_key>',
      secretAccessKey: '<secret_key>'
    },

    // Yandex services keys
    yandex: {
      // API key from yandex speech.kit: https://tech.yandex.ru/speechkit/cloud/doc/dg/concepts/speechkit-dg-tts-docpage/
      speech_cloud: '51d6892c-fbda-4dbf-8d48-fd809e07ac49',
    },

    // openweathermap.com
    weather: 'c193b46a6dc7ddf3ca03d543d4aa859e',

    // API Key taken from https://console.developers.google.com/apis/credentials?
    google: 'AIzaSyATihZuDxSCrjIO4b9XXMtt-kSmowjmq7o',

    // Custom search id
    google_cse: '',

    // Granted token got using TRUSTED client id
    // Go to this link then grant access:
    // https://oauth.vk.com/authorize?client_id=3697615&scope=audio,video,docs,photos,offline&response_type=token
    // Then copy access_token value from address link and put into token value below
    'vk_search_token': '99040850d24dda7bc41a0b28cf8e092307b73fdff8c5ccb40e0720c289c513a16b3116f84479fef184865'
  },

  // Limits per command
  limits: {
    'ytts': {
      'type': 'daily',
      'timezone': 'Europe/Moscow',
      'value': 1000,
      'name': 'ytts',
      'value_per_role': {
        4: 2000 // Set another limits per different roles
      }
    },
    'yars': {
      'type': 'daily',
      'timezone': 'Europe/Moscow',
      'value': 1000,
      'name': 'yars'
    },
    'tts': {
      'type': 'daily',
      'timezone': 'Europe/Moscow',
      'value': 1500,
      'name': 'tts'
    },
    'vjuh': {
      'type': 'daily',
      'timezone': 'Europe/Moscow',
      'value': 100000,
      'name': 'vjuh'
    },
    'howold': {
      'type': 'daily',
      'timezone': 'Europe/Moscow',
      'value': 800,
      'name': 'microsoft'
    },
    'whatdog': {
      'type': 'daily',
      'timezone': 'Europe/Moscow',
      'value': 800,
      'name': 'microsoft'
    }
  },

  friends:  {
    // Интервал проверки на новые заявки в друзья (в мс)
    'check-interval': 60 * 1000
  },

  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 1
  },

  messages: {
    // Паттерн, по которому определяется обращение к боту в беседе.
    // Формат записи:
    //   <bot_id>: regexp
    //
    // Например:
    //   'bot-patterns': {
    //     412342453: /^бот[\s,]/i
    //   }
    //
    // 'default'-паттерн будет использован в том случае, если паттерна для текущего бота нет
    'bot-patterns': {
      'default': /^[bб][oо][tт][\s,]/i
    },

    // Answers to non friends. If set to false there will be no answer at all.
    // Bot will just ignore messages from them.
    'bot-non-friend-reply': {
      'default': 'Похоже, мы не друзья. Чтобы я выполнял всякие команды, нужно добавить меня в друзья. Я приму заявку автоматически.',
      //'<bot id>': 'Текст ответа конкретного бота, если не в друзьях'
    },

    // Задержка между отправкой сообщений (ms)
    delay: 3333,

    // Spam protection. If set to true or no set at all bot won't answer to message if it equals to previous.
    spam_protection: false
  },

  // Some command specific settings
  commands: {
    cumberbatch: {
      exclusive: true, // If set to true, means that command will be checked according to the "enabled" property
      enabled: {
        '<bot-id>': true // false, if disabled for this bot. If not set or set, command will be enabled for all bots.
      },
      stat_post: null // Post id to gather comments, example: wall-123456_1234567
    },
    spok: {
      // Go to album page and copy-paste the value after slash: like album-123456_1234567
      sourceAlbumId: null
    }
  },

  // Приложение ВКонтакте, через которое идут запросы к API
  'vk-app': {
    id:     '5869138',      // Number
    secret: 'zC4gwdzWan70C3sVPz0s' // String
  },

  // Данные для обработки и отправки сообщений в сообщениях сообщества
  'vk-group': {
    confirm: '<confirm_key>',
    secret:  '<secret_key>',
    token:   '<access_token>'
  },

  // Urls setup
  urls: {
    // Setup shortener for urls
    shortener: {
      type: 'yourls',
      endpoint: 'https://zhmak.nu/yourls-api.php',
      token: 'c705180ae6',
      enabled: true
    }
  }
};
