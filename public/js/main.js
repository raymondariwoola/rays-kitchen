const foodItemsObj = {
	"Baked Plantains": {
		"id": "BakedPlantains",
		"count": 0
	},
	"Fried Plantains": {
		"id": "FriedPlantains",
		"count": 0
	},
	"Buffalo Chicken Drumsticks": {
		"id": "BuffaloChickenDrumsticks",
		"count": 0
	},
	"Spaghetti Bolognese": {
		"id": "SpaghettiBolognese",
		"count": 0
	},
	"Shrimp Fried Rice": {
		"id": "ShrimpFriedRice",
		"count": 0
	},
	"Classic Corn Salad": {
		"id": "ClassicCornSalad",
		"count": 0
	}
};

let chosenFood = [];


(function () {

	'use strict';

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var mobileMenuOutsideClick = function () {

		$(document).click(function (e) {
			var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				$('.js-gtco-nav-toggle').addClass('gtco-nav-white');

				if ($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-gtco-nav-toggle').removeClass('active');

				}


			}
		});

	};

	var formTab = function () {

		$('.tab-menu a').on('click', function (event) {
			var $this = $(this),
				data = $this.data('tab');

			$('.tab-menu li').removeClass('active');
			$this.closest('li').addClass('active')

			$('.tab .tab-content-inner').removeClass('active');
			$this.closest('.tab').find('.tab-content-inner[data-content="' + data + '"]').addClass('active');

			event.preventDefault();

		});

	};

	var offcanvasMenu = function () {

		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function () {
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function () {

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function () {

			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-gtco-nav-toggle').removeClass('active');

			}
		});
	};


	var burgerMenu = function () {

		$('body').on('click', '.js-gtco-nav-toggle', function (event) {
			var $this = $(this);


			if ($('body').hasClass('overflow offcanvas')) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function () {
		var i = 0;

		// $('.gtco-section').waypoint( function( direction ) {


		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, {
			offset: '85%'
		});
		// }, { offset: '90%'} );
	};


	var dropdown = function () {

		$('.has-dropdown').mouseenter(function () {

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function () {
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var owlCarousel = function () {

		var owl = $('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
				"<i class='ti-arrow-left owl-direction'></i>",
				"<i class='ti-arrow-right owl-direction'></i>"
			],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});


		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
				"<i class='ti-arrow-left owl-direction'></i>",
				"<i class='ti-arrow-right owl-direction'></i>"
			]
		});




	};



	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Loading page
	var loaderPage = function () {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function () {
		if ($('#gtco-counter').length > 0) {
			$('#gtco-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, {
				offset: '90%'
			});
		}
	};

const today = new Date();

	var dateTimeForm = function () {
		// $('#date-start').datepicker();
		$('#date').datetimepicker({
			format: 'DD/MM/YYYY',
			disabledDates: blockedDates,
			useCurrent: true,
			minDate: today
		});
		$('#time').datetimepicker({
			format: 'LT'
		});
	};

	var parallax = function () {

		if (!isMobile.any()) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false,
				responsive: true

			});
		}
	};



	$('.owl-carousel2').owlCarousel({
		items: 2,
		loop: true,
		margin: 10,
		merge: true,
		responsive: {
			678: {
				mergeFit: true
			},
			1000: {
				mergeFit: true
			}
		}
	});



	$(".add-Item").click((e) => {
		e.preventDefault();
		const selectedFoodItem = (e.target.parentElement.innerText).split("\n")[0];
		foodItemsObj[selectedFoodItem].count++;
		const selectedFoodElem = `<li class="food-item selected"><p class="food-item-name">${selectedFoodItem}</p> <input type="text" name="count" class="disabled" value="1" id="${foodItemsObj[selectedFoodItem].id}" disabled/> <a href="#" onclick="removeItem(event,${foodItemsObj[selectedFoodItem].id}); event.preventDefault();" class="btn btn-secondary remove-Item">Remove</a></li>`;

		if (foodItemsObj[selectedFoodItem].count === 1) {
			$(".selected-food-items").append(selectedFoodElem);
			chosenFood.push(selectedFoodItem);
		} else {
			$("#" + foodItemsObj[selectedFoodItem].id).val(foodItemsObj[selectedFoodItem].count);
		}
	});

	$(function () {
		mobileMenuOutsideClick();
		formTab();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		owlCarousel();
		goToTop();
		loaderPage();
		counterWayPoint();
		dateTimeForm();
		parallax();
	});


}());


function removeItem(x, y) {
	const selectedFoodItem = (x.target.parentElement.innerText).split("\n")[0];
	foodItemsObj[selectedFoodItem].count--;

	if (foodItemsObj[selectedFoodItem].count === 0) {
		y.parentElement.remove();
		chosenFood = chosenFood.filter(item => item !== selectedFoodItem);
	} else {
		$("#" + foodItemsObj[selectedFoodItem].id).val(foodItemsObj[selectedFoodItem].count);
	}

}




const btn = document.querySelector('.submit');


$(".submit").mouseenter((e) => {
	$("#hiidenData").val(chosenFood);
})

// function sendData(data) {
// 	const XHR = new XMLHttpRequest();
// 	let urlEncodedData = "",
// 		urlEncodedDataPairs = [],
// 		name;
// 	for (name in data) {
// 		urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
// 	}
// 	urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
// 	XHR.addEventListener('load', function (event) {
// 		console.log('Data sent');
// 	});
// 	XHR.addEventListener('error', function (event) {
// 		console.log('Oops! Something went wrong.\n' + event);
// 	});
// 	XHR.open('POST', '/reservation');
// 	XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 	XHR.send(urlEncodedData);
// }

// btn.addEventListener('click', function () {
// 	sendData({
// 		data: chosenFood
// 	});
// });