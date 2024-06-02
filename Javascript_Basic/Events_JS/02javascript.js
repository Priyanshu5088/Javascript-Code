let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let h3 = document.querySelector('h3')
    let randomcolour = getrandomcolour()
    h3.innerText = randomcolour;

    let div = document.querySelector('div')
    div.style.backgroundColor = randomcolour;

    console.log('color updated')
});

function getrandomcolour(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    let colour = `rgb(${red}, ${green}, ${blue})`
    return colour;
}