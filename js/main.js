class BtnChangeColorCar {
	constructor(color) {
		this.color = color;
		this.car = document.querySelector('#car');
		this.btn = document.querySelector(`.btn-${color}`);
		this.btn.addEventListener('click', () => {
			car.setAttribute('src', `/img/veiculos/car-${this.color}.png`);
			car.setAttribute('alt', `car ${this.color}`);
		});
	}
}

const blue = new BtnChangeColorCar('blue');
const black = new BtnChangeColorCar('black');
const red = new BtnChangeColorCar('red');
const white = new BtnChangeColorCar('white');
