'use strict';

/**
 * Информация об аккаунтах
 */

module.exports = {
  // ID бота
  "<1>": {
    // Условие, при котором бот принимает заявки в друзья. 
    // Варианты:
    //   0. false либо отсутствие данного свойства: бот принимает всех;
    //   1. public_followed: бот принимает тех, кто вступил в группу
    "_cond": "<false>", 

    // Данные для авторизации
    "auth":  {
      "login": "<mckv2@yandex.ru>", 
      "pass":  "<adamkotov>", 
      "phone": "<+79603506002> (if exists)"
    }
  }
}
