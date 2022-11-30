# Frontend - REACT - TOXIN - Бронирование отелей
# Backend - express server & mongodb

## [Просмотр работы](https://annapichnenko.github.io/toxin/)

#### Выполненые работы, 1) Верстка сайта по макету фигма https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/MetaLamp-(former-FSD)-frontend-education-program.-The-2nd-task?node-id=18402%3A1 2) Регистрация и авторизация по email 3) Perfect pixel 4) Адаптив сайта под мобильное устройство - responsive 5) Оптимизация с помощью React.lazy 6) Получение комнат с базы данных mongodb 7) Навигация по сайту - "Главная страница" => "Страница подобрать номер" => "Страница подробности о номере" а так же "Страница регистрации" и "Страница авторизации" - всего 5 страниц

## [Сервер](https://toxin-server.onrender.com/api/rooms)

#### Серверное приложение 1) Роут для регистрации пользователя "post запрос" api/registration 2) Роут для получения зарегистрированных пользователей "get запрос" [api/users](https://toxin-server.onrender.com/api/users) 3) Роут для авторизации пользователя "post запрос" api/login 4) Роут для создания номеров отеля "post запрос" api/rooms 5) Роут для получения всех комнат "get запрос" [api/rooms](https://toxin-server.onrender.com/api/rooms)


<h2>Установка web приложения</h2>
<span>1. Перейти в папку frontend</span><br/><br/>
<code>cd frontend</code><br/><br/>
<code>yarn install</code>
<h2>Запуск разработки</h2>
<code>yarn start</code>
<h2>Билд</h2>
<code>yarn build</code>
<h2>Используемые библиотеки:</h2>
<ul>
<li><a href="https://www.npmjs.com/package/react-slider">react-slider</a></li>
<li><a href="https://recharts.org/en-US/">recharts</a></li>
<li><a href="https://reactdatepicker.com/">react-datepicker</a></li>
<li><a href="https://www.npmjs.com/package/sass">sass</a></li>
</ul>
<br/> <br/>
<h1>Установка server приложения</h1>
<span>1. Перейти в папку server</span><br/><br/>
<code>cd server</code><br/><br/>
<code>yarn install</code>
<h2>Запуск разработки</h2>
<code>yarn dev</code>

<h2>Используемые библиотеки:</h2>
<ul>
<li><a href="https://mongoosejs.com/">mongoose</a></li>
<li><a href="https://www.npmjs.com/package/express">express</a></li>
</ul>
