const PatternName = /^[A-Za-z]{1,15}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


let Prenom = window.document.querySelector("#Prenom");
let nom = window.document.querySelector("#nom");
let pass1 = window.document.querySelector("#pass1");
let pass2 = window.document.querySelector("#pass2");
let error = window.document.querySelector("#error");

let Btn = window.document.querySelector("#btn");


// Validation of the fName

Btn.addEventListener("click" , function () {
    let Str = Prenom.value
    if (PatternName.test(Str)) {
        console.log("First name is valid.");
    } else {
        Prenom.value = ""
        Prenom.setAttribute("placeholder" , "Your Name Must Be Less Than 15 characters!")
        Prenom.style.cssText = `
        border: 1px red solid;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        `
        let icon = window.document.querySelector("#icon1");
        icon.style.cssText = `
        display: block; 
        color: rgb(190, 41, 41);
        position:absolute;
        right:20px
        `
        console.log("First name is invalid.");
    }                                        
})



// Validation of the Name

Btn.addEventListener("click" , function () {
    let StrName = nom.value
    if (PatternName.test(StrName)) {
        console.log("First name is valid.");
    } else {
        nom.value = ""
        nom.setAttribute("placeholder" , "Your Name Must Be Less Than 15 characters!")
        nom.style.cssText = `
        border: 1px red solid;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        `
        let icon = window.document.querySelector("#icon2");
        icon.style.cssText = `
        display: block; 
        color: rgb(190, 41, 41);
        position:absolute;
        right:20px
        `
        console.log("First name is invalid.");
    }                                        
})




// Validation of the email

var email_ = window.document.querySelector("#email");

Btn.addEventListener("click" , function () {
    let StrEmail = email_.value
    if (emailPattern.test(StrEmail)) {
        console.log("Email is valid.");
    } else {
       if (email_.value === "") {
        email_.setAttribute("placeholder" , "Cant be empty !!")
        email_.style.cssText = `
        border: 1px red solid;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        `
        let icon = window.document.querySelector("#icon3");
        icon.style.cssText = `
        display: block; 
        color: rgb(190, 41, 41);
        position:absolute;
        right:20px
        `
       } else {
        email_.value = ""
        email_.setAttribute("placeholder" , "The Email You Have Entered Invalid!")
        email_.style.cssText = `
        border: 1px red solid;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        `
        let icon = window.document.querySelector("#icon3");
        icon.style.cssText = `
        display: block; 
        color: rgb(190, 41, 41);
        position:absolute;
        right:20px
        `
       }
    }                                        
})




// Validation of the Password



Btn.addEventListener("click" , function () {
    if (pass1.value === pass2.value) {
        console.log("identical");
    }
    else {
        
    $(document).ready(function () {
    $("#error").slideDown(1000,function () {
        $("#error").val("The Passwords not identical !Try agin.")
        $("#error").css({
            "border": "1px red solid",
            "border-top": "1px  rgb(197, 197, 197) solid"

        })
    })

    })
        pass2.style.cssText = `
        border: 1px red solid;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        `

        let icon = window.document.querySelector("#icon4");
        icon.style.cssText = `
        display: block; 
        color: rgb(190, 41, 41);
        position:absolute;
        right:20px
        `

    }
    }                                        
)



// Handle The Focus Event

nom.onfocus = function (params) {
    nom.style.cssText = `
    border: initial;        
    ` 
    window.document.querySelector("#icon2").style.cssText = `
    display: none; 
    ` 
    nom.setAttribute("placeholder" , "Prenom")          

};

Prenom.onfocus = function (params) {
    Prenom.style.cssText = `
    border: initial;        
    ` 
    window.document.querySelector("#icon1").style.cssText = `
    display: none; 
    ` 
    Prenom.setAttribute("placeholder" , "Prenom")          

};

email_.onfocus = function (params) {
    email_.style.cssText = `
    border: initial;        
    ` 
    window.document.querySelector("#icon3").style.cssText = `
    display: none; 
    ` 
    email_.setAttribute("placeholder" , "Prenom")          

};

pass2.onfocus = function (params) {
    pass2.style.cssText = `
    border: initial;        
    ` 
    window.document.querySelector("#icon4").style.cssText = `
    display: none; 
    ` 
    pass2.setAttribute("placeholder" , "Prenom")  
        
    $(document).ready(function () {
        $("#error").slideUp(1000)
    
        })
    

};