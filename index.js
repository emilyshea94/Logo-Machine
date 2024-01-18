const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function getUserInput() {
  const prompts = [
    {
      type: 'input',
      name: 'shape',
      message: 'Enter shape (circle, triangle, square):',
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color:',
    },
  ];

  return inquirer.prompt(prompts);
}

async function generateSVGFile() {
  const userInput = await getUserInput();

  let selectedShape;
  switch (userInput.shape.toLowerCase()) {
    case 'triangle':
      selectedShape = new Triangle();
      break;
    case 'circle':
      selectedShape = new Circle();
      break;
    case 'square':
      selectedShape = new Square();
      break;
    default:
      console.error('Invalid shape selected');
      return;
  }

  selectedShape.setColor(userInput.shapeColor);

  const svgContent = selectedShape.render();

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

generateSVGFile();