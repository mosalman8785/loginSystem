var nameInputReg = document.getElementById("NameReg");
var emailInputReg = document.getElementById("EmailReg");
var paswordInputrReg = document.getElementById("PasswordReg");
var validateAllInputs = document.querySelector(".allInputALert");
var SuccsessAlert = document.querySelector(".SuccessAlert");
var Alerts = document.querySelector(".alert");
var SignUp = document.querySelector(".reg-Btn");
var EmailExist = document.querySelector(".email-exist");

var registerInputs = [];

if (localStorage.getItem("all-Accounts") != null) {

    registerInputs = JSON.parse(localStorage.getItem("all-Accounts"));

}

function addAccount() {
    var Account =
    {
        nameRg: nameInputReg.value,
        emailRg: emailInputReg.value,
        passwordRg: paswordInputrReg.value
    }


    if (nameInputReg.value == "" || emailInputReg.value == "" || paswordInputrReg.value == "") {

        validateAllInputs.classList.replace("d-none", "d-block");
        SuccsessAlert.classList.replace("d-block", "d-none");
        EmailExist.classList.replace("d-block", "d-none");
        emailInputReg.classList.add("is-invalid");
        paswordInputrReg.classList.add("is-invalid");
        nameInputReg.classList.add("is-invalid");
        paswordInputrReg.classList.replace("d-block","d-none");
        nameInputReg.classList.replace("d-block","d-none");
        emailInputReg.classList.replace("d-block","d-none");


    }
    else {
        // validateEmail();
        // validateName();
        // validatePassword();
        if (validateName() == false || validateEmail() == false || validatePassword() == false) {

            validateAllInputs.classList.replace("d-block", "d-none");
            SuccsessAlert.classList.replace("d-block", "d-none");


        }
        else {
            if (EmailInArray() == true) {
                validateAllInputs.classList.replace("d-block", "d-none");
                SuccsessAlert.classList.replace("d-block", "d-none");
            }
            else {
                registerInputs.push(Account);
                localStorage.setItem("all-Accounts", JSON.stringify(registerInputs));


                // clearData();
                EmailExist.classList.replace("d-block", "d-none");
                emailInputReg.classList.replace("is-invalid", "is-valid")
                SuccsessAlert.classList.replace("d-none", "d-block");
                validateAllInputs.classList.replace("d-block", "d-none");
            }

        }
    }
}


function clearData() {
    nameInputReg.value = "";
    emailInputReg.value = "";
    paswordInputrReg.value = "";
}


function EmailInArray() {

    for (var i = 0; i < registerInputs.length; i++) {
        if (emailInputReg.value.toLowerCase() == registerInputs[i].emailRg.toLowerCase()) {
            // EmailExist.classList.replace("d-none","d-block");
            // emailInputReg.classList.remove("is-valid");
            // emailInputReg.classList.add("is-invalid");
            EmailExist.classList.replace("d-none", "d-block");
            emailInputReg.classList.remove("is-valid");
            emailInputReg.classList.add("is-invalid");
            validateAllInputs.classList.replace("d-block", "d-none");
            return true;
        }

    }
}


function validateName() {
    var validateNameAlert = document.querySelector(".NameAlert");
    regexName = /\d*(?:[a-zA-Z]){3,}\d*/;
    if (regexName.test(nameInputReg.value) == true) {
        nameInputReg.classList.add("is-valid");
        nameInputReg.classList.remove("is-invalid");
        validateNameAlert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        nameInputReg.classList.remove("is-valid");
        nameInputReg.classList.add("is-invalid");
        validateNameAlert.classList.replace("d-none", "d-block");

        return false;
    }


}

function validateEmail() {
    var validatEmailAlert = document.querySelector(".EmailAlert");
    regexEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    if (regexEmail.test(emailInputReg.value) == true && emailInputReg.value != "") {
        emailInputReg.classList.add("is-valid");
        emailInputReg.classList.remove("is-invalid");
        validatEmailAlert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        emailInputReg.classList.remove("is-valid");
        emailInputReg.classList.add("is-invalid");
        validatEmailAlert.classList.replace("d-none", "d-block");

        return false;
    }


}

function validatePassword() {
    var validatePasswordAlert = document.querySelector(".passwordALert");

    regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (regexPassword.test(paswordInputrReg.value) == true && paswordInputrReg.value != "") {
        paswordInputrReg.classList.add("is-valid");
        paswordInputrReg.classList.remove("is-invalid");
        validatePasswordAlert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        paswordInputrReg.classList.remove("is-valid");
        paswordInputrReg.classList.add("is-invalid");
        validatePasswordAlert.classList.replace("d-none", "d-block");

        return false;
    }


}

SignUp.addEventListener("click", addAccount);


