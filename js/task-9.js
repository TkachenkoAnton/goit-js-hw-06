// Функция getNamesSortedByFriendsCount получает массив как параметр
// делаем копию массива, так как метод sort мутирует исходный массив
// вызывем метод sort в кторой прописываем параметры для сортировки по возростанию
// и обрщаемся к значению длинны свойства friends, так как метод sort умеет работать только с числами  
// на результате вызываем метод мар возвращаем результат - массив имен

const getNamesSortedByFriendsCount = array =>
    [...array]
        .sort((prev, next) => prev.friends.length - next.friends.length)
        .map(({name}) => name);

// console.log(getNamesSortedByFriendsCount(users));