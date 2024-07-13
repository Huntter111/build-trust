/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, EffectFade, Mousewheel } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import '../../scss/base/swiper.scss';
// Повний набір стилів з scss/libs/swiper.scss
import '../../scss/libs/swiper.scss';
// Повний набір стилів з node_modules
// import 'swiper/css';

// ! Для визначення Trackpad
let isTrackpad = false;
let timeout;

window.onwheel = function (e) {
	clearTimeout(timeout);
	if (e.deltaMode === 0) isTrackpad = true;
	timeout = setTimeout(() => {
		isTrackpad = false;
	}, 50);
};

function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.project__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.project__slider', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Mousewheel, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,
			// spaceBetween: 30,
			// effect: 'fade',
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Додаємо параметр mousewheel
			mousewheel: {
				releaseOnEdges: true,
				// ! Для визначення Trackpad
				eventsTarged: isTrackpad ? '.project__slider' : null,
			},

			// Ефекти
			// effect: 'fade',

			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

			// Пагінація
			/*
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      */

			// Скроллбар
			/*
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      */

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.project__swiper-button-prev',
				nextEl: '.project__swiper-button-next',
			},

			// Брейкпоінти
			breakpoints: {
				441: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
					effect: 'fade', // Apply fade effect at this breakpoint
					fadeEffect: {
						crossFade: true, // Enable cross-fade between slides
					},
				},
				540: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			// Події
			on: {},
		});
	}
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener('load', function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	// initSlidersScroll();
});
