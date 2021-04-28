const car = document.querySelector('#car');

const btnBlue = document.querySelector('.btn-blue');
const btnBlack = document.querySelector('.btn-black');
const btnRed = document.querySelector('.btn-red');
const btnWhite = document.querySelector('.btn-white');

function cambiarCarro(carColor) {
	car.setAttribute('src', `/img/veiculos/car-${carColor}.png`);
	car.setAttribute('alt', `car ${carColor}`);
}

btnBlue.addEventListener('click', () => cambiarCarro('blue'));
btnBlack.addEventListener('click', () => cambiarCarro('black'));
btnRed.addEventListener('click', () => cambiarCarro('red'));
btnWhite.addEventListener('click', () => cambiarCarro('white'));
