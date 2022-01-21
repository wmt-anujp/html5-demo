// onclick

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// onchange
function changing() {
  var x = document.getElementById("eventuse").value;
  document.getElementById("demo").innerHTML = "You have selected: " + x;
}

// onmouseover & onmouseout
function bigImg(x) {
  x.style.height = "150px";
  x.style.width = "250px";
}

function originalImg(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}

// onkeydown , onkeypress, onkeyup

function keyfunction() {
  alert("You pressed the key from keyboard");
}

// onload

function loadfunction() {
  alert("page loaded");
}
