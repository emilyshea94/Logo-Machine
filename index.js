const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shape');

const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for text:',
    validate: (input) => {
      return input.length <= 3 ? true : 'Please enter up to three characters.';
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color:'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'please select a shape:',
    choices: ['triangle', 'circle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color:',
  },
];

inquirer.prompt(prompts).then((userInput) => {


  let selectedShape;
  switch (userInput.shape.toLowerCase()) {
    case 'triangle':
      selectedShape = new Triangle(userInput.textColor, userInput.text, userInput.shapeColor);
      break;
    case 'circle':
      selectedShape = new Circle(userInput.textColor, userInput.text, userInput.shapeColor);
      break;
    case 'square':
      selectedShape = new Square(userInput.textColor, userInput.text, userInput.shapeColor);
      break;
    default:
      console.error('Invalid shape selected');
      return;
  }


  const svgContent = selectedShape.render();

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
})