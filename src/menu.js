export const menu = document.createElement('div');
menu.id = 'menu';

const heading = document.createElement('h1');
heading.textContent = 'Menu';

const grid = document.createElement('div');
grid.id = 'grid';

for (let i = 0; i < 16; i++) {
  const item = document.createElement('div');
  item.classList.add('item');

  const name = document.createElement('h2');
  name.textContent = 'Meal Name';
  const pic = new Image();
  const desc = document.createElement('p');
  desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at aliquam lectus. Suspendisse potenti. Morbi accumsan ac risus ut molestie.';

  item.appendChild(name);
  item.appendChild(pic);
  item.appendChild(desc);

  grid.appendChild(item);
}

menu.appendChild(heading);
menu.appendChild(grid);
