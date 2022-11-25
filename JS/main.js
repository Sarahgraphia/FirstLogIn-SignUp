
var signUp = document.querySelector(".sign-up");
var logIn = document.querySelector(".log-in");
var signLink = document.querySelector(".signLink");
var logLink = document.querySelector(".logLink");

var userName = document.querySelector(' #userName');
var userEmail = document.querySelector(' #userEmail');            //SignUp
var userPass = document.querySelector(' #userPassword');

var userEmailLogin = document.querySelector(' #loginEmail');        //LogIn
var userPassLogin = document.querySelector(' #loginPassword');

var inputs = document.querySelectorAll('input');
var signBtn = document.querySelector('.sign-up button');
var logBtn = document.querySelector('.log-in button');

var emptyAlert = document.getElementById('emptyAlert');
var emailExist = document.getElementById('emailExist')    //Alerts
var filled = document.getElementById('filled');
var logInCheck = document.getElementById('logInCheck');

var users = [];

if (JSON.parse(localStorage.getItem('usersList')) != null) {

    users = JSON.parse(localStorage.getItem('usersList'));

}

signBtn.addEventListener('click', function () {

    requiredInputs()
    clearForm();
})


function requiredInputs() {
    if (userName.value === "" || userEmail.value === "" || userPass.value === "") {

        emptyAlert.classList.remove('d-none');
    }
    else {


        emptyAlert.classList.add('d-none');
        filled.classList.remove('d-none');
        check();
    }
}

function check() {
   

    var isEmail = users.find((user) => user.email == userEmail.value ); //arrow function .. (user) hwa el varible ele balef bih gwa el users[]
    

    if (!isEmail) {
        addUser()
        emailExist.classList.add('d-none');

    } else {
        emailExist.classList.remove('d-none');
        filled.classList.add('d-none');

    }
}

function addUser() {


    var user = {

        name: userName.value,
        email: userEmail.value,
        password: userPass.value
    }

    users.push(user);
    localStorage.setItem('usersList', JSON.stringify(users));
    
}

function clearForm() {

    for (var i = 0; i < inputs.length; i++) {

        inputs[i].value = "";

    }

}


signLink.addEventListener('click', getToSign)


function getToSign() {

    logIn.classList.add('d-none');

    signUp.classList.remove('d-none');

}

                                 /**********************   LOG IN   **********************/
logLink.addEventListener('click', getToLog)

function getToLog() {

    signUp.classList.add('d-none');

    logIn.classList.remove('d-none');

}

logBtn.addEventListener('click', function (){

    checkLogIn()
   
})


function checkLogIn() {

    var emailIsExist = false;
    var passExist = false;
    
    for (var i = 0; i < users.length; i++) {

        if ((users[i].email == userEmailLogin.value) && (users[i].password == userPassLogin.value))  {

            emailIsExist = true;
            passExist = true;
        
         localStorage.setItem('currentUserName', users[i].name);  //to catch up the user who's loged succesfuly
        }
    }
    if (emailIsExist && passExist)  {

         window.location.href = 'welcome.html';
            
    } else if (!(emailIsExist || passExist)) {
        clearForm();

        logInCheck.classList.remove('d-none');
    }
}

