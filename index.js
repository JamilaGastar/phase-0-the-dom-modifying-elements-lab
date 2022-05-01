// Write your code here!
document.body.removeChild(main);

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.className = "victory";

newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = "Jamila is the champion";