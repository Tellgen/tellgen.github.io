$(function() {
// carousel

 $('.reviews').owlCarousel({
	loop: true,
	items: 1,
	smartSpeed: 700,
	nav: true,
	autoheight: true
 });

// Fixed menu

 var infoH = $("#infoHT").innerHeight();
		 scrollOffset = $(window).scrollTop();
		 navi = $("#navi");

	checkScroll(scrollOffset);

 $(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});

 function checkScroll(scrollOffset) {
		if ( scrollOffset >= infoH ) {
			navi.addClass("active");
		} else {
			navi.removeClass("active");
		}

	};

// Smooth scroll

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
				blockId = $(this).data('scroll'),
				blockOffset = $(blockId). offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}), 500;
	});

// Menu nav toggle

	$("#nav-toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

// Collapse

	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
				blockId = $this.data('collapse');

		$this.toggleClass("active")
	});

});
