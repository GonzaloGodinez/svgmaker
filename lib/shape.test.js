const { Square, Triangle, Circle } = require("./shape");

describe("Square", () => {
    test("put test description here", () => {
        const square = new Square(
            "blue", "GGL", "red"
        )
        const rendered = square.render()
        /* console.log(rendered) */
        const replaced = rendered.replace(/[\r\n]+\s+/gm, "")
        expect(replaced).toEqual('<svg version="1.1"width="300" height="300"xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">GGL</text></svg>');
    })
})
/* testing Triangle */
describe("Triangle", () => {
    test("put test description here", () => {
        const square = new Triangle(
            "blue", "GGL", "red"
        )
        const rendered = square.render()
        /* console.log(rendered) */
        const replaced = rendered.replace(/[\r\n]+\s+/gm, "")
        expect(replaced).toEqual('<svg version="1.1"width="300" height="300"xmlns="http://www.w3.org/2000/svg"><polygon points="200,10 280,210 130,210" fill ="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">GGL</text></svg>');
    })
})
/* Testing Circle */
describe("Circle", () => {
    test("put test description here", () => {
        const square = new Circle(
            "blue", "GGL", "red"
        )
        const rendered = square.render()
        /* console.log(rendered) */
        const replaced = rendered.replace(/[\r\n]+\s+/gm, "")
        expect(replaced).toEqual('<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">GGL</text></svg>');
    })
})
