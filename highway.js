//Hinghway class
function Highway (vignetteCost){
    this.vehicleList[];
    this.vignetteCost = vignetteCost;
}

Highway.prototype.enterHighway = function(vehicle){
    this.vehicleList.push(vehicle);  
    console.log(vehicle.driver.name + "entered the highway.");
    if (vehicle instance of Car) {
        vehicle.payVignette(this.vignetteCost);
        vehicle.driver.walletMoney -= this.vignetteCost;
    } 
    else if (vehicle instanceof Police) {
        console.log(vehicle.driver.name + "Police entered the highway.");
    }
    vehicle.increaseSpeed();
};

//Vehicle class
function Vehicle (name, runningSpeed, driver) {
    this.name = name;
    this.runningSpeed = runningSpeed;
    this.driver = driver;
}

Vehicle.prototype.increaseSpeed=funcion(speed){
    this.runningSpeed += speed;
};

//Bus class
function Bus(name, runningSpeed, driver){
    Vehicle.call(this, name, runningSpeed, driver);
}

Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Bus;

//Car class
function Car(name, runningSpeed, driver){
    Vehicle.call(this, name, runningSpeed, driver);
}
 
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

//Truck class
function Truck(name, runningSpeed, driver) {
    Vehicle.call(this, name, runningSpeed, driver);
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

//Driver class
function Driver(name, walletMoney){
    this.name = name;
    this.walletMoney = walletMoney;
}

//Police class
function Police(name, runningSpeed, driver){
    Vehicle.call(this, name, runningSpeed, driver)
}

Police.prototype = Object.create(Vehicle.prototype);
Police.prototype.constructor = Police;



Police.speedLimitsByVehicleType = {
    Bus: 120,
    Car: 90,
    Truck: 70
};

Police.fineByVehicleType = {
    Bus: 110,
    Car: 80,
    Truck: 60
};

Police.prototype.checkVehicleSpeed = function(vehicle) {
    let vehicleType = vehicle.constructor.name;
    let speedLimit = Police.speedLimitsByVehicleType[vehicleType];

    if (vehicle.runningSpeed > speedLimit) {
        let fineAmount = Police.fineByVehicleType[vehicleType];
        console.log(
            'Police found ${vehiclename} driven above the speed limit.'
        );
        vehicle.driver.walletMoney -= fineAmount;
        console.log (
            `After paid fine ${vehicle.driver.name}'s wallet money amount is now ${vehicle.driver.walletMoney}`
        );
    } else {
        return console.log (`${vehicle.name} is driving within the speed limit`);
    }
};

let driver1 = new Driver("Max Prime", 500);
let driver2 = new Driver("Star Scream", 800);
let driver3 = new Driver("Optimus Prime", 1200);

let bus = new Bus("AUTOBUS", 30, driver1);
let car = new Car("BMW", 250, driver2);
let truck = new Truck("TIR", 90, driver3);

let highway = new Highway(10);

highway.enterHighway(bus);
highway.enterHighway(car);
highway.enterHighway(truck);

bus.increaseSpeed(20);
car.increaseSpeed(30);
truck.increaseSpeed(15);

let police = new Police("Officer Funky");

police.checkVehicleSpeed(bus);
police.checkVehicleSpeed(car);
police.checkVehicleSpeed(truck);