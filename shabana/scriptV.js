function PrintVal(event){
    var user=document.getElementById('UserName').value 
    var pss=document.getElementById('PassWord').value 
    var email=document.getElementById('Email').value 
    console.log(user);
    console.log(pss);
    console.log(email);
    event.preventDefault()
}
