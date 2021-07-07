window.addEventListener("load", () => {
  //start your code here
  
});

window.addEventListener("submit", e => {
  var passwordLength = document.createElement("input");
  passwordLength.setAttribute("number", 2);
  console.log(e);
});

var characters = document.getElementById("number").value;


//when length selected and button pushed - submit - then generate password//

//if lower than four don't allow submit - error message//

