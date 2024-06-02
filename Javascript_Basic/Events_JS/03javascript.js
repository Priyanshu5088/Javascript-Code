let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener('click', changecolor);
h1.addEventListener('click', changecolor);
h3.addEventListener('click', changecolor);
p.addEventListener('click', changecolor);


