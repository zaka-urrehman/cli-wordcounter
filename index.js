#!usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    const rainbowtitle = chalkAnimation.rainbow("-----lets start Program-----");
    await sleep();
    rainbowtitle.stop();
}
welcome();
async function askQuestion() {
    let que = await inquirer.prompt([
        {
            name: "str",
            type: "input",
            message: "please enter the text so i can count the words for you "
        }
    ]);
    const word_arr = que.str.split(" ");
    console.log(` total words in paragraph are ${word_arr.length}`);
}
askQuestion();
