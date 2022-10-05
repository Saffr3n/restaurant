import { content } from './load';
import { homeBtn, menuBtn, contactBtn } from './nav';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

const buttons = [homeBtn, menuBtn, contactBtn];

buttons.forEach(btn => btn.addEventListener('click', e => {
  const tag = e.target.id.split('-')[0];
  
  buttons.forEach(btn => {
    if (btn.id.includes(tag))
      btn.classList.add('active');
    else btn.classList.remove('active');
  });

  switch (tag) {
    case 'home':
      changePage(home);
      break;
    case 'menu':
      changePage(menu);
      break;
    case 'contact':
      changePage(contact);
  }
}));

function changePage (page) {
  content.replaceChild(page, content.childNodes[2]);
}
