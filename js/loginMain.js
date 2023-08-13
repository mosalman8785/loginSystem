var LogPassword = document.getElementById("LoginPassword");
var LogEmail = document.getElementById("LoginEmail");
var LogButton1 = document.querySelector(".Login-bUTT")
var LogButton1Arr = document.querySelector(".LogButton1Arr");
var WrongAlert = document.querySelector(".Login-wrong");


var returned;
var loginArray = [];

if (localStorage.getItem("all-Accounts") != null) {

    loginArray = JSON.parse(localStorage.getItem("all-Accounts"));

}

// function LoginSuccess(){
//     // var WrongAlert2=document.querySelector(".Login-wrong2");
//     PassAndEmailExist();

//         if(PassAndEmailExist()==true)
//         {
//             LogButton1Arr.setAttribute("href","HomePage.html");

//         }
//         else{

//         }


// }

function PassAndEmailExist() {
    var SuccessAlert = document.querySelector(".Login-success")
    for (var i = 0; i < loginArray.length; i++) {
        if (loginArray[i].emailRg == LogEmail.value && loginArray[i].passwordRg == LogPassword.value) {

            SuccessAlert.classList.replace("d-none", "d-block");
            WrongAlert.classList.replace("d-block", "d-none");
            var returnName = loginArray[i].nameRg;
            localStorage.setItem("name returned",returnName);
           
            LogEmail.classList.add("is-valid");
            LogEmail.classList.remove("is-invalid");
            LogPassword.classList.add("is-valid");
            LogPassword.classList.remove("is-invalid");
            LogButton1Arr.setAttribute("href", "HomePage.html");


            console.log(returnName);
            break;

        }
        else {
            LogButton1Arr.removeAttribute("href");
            LogEmail.classList.remove("is-valid");
            LogEmail.classList.add("is-invalid");
            LogPassword.classList.remove("is-valid");
            LogPassword.classList.add("is-invalid");
            WrongAlert.classList.replace("d-none", "d-block");
            SuccessAlert.classList.replace("d-block", "d-none");

            continue;
        }

    }
}
LogButton1.addEventListener("click", PassAndEmailExist);
