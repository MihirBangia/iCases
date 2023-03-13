function success(event){
    event.preventDefault();
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var tel=document.getElementById("num").value;
var select=document.getElementById("select").value;
var text=document.getElementById("textarea").value;

if(name==''){
    nameerr.innerHTML="This is a required field";
}
else {
    // var letters = /^[A-Za-z]+$/;
    var numbers = /^[A-Za-z]+$/;
    if(!name.match(numbers))
    {
    nameerr.innerHTML="Name Should contain only letters"
    }
    else{
        nameerr.innerHTML="";
    }
}
if(email==''){
    emailerr.innerHTML="This is a required field";
}
else{
    var mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat))
    {
    emailerr.innerHTML="Email is not proper";
    }
    else{
        emailerr.innerHTML="";
    }
}
if(tel==''){
    phoneerr.innerHTML="This is a required field";
}
else{
    var expr = /^(0|91)?[6-9][0-9]{9}$/;
    if (!expr.test(tel)) {
        phoneerr.innerHTML = "Invalid Mobile Number.";
    }
    else{
        phoneerr.innerHTML="";
    }
}
if(select==''){
    selecterr.innerHTML="This is a required field";
}
else{
    selecterr.innerHTML="";
}
if(text==''){
    messageerr.innerHTML="This is a required field";
}
else{
    messageerr.innerHTML="";
}


}