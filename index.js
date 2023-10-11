import inquirer from "inquirer";
import chalk from "chalk";
//step 1 create a random number
const randomNumber = Math.floor(Math.random() * 100 + 1);
let remainingChances = 6;
//console.log(randomNumber)
//step2
function validateNumber(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        return "Please enter a valid number";
    }
    if (number < 0 || number > 100) {
        return "Please guess a number brtween 1 to 100:";
    }
    return true;
}
async function askForGuess() {
    inquirer.prompt([{
            type: 'input',
            name: 'guess',
            message: 'Please guess a number between 1 and 100:',
            validate: validateNumber,
        }])
        //step 3
        .then((answers) => {
        const guessedNumber = parseInt(answers.guess);
        if (guessedNumber === randomNumber) {
            console.log(chalk.bgBlue.yellow(`Congratulations! you guessed the number ${randomNumber} corectly!`));
            process.exit(0);
        }
        else if (guessedNumber < randomNumber) {
            remainingChances--;
            console.log(chalk.bgRed.white(`To low,kindly guess again your remaining chances are ${remainingChances}:`));
            if (remainingChances = 0) {
                console.log(chalk.bgGray.blue(`we are really sorry you have missed a chances correct num is ${remainingChances}:`));
            }
            else {
                askForGuess();
            }
        }
        else if (guessedNumber < randomNumber) {
            remainingChances--;
            console.log(chalk.bgRed.white(`To high , kindly guess again your remaining chances left ${remainingChances}:`));
            if (remainingChances = 0) {
                console.log(chalk.bgGray.blue(`we are really sorry you have missed a chances correct num is ${remainingChances}:`));
            }
            else {
                askForGuess();
            }
        }
    });
}
askForGuess();
