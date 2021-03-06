// Деструктурирующее присваивание (ДП) в перебирающем методе мар.
// метод getUserNames принимает массив как параметр, после чего вызывает 
// на массиве метод мар которая получает пармаетр свойство с ключем name 
// c помощью ДП и возвращает значения свойства

const getUserNames = array => array.map(({ name }) => name);

// console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
