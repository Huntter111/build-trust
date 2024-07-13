// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';
// import Inputmask from 'inputmask';

// ? ОСНОВНИЙ ПЕРЕРОБЛЕНИЙ
function showCustomContent(selectedValue) {
	// Hide all content elements
	let contentElements = document.getElementsByClassName('map__body');
	for (let i = 0; i < contentElements.length; i++) {
		contentElements[i].style.display = 'none';
	}

	// Show the selected content element
	let selectedContent = document.querySelector("[data-content-id='form-" + selectedValue + "']");
	if (selectedContent) {
		selectedContent.style.display = 'block';
	}
}

document.addEventListener('selectCallback', function (e) {
	const selectedValue = e.detail.select.value;

	// Check if .map__container exists on the page
	let mapContainer = document.querySelector('.map__container');
	if (mapContainer) {
		// Call the function to display content based on the selected value
		showCustomContent(selectedValue);
	}
});

// Check if .map__container exists on the page
var mapContainer = document.querySelector('.map__container');
if (mapContainer) {
	// Call the function to display default content
	showCustomContent(document.getElementById('custom_select').value);
}

// ! =================================================== ТУЛТІП другий
document.addEventListener('DOMContentLoaded', function () {
	const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
	const tooltips = document.querySelectorAll('.tooltip');

	tooltipTriggers.forEach((trigger, index) => {
		trigger.addEventListener('mouseover', function () {
			tooltips[index].classList.add('active');
		});

		trigger.addEventListener('mouseout', function () {
			tooltips[index].classList.remove('active');
		});

		tooltips[index].addEventListener('mouseover', function () {
			tooltips[index].classList.add('active');
		});

		tooltips[index].addEventListener('mouseout', function () {
			tooltips[index].classList.remove('active');
		});
	});
});
// ! SUB-MENU

//  ?/ PRELOADER
document.addEventListener('DOMContentLoaded', function () {
	// Перевірка наявності класу "touch" в тегу <html>
	let htmlElement = document.documentElement;

	if (htmlElement.classList.contains('touch')) {
		// Отримання елемента з ідентифікатором "menuOpen"
		let menuOpenElement = document.getElementById('menuOpen');

		// Перевірка, чи елемент існує
		if (menuOpenElement) {
			// Додавання обробника події click
			menuOpenElement.addEventListener('click', function () {
				// Включення або вимкнення класу "sub-menu-open"
				menuOpenElement.classList.toggle('sub-menu-open');
			});

			// Додавання обробника події click для виявлення кліка поза елементом
			document.addEventListener('click', function (event) {
				let isClickInside = menuOpenElement.contains(event.target);

				if (!isClickInside) {
					// Якщо клік був здійснений поза межами елемента, видаліть клас
					menuOpenElement.classList.remove('sub-menu-open');
				}
			});
		} else {
			console.error("Елемент з ідентифікатором 'menuOpen' не знайдений.");
		}
	}
});
