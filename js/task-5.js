// Функция getUserWithEmail получает массив как параметр
// вызывем функцию find которая принмает как параметр свойство email с помощью ДП
// и сравнивает значение из свойства с параметром функции getUserWithEmail

const getUserWithEmail = (array, mail) => array.find(({ email }) => email === mail);

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));