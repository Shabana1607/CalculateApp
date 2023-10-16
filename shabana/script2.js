function print(){
    var username=document.getElementById("username").value 
    console.log(username);

    if(username===null|| username===""){
        document.getElementById("errMess").innerText="*enter username"
        document.getElementById("errMess").style.color="red"
        document.getElementById("labelErr").style.color="red"
        document.getElementById("username").style.borderColor="red"
        document.getElementById("username").style.borderRadius="5px"
        document.getElementById("username").style.borderStyle="solid"
        return false


    }
}