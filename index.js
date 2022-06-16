// whenever we click on any button ... we call function display ...in this print the value of clicked button in the input field
function display(value) {
  // here take element by value and ,we should not change the value ,append the value so +=
  document.getElementById("textarea").value += value;
}
// execute the calculate function
function calculate() {
  //first  we have to take value from input field
  var value = document.getElementById("textarea").value;
  var ans = eval(value);
  document.getElementById("textarea").value = ans;
}
//for clear functionality

function clr() {
  //var v = document.getElementById("textarea").value;
  document.getElementById("textarea").value = " ";
}
