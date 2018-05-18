import nav from './nav';
import { top, bottom } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles'; //only pull in what you use
console.log(
  nav(),
  top,
  bottom,
  makeButton('Hi there'),
  makeColorStyle('lightcoral')
);
