const $ = ($) => document.querySelector($);

class BtnChangeColorCar {
	constructor(color) {
		this.car = $('#car');
		this.btn = $(`.btn-${color}`);
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

const menu = $('#nav');
const bars = $('.bars');
const b2 = $('#b2');
const b3 = $('#b3');

bars.addEventListener('click', () => {
	menu.classList.toggle('menu');
	b2.classList.toggle('menu-b2');
	b3.classList.toggle('menu-b3');
});
