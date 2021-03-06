$(function() {
	$('.header-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	$('.news-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots:false,
		autoplay: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	var owl = $('.header-slider');
	$('.header-slider-right').click(function() {
		owl.trigger('next.owl.carousel');
	});
	$('.header-slider-left').click(function() {
		owl.trigger('prev.owl.carousel');
	});


	$(function () {
		$("#accordion").accordion();
	});
	$(function () {
		$("#accordion-1").accordion();
	});
	$('.lk-btn').click(function () {
		$('.accord-2').toggleClass('accord-2-active');
	});

	$('#calendar').datepicker({
		inline: true,
		firstDay: 1,
		showOtherMonths: true,
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
			'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
	});

	var navBtn = $('.navbar-btn');
	var navMenu = $('.nav-list');
	//hamburger btn behavior starts here
	navBtn.click(function () {
		navBtn.toggleClass('navbar-btn-active');
		navMenu.toggleClass('nav-list-active');
	});

	var newsTabs = $('.h-tabs'); 
	var newsTab1 = $('.news-tab-1');
	var newsTab2 = $('.news-tab-2');
	var newsTab1_content = $('.recent .tab-1-content');
	var newsTab2_content = $('.recent .tab-2-content')
	newsTab1.click(function(e) {
		if(newsTab1.hasClass('active')) {
			newsTab1.removeClass('active');
		};
		e.preventDefault();
		newsTab1.toggleClass('active');
		newsTab2.removeClass('active');
		newsTab1_content.toggleClass('active');
		newsTab2_content.removeClass('active');
	});
	newsTab2.click(function(e) {
		e.preventDefault();
		newsTab2.toggleClass('active');
		newsTab1.removeClass('active');
		newsTab2_content.toggleClass('active');
		newsTab1_content.removeClass('active');
	});

});
