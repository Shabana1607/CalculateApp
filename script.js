let outputScreen=document.getElementById('inputValues')
function display(num){
    outputScreen.value +=num
}

function clearOnechar(){
    outputScreen.value=outputScreen.value.slice(0,-1)
}

function clearScreen(){
    outputScreen.value=""
}

function calculate(){
    outputScreen.value=eval( outputScreen.value)
}