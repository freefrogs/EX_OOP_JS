function Phone(name, brand, price, color, RAM, ROM, camera) {
	this.name = name;
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.RAM = RAM;
	this.ROM = ROM;
	this.camera = camera;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + ' zł');
};

Phone.prototype.techData = function() {
	console.log(this.name + ' technical data are: RAM: ' + this.RAM + ', ROM: ' + this.ROM);
};

var GalaxyS6 = new Phone('Galaxy S6', 'Samsung', 1400, 'black', '3 GB', '32 GB', '16 MP'),
	iPhone6S = new Phone('iPhone6s', 'Apple', 1600, 'silver', '1 GB', '32 GB', '8 MP'),
	OnePlus3T = new Phone('OnePlus 3T', 'OnePlus', 2000, 'gold', '6 GB', '64 GB', '16 MP');

GalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlus3T.printInfo();

GalaxyS6.techData();
iPhone6S.techData();
OnePlus3T.techData();