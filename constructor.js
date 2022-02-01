// object creation
let car = {
    name: "mustang",
    topspeed: 120,
    run: function () {
        console.log("Car is running");
    }
}

// function creation
function GeneralCar(givenName, givenSpeed) {
    this.name = "Jaguar";
    this.topspeed = 210;
    this.run = function () {
        console.log(`${this.name} is runnning`);
    }
}
// new creations
somecar1 = new GeneralCar("creta", 150);
console.log(somecar1);
somecar1.run();