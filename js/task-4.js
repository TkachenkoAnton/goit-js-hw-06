// Функция getInactiveUsers получает массив как параметр
// вызывем функцию filter  которая принмает как параметр свойство isActive
// если false пушит объект в массив

const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);

// console.log(getInactiveUsers(users));