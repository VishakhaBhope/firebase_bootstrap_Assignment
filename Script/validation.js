function validateform(){  
var name=document.myform.name.value;  
var email=document.myform.email.value;  
var message=document.myform.message.value;  
  
if (name==null || name=="" || email==null || email=="" || message==null || message==""){  
  alert("Field can't be blank");  
  return false;  
}  
}  
