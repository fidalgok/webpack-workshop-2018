import nav from './nav';
import { footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles'; //only pull in what you use
console.log(
  nav(),

  makeColorStyle('lightcoral')
);

const button = makeButton('Click Me!');
button.style.color = makeColorStyle('lightCyan');
document.body.appendChild(button);
document.body.appendChild(footer);
