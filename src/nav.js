export const navbar = document.createElement('div');
navbar.id = 'nav';

export const homeBtn = document.createElement('button');
homeBtn.id = 'home-btn';
homeBtn.classList.add('active');
homeBtn.textContent = 'Home';

export const menuBtn = document.createElement('button');
menuBtn.id = 'menu-btn';
menuBtn.textContent = 'Menu';

export const contactBtn = document.createElement('button');
contactBtn.id = 'contact-btn';
contactBtn.textContent = 'Contact';

navbar.appendChild(homeBtn);
navbar.appendChild(menuBtn);
navbar.appendChild(contactBtn);
