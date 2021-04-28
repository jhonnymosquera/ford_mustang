class Btns {
	constructor(color) {
		this.color = color;
		this.btn = document.querySelector(`.btn-${color}`);
		this.car = document.querySelector('#car');
		this.btn.addEventListener('click', () => this.changeCarColor());
	}

	changeCarColor() {
		car.setAttribute('src', `/img/veiculos/car-${this.color}.png`);
		car.setAttribute('alt', `car ${this.color}`);
	}
}

const blue = new Btns('blue');
const black = new Btns('black');
const red = new Btns('red');
const white = new Btns('white');
