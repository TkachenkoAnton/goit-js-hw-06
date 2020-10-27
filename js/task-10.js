// Функция getSortedUniqueSkills получает массив как параметр
// вызываем метод reduce, его параметры счетчик и свойство skills в теле метода делаем Слияние массивов
// на результате вызываем метод filter где обьявляем параметры текущего елемента, индекса и весь массив
// ищем в массиве елемент по индексу если такой эть он попадает в массив 
// на результате вызываем метод sort

const getSortedUniqueSkills = array =>
    array
        .reduce((accSkills, {skills}) => [...accSkills, ...skills], [])
        .filter((skill, i, skills) => skills.indexOf(skill) === i)
        .sort();

// console.log(getSortedUniqueSkills(users));