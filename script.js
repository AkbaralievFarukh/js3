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