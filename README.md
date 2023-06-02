
# Chat project based on GreenApi // Чат-проект на базе GreenApi

The project allows you to create a chat using Whats App and Green Api and interact with users by phone number<br>
//Проект позволяет создать чат используя Whats App и Green Api и взаимодействовать с пользователями по номеру телефона

[Ссылка на опубликованный проект проект (green-api-messenger.netlify.app)](https://green-api-messenger.netlify.app/green-api-messenger)

_The status, group and menu buttons don't work // <br>Кнопки статус,группа и меню не работают_ <br>
_Also at the moment you can select the file file, but sending file is disabled // <br>Также на данный момент можете выбрать файл file, но отправка файла отключена_

## Instructions for starting a chat // Интструкция для запуска чата


1) Зарегистрироваться на сайте Green-API https://green-api.com/
2) Зайти на страницу https://console.green-api.com/instanceList/
3) Создать инстанс
4) Зайти в определенный инстанс, Провести авторизацию по QR
5) Также находясь в инстансе выбрать => слева,сверху 'Изменить' 
6) Изменить уведомления:
- Получать уведомления о входящих сообщениях и файлах	Да
- Получать уведомления о статусах отправленных сообщений	Да
- Получать уведомления о сообщениях, отправленных с телефона	Да
- Получать уведомления о сообщениях, отправленных с API	Да
7) Запустить приложение посредством команды консоли npm start // npm run start
   Другой вариант зайти на страницу [green-api-messenger.netlify.app](https://green-api-messenger.netlify.app/)
   Там также развернуто приложение
8) Ввести в авторизации id и token [Screens 6](#screenshotsскриншоты)
9) Слева, сверху иммется кнопка создать чат [Screens 2](#screenshotsскриншоты)
10) Вводим номер телефона в любом цифровом формате. Также поддерживается преобразуются номера начинающиеся с 11,15,55 (начало 8 преоброзовывается в 7) [Screens 2](#screenshotsскриншоты) [file transform nuw number](src/components/CreateChat/CreateChat.tsx).<br>
    В случае некореектности данный номер не будет принят.
11) Откроется новый добавленный чат с этим номером телефона
12) А ткаже возможность создания нового чата коммуникации просто прислав сообщение на данный аккаунт номера телефона.

## Commands for start // Команды для запуска
```
npm start  "start local server project for DEVELOPMENT // запустить проект на локальном сервере"
npm run webpack-devServer "start webpack server for test Webpack compiler // запустить сервер webpack для тестового компилятора Webpack"
npm run build-webpack-prod "build project to product (webpack) folder dist // собрать prod проект используя (webpack) => dist"
```

### Stack of Project // Стек проекта:  
<details> 

<summary>Stack</summary>

- <span style="color:#7ffd83">React</span> (Library for user interface(SPA) development // Библиотека для разработки пользовательского интерфейса (SPA))
- <span style="color:#7ffd83">React Router Dom</span> (Declarative routing for React web applications. // Декларативная маршрутизация для веб-приложений React.
  <br> (Not actively used in the project for forwarding (Left for future updates)) // Активно не используется в проекте для переадресации (Оставлено для будущих обновлений)))  
- <span style="color:#7ffd83">React Dom</span> (React package for working with the DOM Tree // Пакет React для работы с деревом DOM)
- <span style="color:#7ffd83">Mobx</span> (Global state manager || Redux alternative // Глобальный менеджер состояния || Redux альтернатива)
- <span style="color:#7ffd83">Mobx React Lite</span> (Lite version mobx // Облегченная версия мобх)
- <span style="color:#7ffd83">Type Script</span> (Typed programming language // Типизированный язык программирования)
- <span style="color:#7ffd83">@green-api/whatsapp-api-client</span> (Whatsapp Api manager // Апи-менеджер WhatsApp)
- <span style="color:#7ffd83">Web Vitals</span> (Application Performance Test by Google Lighthouse // Тест производительности приложений с помощью Google Lighthouse)
- <span style="color:#7ffd83">React-loader-spinner</span> (Loading spinner // Спинер загрузки)
- <span style="color:#7ffd83">React-virtuoso</span> (Rendering virtualization of large data lists //<br> Рендеринг виртуализации больших списков данных)<br> [react virtuoso better react-window(react-virtualized) ]
- <span style="color:#7ffd83">Webpack</span> (assembler of modules for the next release // сборщик модулей для следующего релиза)<br>

</details> 

## Screenshots//Скриншоты:

<details> 
  <summary>Screen 1</summary>

  ![Screen 1](https://github.com/Freeze35/online-store/assets/72322938/ac5bb97e-164f-4394-8745-d9ff42aed0ee)

</details>

<details> 

<summary>Screen 2 + CreateChat</summary>

![Screen2](https://github.com/Freeze35/online-store/assets/72322938/97a4156d-1f82-4f4a-8efb-5a0cd801bef2)

</details>

<details> 

<summary>Screen 3 + Profile + newChat</summary>

![Screen3](https://github.com/Freeze35/online-store/assets/72322938/708e1468-7a3f-46c2-aac8-c8f26cb3b469)

</details>

<details> 

<summary>Screen 4</summary>

![Screen4](https://github.com/Freeze35/online-store/assets/72322938/cd6877fe-a36a-4fce-94f4-112a4efebead)

</details>

<details> 

<summary>Screen 5</summary>

![Screen5](https://github.com/Freeze35/online-store/assets/72322938/30e6f65f-41a2-44c2-a8cc-e427b279bb20)

</details>

<details> 

<summary>Screen 6 + Auth Modal Window + Error Incorrect Data</summary>

![Screen6](https://github.com/Freeze35/online-store/assets/72322938/236cbad5-22ef-45d2-b761-a00a176fb1a3)

</details>

## More detailed descriptions of working with files // Более подробные описания работы с файлами

<details> 

<summary>Details</summary>

- [Check if the idInstance is new. Delete data if new //<br> Проверьте, является ли idInstance новым. Удалить данные, если новые](src/App.tsx)

- [Start listening every 5 seconds to the server; Saving authorization data
//<br> Запуск прослушивания каждые 5 секунд на сервер; Сохранение данных Авторизации](src/App.tsx)

- [Checking incoming requests
//<br> Проверка входящих запросовChecking incoming requests](src/components/helpers/LogicForProcessingRequests/CheckReceiveNotification.tsx)

- [Handling incoming and outgoing requests //<br> Обработка входящих и исходящих запросов](src/components/helpers/LogicForProcessingRequests/ProcessingData.tsx)

- [Chat central block using a virtualized list //<br> Центральный блок чата с использованием виртуализированного списка
](src/components/CentralChatBlock/CentralBlock.tsx)

- [A simple search string for searching by phone number or message, of course, needs to be improved by searching for string query segmentation 
//<br>Простая поисковая строка для поиска по номеру телефона или сообщению, конечно нуждается в доработке поиска по сигментированию запроса строки](src/components/SearchBar/SearchBar.tsx)

- [Processing of incoming and outgoing data//<br> Обработка входящих и исходящих данных](src/components/helpers/LogicForProcessingRequests/ProcessingData.tsx)

</details>


