const card = document.createElement('div');
const heading = document.createElement('h2');
heading.textContent = 'Identity Card';
card.style.border = "2px solid black";
card.style.textAlign = "center";
card.appendChild(heading);

 // Image section
const img = document.createElement('img');
img.src = 'ishan.jpg'; 
img.style.height = "150px";

card.appendChild(img);


// Name section
const Name = document.createElement('p');
Name.innerHTML = '<strong>Name:</strong> Ishan Pawar';
Name.style=
card.appendChild(Name);

// ID section
const id = document.createElement('p');
id.innerHTML = '<strong>ID:</strong> 180707';
card.appendChild(id);

// Final step: Add card to body
document.body.appendChild(card);

