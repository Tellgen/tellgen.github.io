$(function() {

//SVG converter
	$('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

	});

//Parallax
	$(window).scroll(function() {

		var st = $(this).scrollTop();

		$(".paral").css({
			"transform" : "translate(0%, -" + st/14 +  "%"
		});

	});
//Anchor button
    $("#anchor").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#achivment").toggleClass("active");
    });
//swiper
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
    });

//Animate Coints
    var show = true;
    var countbox = ".counter";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $(".count").each(function () {
                    $(this).prop("Counter", 0).animate({
                        Counter: $(this).text()
                    },  {
                        duration: 2000,
                        easing: 'swing',
                        step:function(now){
                            $(this).text(Math.ceil(now));
                        }

                });
            });
             
            show = false;
        }
    });

//Button-top
    var $btnTop = $(".btn-top")
    $(window).on("scroll", function() {
        if($(window).scrollTop() >= 500){
            $btnTop.fadeIn();
        } else{
            $btnTop.fadeOut();
        }
    });

    $btnTop.on("click", function() {
        $("html, body").animate({scrollTop: 0}, 900)
    })

// menu-fixed
     var introH = $("#intro").innerHeight();
             scrollOffset = $(window).scrollTop();
             navig = $(".header");

        checkScroll(scrollOffset);

     $(window).on("scroll resize", function() {

            scrollOffset = $(this).scrollTop();

            checkScroll(scrollOffset);

        });
     function checkScroll(scrollOffset) {
            if ( scrollOffset >= introH ) {
                navig.addClass("active");
            } else {
                navig.removeClass("active");
            }

        };


//Menu scroll
    $(document).on("scroll", onScroll);
    
        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
          
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                // window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

});

//Menu-mobile
var circle = document.querySelector('.material-btn');
var link = document.querySelector('.material-content').querySelectorAll('li');
var ham = document.querySelector('.material-hamburger');
var content = document.querySelector('.material-menu');
var content2 = document.querySelector('.material-content');
var wrapper = document.querySelector('.material-menu-wrapper');
var main = document.querySelector('main');
var win = window;

function openMenu(event) {
 
  circle.classList.toggle('active');
  content.classList.toggle('active');
  content2.classList.toggle('active');
  wrapper.classList.toggle('active');
  ham.classList.toggle('material-close');
  main.classList.toggle('active');
  for (var i = 0; i < link.length; i++) {
    link[i].classList.toggle('active');
  }
  event.preventDefault();
  event.stopImmediatePropagation();
}

function closeMenu() {
  if (circle.classList.contains('active')) {
    circle.classList.remove('active');
    content.classList.remove('active');
    content2.classList.remove('active');
    wrapper.classList.remove('active');
    for (var i = 0; i < link.length; i++) {
      link[i].classList.toggle('active');
    }
    ham.classList.remove('material-close');
    main.classList.remove('active');
  }
}

circle.addEventListener('click', openMenu, false);

win.addEventListener('click', closeMenu, false);


