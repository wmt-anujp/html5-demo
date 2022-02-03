console.log("Learning AJAX");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("Fetch Button was clicked");
    
    // create an xhr object
    const xhr = new XMLHttpRequest();
    
    // using this for GET request
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    
    // using this for POST request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader("Content-type", "application/json");
    
    // what to do on progress
    xhr.onprogress = function(){
        console.log("On Progress");
    }

    // what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.error("Some Error");
        }
    }
    params = `{"name":"test","salary":"123","age":"23"}`;   
    xhr.send(params);
    console.log("Completed with the AJAX GET part");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log("Populate Button was clicked");
    
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    // using this for GET request
    xhr.open('GET', 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8', true);

    // what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            // console.log(obj);
            let list = document.getElementById("list");
            str = "";
            for (key in obj) {
                str+=`<li>${obj[key].name}</li>`
            }
            list.innerHTML = str;
        }
        else {
            console.error("Some Error");
        }
    }

    xhr.send();
    console.log("We are fetching employees");
}