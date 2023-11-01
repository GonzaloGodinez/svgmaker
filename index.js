const inquirer = require("inquirer")
const {
    Circle, Triangle, Square
} = require("./lib/shape")

const fs= require("fs");
const { error, Console } = require("console");
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
    
]);

/*
.then((response) => {
    fs.appendFile('message.txt', `${response}\n`, (err) =>
    {
        console.log(err)
    })
});
*/
// Create a function to write svg file
function writeToFile(data) {
    console.log(data)
    const readTemplate = (Circle,Square,Triangle)(data)
    console.log(data)
    fs.writeFile("./lib/logo.svg",readTemplate,(err)=>{
        if (err) {
            console.log (error)
        }
        console.log ("success")
    })
}
// creating a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        Console.log(answers)
        writeToFile(answers)
    })
    }
