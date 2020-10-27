// Функция getUsersWithAge получает массив, минимальны и максимальный возраст как параметр
// вызывем метод filter который принмает как параметр свойство age с помощью ДП
// и сравнивает значение из свойства с параметрами минимального и максимального возраста
// на результат метода filter визываем метод мар который примает свойства {name, email} и возвращает в массив их значения 

const getUsersWithAge = (array, min, max) => array
 .filter(({age}) => age > min && age < max)   
 .map(({name, email}) => ({name, email}));  

// console.log(getUsersWithAge(users, 20, 30));