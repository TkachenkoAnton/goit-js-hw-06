// Функция alculateTotalBalance получает массив как параметр
// вызывем метод reduce  в кторой прописываем параметр счетчика и параметр свойство balance с помощью ДП
// плюсуем все значения свойства balance со счетчиком который начинается с 0
// возвращаем результат

const calculateTotalBalance = array => array.reduce((acc, { balance }) => acc + balance, 0);

// console.log(calculateTotalBalance(users)); 