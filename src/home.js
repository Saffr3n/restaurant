export const home = document.createElement('div');
home.id = 'home';

const heading = document.createElement('h1');
heading.textContent = 'About';

const para = document.createElement('p');
para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at aliquam lectus. Suspendisse potenti. Morbi accumsan ac risus ut molestie. Aliquam feugiat lacus ac faucibus posuere. Duis imperdiet sit amet felis quis facilisis. In gravida dui ante, vitae pharetra metus lobortis et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel lorem vitae ante posuere posuere. Mauris elementum fringilla lorem et vehicula. Praesent eu lobortis odio. Pellentesque vulputate nisl non lobortis facilisis. Nulla suscipit velit ex, a molestie nibh faucibus nec. Ut maximus aliquet tortor et tincidunt. Aenean ac dolor ornare, hendrerit leo a, bibendum neque. Phasellus et imperdiet velit.';

home.appendChild(heading);
home.appendChild(para);
