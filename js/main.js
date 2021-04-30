const QS = (s) => document.querySelector(s);

class BtnChangeColorCar {
	constructor(color) {
		this.car = QS('#car');
		this.btn = QS(`.btn-${color}`);
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

const menu = QS('#nav');
const bars = QS('.bars');
const b2 = QS('#b2');
const b3 = QS('#b3');

bars.addEventListener('click', () => {
	menu.classList.toggle('menu');
	b2.classList.toggle('menu-b2');
	b3.classList.toggle('menu-b3');
});
