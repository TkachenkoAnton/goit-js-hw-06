// Функция getUsersWithEyeColor принимает массив и цвет как паремтры
// на массиве вызывается функция filter, кторая с помощью ДП принимает свойство eyeColor 
// и сравнивает его значение с цветом полученным из параметра функции getUsersWithEyeColor

const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor}) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));