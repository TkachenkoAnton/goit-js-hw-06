// Функция getUsersWithGender принимает параметры массив и пол
// на массиве вызываем функцию filter и в полученном объекте сравниваем свойсво gardner 
// с параметром полученным в функции getUsersWithGender 
// после вызываем функцию мар и с помощью ДП получаем именна 

const getUsersWithGender = (array, gender) => array.filter(human => human.gender === gender)
    .map(({name}) => name);

console.log(getUsersWithGender(users, 'male'));