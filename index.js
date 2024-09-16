// console.log(`Hello World`);
// console.log(`I like Pizza`);

// window.alert(`This is an Alertf`);
// window.alert(`I like pizza`);

// this is a comment .

/* 
This is a multiline 
comment 
*/

document.getElementById("myh1").textContent = `Hello`;
document.getElementById("myp").textContent = `This is a paragraph.`

// let x = 100;
// let age = 22;
// let gpa = 3.9;

// let firstName = "Ernesto Saavedra";

// let online = true;


// console.log(`You are ${age} years old`);
// console.log(`The price is $${x} dollars`);
// console.log(`Your GPA is: ${gpa}`);
// console.log(typeof age)

// console.log(typeof firstName)
// console.log(`Your name is ${firstName}`);

// console.log(typeof online)
// console.log(`Your are online ${online}`);

// let fullName = "Poggers"
// let college = true

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enroll at college: ${college} `;


let students = 30;

// students = students + 2;
// students = students * 2;
// students = students / 2;
// students = students ** 3;

// let extraStudents = students % 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students %= 2;
// students **= 2;

// students++;
// students--;



// console.log(students);


///------------------------------------------------------///

let username;
// username = window.prompt(`Enter your username`);
// console.log(username);

document.getElementById("mysubmit").onclick = function () {

    username = document.getElementById("userName").value;
    document.getElementById("myh1").textContent = `Your name is ${username}`;

}

// ///------------------------------------------------------///
// let age_p = window.prompt(`How old are you?`);
// // age_p = Number(age_p);
// age_p++;
// console.log(age_p, typeof age_p)

///-------CONSTANT-----------------------------------------------///



document.getElementById("submit_radius").onclick = function () {

    let radius = Number(document.getElementById("radius_input").value);
    const pi = 3.14159;
    let Circumference = 2 * pi * radius

    document.getElementById("result_radius").textContent = `${Circumference}`;

}

const decreaseBTN = document.getElementById('decreaseBTN');
const resetBTN = document.getElementById('resetBTN');
const increaseBTN = document.getElementById('increaseBTN');
let label = document.getElementById('countLabel');

let counter = 0;

increaseBTN.onclick = function () {
    counter++;
    label.textContent = counter; 
}

decreaseBTN.onclick = function () {
    counter--;
    label.textContent = counter;
}

resetBTN.onclick = function () {
    counter = 0;
    label.textContent = counter;
}





///-------MATH-----------------------------------------------///


// console.log(Math.PI);
// let x = 3;
// let y = 2;
// let z = Math.sin(90 * Math.PI / 180);
// console.log(z);

// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
// console.log(`This is max: `, max, `This is min: `, min);

///----------------------RANDOM NUMBER GENERATOR--------------------------------///
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

const randBTN = document.getElementById(`randomBTN`);
const randLabel = document.getElementById(`randomLabel`);
const min = 1;
const max = 6;

let randomnum;

randBTN.onclick = function () {
    randomnum = Math.floor(Math.random() * max) + min;
    randLabel.textContent = randomnum;
}

// COnditionals
const input_age = document.getElementById('input_age');
const age_sub = document.getElementById('age_sub');
const p_age = document.getElementById('age_result_p');


let age;

age_sub.onclick = function () {
    age = Number(input_age.value);

    if (age >= 100) {
        p_age.textContent = "You are TOO OLD to enter this site";
    } else if (age == 0) {
        // console.log("You can't enter. You were just born.");
        p_age.textContent = "You can't enter. You were just born.";
    } else if (age >= 18) {
        // console.log("You are old enough to enter this site");
        p_age.textContent = "You are old enough to enter this site";
    } else if (age < 0) {
        // console.log("Your age can't be below 0");
        p_age.textContent = "Your age can't be below 0";
    } else {
        // console.log("You must be 18+ to enter this site");
        p_age.textContent = "You must be 18+ to enter this site";
    }
}