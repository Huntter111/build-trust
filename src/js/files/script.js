// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';
// import Inputmask from 'inputmask';

// ! РОБОЧИЙ
// function showCustomContent() {
// 	var select = document.getElementById('custom_select');
// 	var selectedValue = select.options[select.selectedIndex].value;

// 	// Hide all content elements
// 	var contentElements = document.getElementsByClassName('map__body');
// 	for (var i = 0; i < contentElements.length; i++) {
// 		contentElements[i].style.display = 'none';
// 	}

// 	// Show the selected content element
// 	var selectedContent = document.querySelector("[data-content-id='form-" + selectedValue + "']");
// 	selectedContent.style.display = 'block';
// }

// // Add event listener for change event
// var customSelect = document.getElementById('custom_select');
// customSelect.addEventListener('change', showCustomContent);

// // Call the function to display default content
// showCustomContent();

// ! NEW BASE
// document.addEventListener('DOMContentLoaded', function () {
// 	// hides dropdown content
// 	var sizeCharts = document.querySelectorAll('.size_chart');
// 	sizeCharts.forEach(function (chart) {
// 		chart.style.display = 'none';
// 	});

// 	// unhides first option content
// 	document.getElementById('option1').style.display = 'block';

// 	// listen to dropdown for change
// 	document.getElementById('size_select').addEventListener('change', function () {
// 		// rehide content on change
// 		sizeCharts.forEach(function (chart) {
// 			chart.style.display = 'none';
// 		});
// 		// unhides current item
// 		document.getElementById(this.value).style.display = 'block';
// 	});
// });
// ????? ===================================================
// document.addEventListener('DOMContentLoaded', function () {
// 	// hides dropdown content
// 	var sizeCharts = document.querySelectorAll('.map__body');
// 	sizeCharts.forEach(function (chart) {
// 		chart.style.display = 'none';
// 	});

// 	// unhides first option content
// 	document.getElementById('option1').style.display = 'block';

// 	// listen to dropdown for change
// 	document.getElementById('size_select').addEventListener('change', function () {
// 		// rehide content on change
// 		sizeCharts.forEach(function (chart) {
// 			chart.style.display = 'none';
// 		});
// 		// unhides current item
// 		document.getElementById(this.value).style.display = 'block';
// 	});
// });
// ????? =================================================== Основний робочий
function showCustomContent(selectedValue) {
	// Hide all content elements
	var contentElements = document.getElementsByClassName('map__body');
	for (var i = 0; i < contentElements.length; i++) {
		contentElements[i].style.display = 'none';
	}

	// Show the selected content element
	var selectedContent = document.querySelector("[data-content-id='form-" + selectedValue + "']");
	selectedContent.style.display = 'block';
}

document.addEventListener('selectCallback', function (e) {
	const selectedValue = e.detail.select.value;

	// Call the function to display content based on the selected value
	showCustomContent(selectedValue);
});

// Call the function to display default content
showCustomContent(document.getElementById('custom_select').value);

// ! =================================================== ТУЛТІП перший
// document.addEventListener('DOMContentLoaded', function () {
// 	const tooltipTrigger = document.getElementById('tooltip-trigger');
// 	const tooltip = document.getElementById('tooltip');

// 	tooltipTrigger.addEventListener('mouseover', function () {
// 		tooltip.classList.add('active');
// 	});

// 	tooltipTrigger.addEventListener('mouseout', function () {
// 		tooltip.classList.remove('active');
// 	});

// 	tooltip.addEventListener('mouseover', function () {
// 		tooltip.classList.add('active');
// 	});

// 	tooltip.addEventListener('mouseout', function () {
// 		tooltip.classList.remove('active');
// 	});

// 	// Додатково можна використовувати подію кліку
// 	tooltipTrigger.addEventListener('click', function () {
// 		tooltip.classList.toggle('active');
// 	});
// });
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
