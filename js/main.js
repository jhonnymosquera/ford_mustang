const car = document.querySelector('#car');

const btnBlue = document.querySelector('.btn-blue');
const btnBlack = document.querySelector('.btn-black');
const btnRed = document.querySelector('.btn-red');
const btnWhite = document.querySelector('.btn-white');

function changeCar(carColor) {
	car.setAttribute('src', `/img/veiculos/car-${carColor}.png`);
	car.setAttribute('alt', `car ${carColor}`);
}

function addEventClick(btn, color) {
	btn.addEventListener('click', () => changeCar(color));
}

addEventClick(btnBlue, 'blue');
addEventClick(btnBlack, 'black');
addEventClick(btnRed, 'red');
addEventClick(btnWhite, 'white');
