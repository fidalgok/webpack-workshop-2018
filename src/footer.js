import { red, blue } from './button-styles';

const top = document.createElement('div');
const bottom = document.createElement('div');
const footer = document.createElement('footer');
top.innerText = 'Top of Footer';
top.style.color = red;
bottom.innerText = 'Bottom of Footer';
bottom.style.color = blue;
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
