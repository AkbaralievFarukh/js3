// Задание 1

function checkAdmin(user) {
    if (user.toLowerCase() == 'admin') {
        return `welcome, ${user}`
    } else {
        return 'not correct user'
    }
}

console.log(checkAdmin('Admin'));
console.log(checkAdmin('Farukh'));

// Задание 2

function februaryDay(day) {
    if (day >= 1 && day <=28) {
        return `today is ${day} of february`
    } else {
        return `on february only 28 day, your day is ${day} of another month`
    }
}

console.log(februaryDay(13));
console.log(februaryDay(31));

// Задание 3

function checkEquals (num) {
    if (num === 50) {
        return `${num} is equals of 50`
    } else {
        return `${num} is not correct`
    }
}

console.log(checkEquals(50));
console.log(checkEquals(1));

// Задание 4

function ageCheker (user, age) {
    if (age >= 18 && age <= 50) {
        return `${user} ${age} old, welcome`
    } else {
        return `${user} ${age} old, rejected`
    }
}

console.log(ageCheker('Farukh', 22));
console.log(ageCheker('Shabdan', 17));

// Задание 5

function nameMinChecker(name) {
    if (name.length < 3) {
        return `${name} name is too short (min 3)`
    } else {
        return `${name} name is accepted`
    }
}

console.log(nameMinChecker('Farukh'))
console.log(nameMinChecker('Li'))

// Задание 6

function nameMaxChecker(name) {
    if (name.length > 5) {
        return `${name} name is too long (max 5)`
    } else {
        return `${name} name is accepted`
    }
}

console.log(nameMaxChecker('Farukh'))
console.log(nameMaxChecker('Li'))

// Задание 7

function ageTypeChecker(age) {
    if (typeof age === 'number') {
        return `${age} is number`
    } else {
        return `${age} must be a number`
    }
}

console.log(ageTypeChecker('20'))
console.log(ageTypeChecker(20))

// Задание 8

function  ageStringChecker(age) {
    if (typeof age === 'string' && age > 23) {
        return `${age} string and older 23`
    } else {
        return `${age} must be a string and older 23`
    }
}

console.log(ageStringChecker('23'))
console.log(ageStringChecker(14))

// Задание 9

let daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

function dayChecker(dayNumber) {
    if (dayNumber >= 1 && dayNumber <= 7) {
        day = daysOfWeek[dayNumber - 1]
        return day
    } else {
        return `max days of weeks 7`
    }
}

console.log(dayChecker(3))