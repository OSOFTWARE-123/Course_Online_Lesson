const prompt = require("prompt-sync")({ sigint: "true" });

console.clear();
console.log("Welcome to Guessing Game!");

const guessNumber = Math.floor(Math.random() * 100) + 1;
let isNumber = false;

while (!isNumber) {
    let userNumber = prompt("Please Enter The Belewee 1 and 100 : ");
    userNumber = Number(userNumber);

    if(userNumber === guessNumber) {
        console.log("Congratulations! You did it!");
        isNumber = true;
    } else {
        if(userNumber > guessNumber) console.log("The Number You Guess Is Bigger!");
        else if(userNumber < guessNumber) console.log("The Number You Guess Is Smaller!");
    }
}