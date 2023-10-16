function FunctionVla(){
    var username =document.getElementById('username').value 
    var password=document.getElementById('password').value 
    console.log(username);
    console.log(password);

    if(username === null || username === ""){
        document.getElementById('errMess').innerText="*enetr your username"
        document.getElementById('errMess').style.color="red"
        document.getElementById('errlabel').style.color="red"
        document.getElementById('username').style.borderRadius="5px"
        document.getElementById('username').style.borderStyle="solid"
        document.getElementById('username').style.borderColor="red"
        return false
    }

    else if(password === null || password=== ""){
        document.getElementById('errMess1').innerText="*enetr your username"
        document.getElementById('errMess1').style.color="red"
        document.getElementById('errlabel1').style.color="red"
        document.getElementById('password').style.borderRadius="5px"
        document.getElementById('password').style.borderStyle="solid"
        document.getElementById('password').style.borderColor="red"
        return 

    }
}