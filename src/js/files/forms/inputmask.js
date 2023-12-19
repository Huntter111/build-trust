/* Маски для полів (у роботі) */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from '../modules.js';

// Підключення модуля
import 'inputmask/dist/inputmask.min.js';

function initializeInputMask(inputElement) {
	if (inputElement) {
		let im = new Inputmask('+38(099) 999-99-99', { showMaskOnHover: false });
		im.mask(inputElement);
		const form = inputElement.closest('form');
		if (form) {
			form.addEventListener('submit', function (event) {
				const maskedValue = inputElement.inputmask.unmaskedvalue();
				if (maskedValue.length < 9) {
					event.preventDefault();
					// alert('Пожалуйста, введите полный номер телефона.');
				}
			});
		}
	}
}

const inputMask = document.getElementById('phoneInput');

initializeInputMask(inputMask);

// const inputMasks = document.querySelectorAll('input');
// if (inputMasks.length) {
// 	flsModules.inputmask = Inputmask().mask(inputMasks);
// }
