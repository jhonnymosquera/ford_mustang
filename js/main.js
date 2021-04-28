const car = document.querySelector('#car');

const btnBlue = document.querySelector('.btn-blue');
const btnBlack = document.querySelector('.btn-black');
const btnRed = document.querySelector('.btn-red');
const btnWhite = document.querySelector('.btn-white');

const changeCarColor = (btn, color) =>
	btn.addEventListener('click', () => {
		car.setAttribute('src', `/img/veiculos/car-${color}.png`);
		car.setAttribute('alt', `car ${color}`);
	});

	btn.addEventListener('click', () => changeCar(color));
}
changeCarColor(btnBlue, 'blue');
changeCarColor(btnBlack, 'black');
changeCarColor(btnRed, 'red');
changeCarColor(btnWhite, 'white');
