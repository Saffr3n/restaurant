import Icon from './GitHub.png';

export const footer = document.createElement('div');
footer.id = 'footer';
footer.textContent = 'Copyright © 2022 Saffr3n';

const icon = new Image();
icon.src = Icon;

const link = document.createElement('a');
link.href = 'https://github.com/Saffr3n';

link.appendChild(icon);
footer.appendChild(link);
