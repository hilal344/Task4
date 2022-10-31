let items = document.getElementsByClassName('list-group-item');
// console.log(element);
// console.log(element[1]);

items[2].style.backgroundColor = 'green';

for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}