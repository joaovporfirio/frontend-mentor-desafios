const form = document.getElementById('form');

const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    nameValidate()
    name2Validate()
    emailValidate()
    passwordValidate()
})

function setError(index){
    campos[index].style.border = '2px solid #f00'
    spans[index].style.display='block'
}

function removeError(index){
    campos[index].style.border=''
    spans[index].style.display='none'
}

function nameValidate() {
    if(campos[0].value.length < 3 ){
        setError(0)
    }
    else {
        removeError(0)
    }
}

function name2Validate() {
    if(campos[1].value.length < 3 ){
        setError(1)
    }
    else {
        removeError(1)
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[2].value) ){
        setError(2)
    }
    else {
        removeError(2)
    }
}

function passwordValidate() {
    if(campos[3].value.length < 5){
        setError(3)
    }
    else {
        removeError(3)
    }
}