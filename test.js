var myform=document.forms.newform;
var message=document.getElementById("message");

myform.onsubmit=function(){
    if(myform.name.value.trim()===''){
        message.innerHTML="please enter your name";
        return false;
    }
    else{
        message.innerHTML="";
        return true;
    }
};





//blur function
/*myform2.name.onblur=function(){
    myform2.name.style.border="none";
}*/