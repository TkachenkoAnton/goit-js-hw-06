// Функция getUsersWithFriend получает массив и имя друга как параметр
// вызывем метод filter в кторой прописываем свойство friends с помощью ДП
// и проверяем на налачие параметра friendName
// на результате вызываем метод мар возвращаем результат

const getUsersWithFriend = (array, friendName) =>
        array
        .filter(({friends}) => friends.includes(friendName))
        .map(({name}) => name);

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]