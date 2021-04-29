class BtnChangeColorCar {
	constructor(color) {
		this.car = document.querySelector('#car');
		this.btn = document.querySelector(`.btn-${color}`);
		this.btn.addEventListener('click', () => {
			car.setAttribute('src', `img/veiculos/car-${color}.png`);
			car.setAttribute('alt', `car ${color}`);
		});
	}
}

const blue = new BtnChangeColorCar('blue');
const black = new BtnChangeColorCar('black');
const red = new BtnChangeColorCar('red');
const white = new BtnChangeColorCar('white');
