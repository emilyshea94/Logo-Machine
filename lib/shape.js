class Shape {
  constructor(color, text, textColor) { 
    this.color =color;
    this.text = text; 
    this.textColor = textColor; 
  } 
}

class Triangle extends Shape {
  render() {
    
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
    <text x="150" y="100" text-anchor="middle" fill="${this.textColor}" font-family="Arial" font-size="20">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shape {
  render() {
    
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.color}" />
    <text x="150" y="100" text-anchor="middle" fill="${this.textColor}" font-family="Arial" font-size="20">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
    <text x="150" y="100" text-anchor="middle" fill="${this.textColor}" font-family="Arial" font-size="20">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };