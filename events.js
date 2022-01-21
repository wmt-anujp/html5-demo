// on click

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

// on change
function changing() {
    var x = document.getElementById("eventuse").value;
    document.getElementById("demo").innerHTML = "You have selected: " + x;
}

function bigImg(x) {
    x.style.height = '150px';
    x.style.width = "250px";
}

function originalImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}