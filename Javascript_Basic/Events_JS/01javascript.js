let btns = document.querySelectorAll('button')

for(btn of btns){
    // btn.onclick = sayhello;
    // btn.onclick = sayname;

    // btn.addEventListener('click', sayhello)
    // btn.addEventListener('click', sayname)
    btn.addEventListener('dblclick', function(){
        console.log('hello priyanshu');
    });
}

function sayhello(){
    alert('hello!')
}

function sayname(){
    alert('apna college')
}