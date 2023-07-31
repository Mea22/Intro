let names = document.querySelector(".first-name");
let surename = document.querySelector(".last-name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let lettersRegex = /^[a-zA-Z]+$/

console.log(names.value)


function check(){
    checkMail();
    checkName();
    checkPass();
    checkSurename();
}


function checkMail(){
    let errMail = document.querySelector(".error-mail");
    let errMailTxt = document.querySelector(".error-msg-mail");
    if(emailRegex.test(email.value)){
        errMail.style.display = "none"
        errMailTxt.style.display = "none"
    }else{
        errMail.style.display = "inline"
        errMailTxt.style.display = "flex"
    }
   
}
function checkName(){
    let errName = document.querySelector(".error-name");
    let errNameTxt = document.querySelector(".error-msg-name");

    if(lettersRegex.test(names.value)){
        errName.style.display = "none"
        errNameTxt.style.display = "none"
    }else{
        errName.style.display = "inline"
        errNameTxt.style.display = "flex"
    }
}
function checkSurename(){
    let errSurename = document.querySelector(".error-surename");
    let errSurenameTxt = document.querySelector(".error-msg-surename");
    
    if(lettersRegex.test(surename.value)){
        errSurename.style.display = "none"
        errSurenameTxt.style.display = "none"
    }else{
        errSurename.style.display = "inline"
        errSurenameTxt.style.display = "flex"
    }

}
function checkPass(){
    let errPass = document.querySelector(".error-pass");
    let errPassTxt = document.querySelector(".error-msg-pass");
    
    if(password.value != ""){
        errPass.style.display = "none"
        errPassTxt.style.display = "none"
    }else{
        errPass.style.display = "inline"
        errPassTxt.style.display = "flex"
    }

}