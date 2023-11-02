const inquirer = require("inquirer")
const {
    Circle, Triangle, Square
} = require("./lib/shape")

const fs = require("fs");
const { error, Console } = require("console");
inquirer.prompt([
    {
        type: "list",
        name: "shape",
        message: "What shape would you like?",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "color",
        message: "What color do you want your shape to be",
    },
    {
        type: "input",
        name: "text",
        message: "what text do you want to type",
    },
    {
        type: "input",
        name: "textcolor",
        message: "what textcolor do you want your shape to be",
    }

])

    .then((response) => {
        console.log(response)
         writeToFile(response) 
    });
// Create a function to write svg file

function writeToFile(data) {
    console.log(data)
    let svg = "";
    switch (data.shape) {
        case "Circle":
            svg = new Circle(data.textcolor, data.text, data.color).render();
            console.log("Circle is Choosen");
            break;
        case "Triangle":
            svg = new Triangle(data.textcolor, data.text, data.color).render();
            console.log("Triangle is Choosen");
            break;
        case "Square":
            svg = new Square(data.textcolor, data.text, data.color).render();
            console.log("Square is Choosen");
            break;
    }

    console.log(data)
    fs.writeFile("./lib/logo.svg", svg, (err) => {
        if (err) {
            console.log(error)
        }
        console.log("success Generated logo.svg")
    })
}
// creating a function to initialize app

