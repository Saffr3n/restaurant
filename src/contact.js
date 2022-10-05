export const contact = document.createElement('div');
contact.id = 'contact';

const conHeading = document.createElement('h1');
conHeading.textContent = 'Contact';

const email = document.createElement('li');
email.textContent = 'example@example.com';

const phone = document.createElement('li');
phone.textContent = '000-0000'

const conInfo = document.createElement('ul');
conInfo.appendChild(email);
conInfo.appendChild(phone);

const locHeading = document.createElement('h1');
locHeading.textContent = 'Location';

const location = document.createElement('p');
location.textContent = 'Country, City, Street 0';

contact.appendChild(conHeading);
contact.appendChild(conInfo);
contact.appendChild(locHeading);
contact.appendChild(location);
