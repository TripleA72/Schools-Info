// //  Log In Logic

// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){

//   // var string = a;
//   // var string = b;
//   // var string = c;
//   // var string = username;
//   // var string = password;

//   var a = document.getElementById("a").value;
//   var b = document.getElementById("b").value;
//   var c = document.getElementById("c").value;  
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

  

// if ( a == username && b == password){
// alert ("Login successfully");
// window.location = "index.html"; // Redirecting to other page.
// return false;
// }

// else if ( username == "admin" && password == "admin"){
//   alert ("Login successfully");
//   window.location = "index.html"; // Redirecting to other page.
//   return false;
//   }

// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }







const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "admin"){
alert ("Login successfully");
window.location = "index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
