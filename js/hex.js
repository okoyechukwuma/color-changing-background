const hex = [0, 1, 2, 3, 4, 5, 6 , 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// console.log(colors.length);

const color = document.querySelector('.color');
const body = document.body;

setInterval(function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getColor()];
    }
    body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
}, 1000);


function getColor(){
    return Math.floor(Math.random() * hex.length);
}