/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay,  }
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade, Controller } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// transformation
	// Перевіряємо, чи є слайдер на сторінці

	if (document.querySelector('.transformation') && document.querySelector('.text-transformation')) { 
	
		
	
		
		const imageSwiper = new Swiper('.transformation',  { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Controller, Autoplay, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			// preloadImages: false,
			// lazy: true,
		
			
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 4000,			
				disableOnInteraction: true,

			},
		

			// Пагінація
	
			pagination: {
				el: '.transformatio__pagination',
				clickable: true,
				type: 'fraction',
				renderFraction: function(currentClass, totalClass) {
					return 'Фото <span class="' + currentClass + '"></span>' + 
					' из ' + '<span class="' + totalClass + '"></span>';
				},
			},
		

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.transformation__button-prev',
				nextEl: '.transformation__button-next',
			},
		
		
			spaceBetween: 30,
			
			

			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
		const textSwiper = new Swiper('.text-transformation', {
			modules: [Pagination, Controller, Autoplay, EffectFade, Navigation],
			spaceBetween: 30,
			slidesPerView: 1,
			loop: true,
			speed: 800,
				// Ефекти
				effect: 'fade',
			
			pagination: {
				el: '.swiper-text-pagination',
				clickable: true,
				type: 'fraction',
				renderFraction: function(currentClass, totalClass) {
					return 'Фото <span class="' + currentClass + '"></span>' + 
					' из ' + '<span class="' + totalClass + '"></span>';
				},
			},
		});	
	
			imageSwiper.controller.control = textSwiper;
			textSwiper.controller.control = imageSwiper;		
	}else{
		console.error("Не найдены необходимые элементы для инициализации слайдеров.");
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
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();

	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	// initSlidersScroll();
});
document.addEventListener('DOMContentLoaded', function() {
    // Ваш код инициализации слайдеров
	// initSliders();
});
