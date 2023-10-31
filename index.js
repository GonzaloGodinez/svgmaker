const inquirer = require("inquirer")
const {
    Circle, Triangle, Square
} = require("./lib/shape")

const fs= require("fs")
inquirer.prompt([
    {
        type: "list",
        name: "Shape",
        message: "What shape would you like?",
        choices: ["Circle","Square","Triangle"]
    },
    {
        type: "input",
        name: "color",
        message: "What color do you want your shape to be",
    },
    {
        type: "input",
        name: "Text",
        message: "what text do you want to type",
    },
    {
        type: "input",
        name: "textcolor",
        message: "what textcolor do you want your shape to be",
    }
    
])
.then((response) => {
    fs.appendFile('message.txt', `${response}\n`, (err) =>
    {
        console.log(err)
    })
});

