import { header } from './header';
import { navbar } from './nav';
import { home } from './home';
import { footer } from './footer';

export const content = document.querySelector('#content');

content.appendChild(header);
content.appendChild(navbar);
content.appendChild(home);
content.appendChild(footer);
