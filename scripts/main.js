const listItem = document.querySelector("li:last-child");
const newItem = document.createElement('li');
newItem.innerHTML = '<a href="/products">Products</a>';
listItem.parentNode.replaceChild(newItem, listItem);
