let input = document.querySelector('input');

input.addEventListener('keydown', function(e){
    console.log("Key = ", e.code)
    if(e.code == "KeyU"){
        console.log("move character upwards")
    }else if(e.code == "KeyD"){
        console.log("move character downwards")
    }else if(e.code == "KeyL"){
        console.log("move character in left direction")
    }else if(e.code == "KeyR"){
        console.log("move character in right direction")
    }
})