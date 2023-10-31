class Shape {
    constructor(textcolor,text,color) {
        this.textcolor = textcolor;
        this.text = text;
        this.color = color;
    }

    settextcolor(newColor) {
        this.textcolor = newColor
    }
    settext(newtext) {
        this.text = newtext
    }
    setcolor(newColor) {
        this.color = newColor
    }
}

class Circle extends Shape {
    constructor(textcolor,text,color) {
        super(textcolor,text,color); // call the super class constructor and pass in the name parameter
    }

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <circle cx="150" cy="100" r="80" fill="${this.color}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
   
   </svg>`
    }
}
/* here
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 124 124" fill="none">
<rect width="124" height="124" rx="24" fill="#F97316"/>
<path d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z" fill="white"/>
<circle cx="63.2109" cy="37.5391" r="18.1641" fill="black"/>
<rect opacity="0.4" x="81.1328" y="80.7198" width="17.5687" height="17.3876" rx="4" transform="rotate(-45 81.1328 80.7198)" fill="#FDBA74"/>
</svg>
there
*/ 
class Square extends Shape {
    constructor(textcolor,text,color){
     super(textcolor,text,color);   
    }

    render() {
        return `<svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
   
        <rect width="100%" height="100%" fill="${this.color}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
   
   </svg>`
    }
    
}

class Triangle extends Shape {
    constructor(textcolor,text,color){
     super(textcolor,text,color);   
    }

    render() {
        return `<svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="200,10 280,210 130,210" fill ="${this.color}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
   
   </svg>`
    }
    
}

module.exports = {
    Circle,Square,Triangle
}