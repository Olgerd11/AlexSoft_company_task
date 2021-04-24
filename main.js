'use strict';

/* ============= header navigation ============== */

const logo1 = document.querySelector('#changeStyle1');
const logo2 = document.querySelector('#changeStyle2');
const logo3 = document.querySelector('#changeStyle3');
const logo4 = document.querySelector('#changeStyle4');
const logo5 = document.querySelector('#changeStyle5');
const logo6 = document.querySelector('#changeStyle6');

const logo = [logo1, logo2, logo3, logo4, logo5, logo6];

const removeNavStyle = function() {
	for (let i of logo) {
		i.classList.remove('navigation__link--active');
	}
};

const changeNavStyles = function() {
	this.classList.add('navigation__link--active');
};

logo1.addEventListener('click', removeNavStyle);
logo2.addEventListener('click', removeNavStyle);
logo3.addEventListener('click', removeNavStyle);
logo4.addEventListener('click', removeNavStyle);
logo5.addEventListener('click', removeNavStyle);
logo6.addEventListener('click', removeNavStyle);

logo1.addEventListener('click', changeNavStyles);
logo2.addEventListener('click', changeNavStyles);
logo3.addEventListener('click', changeNavStyles);
logo4.addEventListener('click', changeNavStyles);
logo5.addEventListener('click', changeNavStyles);
logo6.addEventListener('click', changeNavStyles);
