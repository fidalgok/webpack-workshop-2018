import nav from './nav';
// import * as GSAP from 'gsap';
const getGSAP = () => import('gsap');
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import makeImage from './image';
import imageUrl from './webpack-logo.jpg';
import css from './footer.css';
import buttonStyles from './button.css';
//magic comments
const footer = () => import(/* webpackChunkName: "footer" */ './footer');
const setButtonStyle = color => import(`./button-styles/${color}`);

const image = makeImage(imageUrl);
const button = makeButton('Yay! A Button!');
button.style = makeColorStyle('cyan');

document.body.appendChild(button);
//code split example, we don't need the "footer" code until some thing happens
button.addEventListener('click', e => {
  //code splitting syntax with "dynamic imports"
  //import returns a promise with the module object you want
  // import('./footer').then(module => {
  //   document.body.appendChild(module.footer);
  // });
  /**
   * another way to do above to make it reusable is to declare a function with your other imports
   * that returns the import
   */
  footer().then(footerModule => {
    document.body.appendChild(footerModule.footer);
  });
  getGSAP().then(gsap => {
    console.log(gsap);
  });

  setButtonStyle('red').then(stylestr => {
    button.style = stylestr.default;
  });
});
document.body.appendChild(image);
