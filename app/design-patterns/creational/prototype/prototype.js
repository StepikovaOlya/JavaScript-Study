// Прототип схожий на фабрику, дозволяє лекго клонувати об"єкти.
// Але на відміну від фабрики, має уже готову дефолтну реалізацію

class TeslaCar {

	constructor(model, price, interior, autopilot) {
		this.model = model;
		this.price = price;
		this.interior = interior;
		this.autopilot = autopilot;
	}

	produce() {
		return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
	}
}

const prototypeCar = new TeslaCar('S', 8000, 'black', false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.interior = 'red';
car2.autopilot = true;
