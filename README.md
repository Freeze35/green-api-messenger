
# Chat project based on GreenApi // Чат-проект на базе GreenApi

The project allows you to create a chat using Whats App and Green Api and interact with users by phone number<br>
//Проект позволяет создать чат используя Whats App и Green Api и взаимодействовать с пользователями по номеру телефона



_The status, group and menu buttons don't work // <br>Кнопки статус,группа и меню не работают_ <br>
_Also at the moment you can select the file file, but sending file is disabled // <br>Также на данный момент можете выбрать файл file, но отправка файла отключена_

## Commands for start // Команды для запуска
```
npm start  "start local server project for DEVELOPMENT // запустить проект локального сервера для РАЗРАБОТКИ"
npm run start-webpack-devServer "start webpack server for test Webpack compiler // запустить сервер webpack для тестового компилятора Webpack"
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

## Screenshots // Скриншоты:

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

[Check if the idInstance is new. Delete data if new //<br> Проверьте, является ли idInstance новым. Удалить данные, если новые](src/App.tsx)

[Start listening every 5 seconds to the server; Saving authorization data
//<br> Запуск прослушивания каждые 5 секунд на сервер; Сохранение данных Авторизации](src/App.tsx)

[Проверка входящих запросов
//<br> Checking incoming requests](src/components/helpers/LogicForProcessingRequests/CheckReceiveNotification.tsx)

[Handling incoming and outgoing requests //<br> Обработка входящих и исходящих запросов](src/components/helpers/LogicForProcessingRequests/ProcessingData.tsx)

[Chat central block using a virtualized list //<br> Центральный блок чата с использованием виртуализированного списка
](src/components/CentralChatBlock/CentralBlock.tsx)

[A simple search string for searching by phone number or message, of course, needs to be improved by searching for string query segmentation 
//<br>Простая поисковая строка для поиска по номеру телефона или сообщению, конечно нуждается в доработке поиска по сигментированию запроса строки](src/components/SearchBar/SearchBar.tsx)

</details>

Processing of incoming and outgoing data
