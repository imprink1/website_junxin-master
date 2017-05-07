"use strict"; // Start of use strict



// 1. revolution slider
function revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		jQuery("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
			navigation: {
				arrows:{enable:true} 
			}, 
			gridwidth:1920,
			gridheight:780
		});
	};
}


// 16. handlePreloader
function handlePreloader() {
	if($('.preloader').length){
		$('.preloader').fadeOut();
	}
}



//Update Header Style + Scroll to Top
	function scrollToTop() {
		if($('.page-wrapper').length){
			var topHeader = $('.main-header').innerHeight();
			var windowpos = $(window).scrollTop();
			if (windowpos >= topHeader) {
				$('.page-wrapper').addClass('fixed-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.page-wrapper').removeClass('fixed-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
		// Scroll to top
	if($('.scroll-to-top').length){
		$(".scroll-to-top").click(function() {
		   // animate
		   $('html, body').animate({
			   scrollTop: $('html, body').offset().top
			 }, 1000);
	
		});
	}	

// 2. accrodion
function accrodion () {
	if ($('.accrodion-box').length) {
		
		$('.accrodion-box').each(function () {
			var accrodionName = $(this).data('grp-name');
			var Self = $(this);
			Self.addClass(accrodionName);
			Self.find('.accrodion .accrodion-content').hide();
			Self.find('.accrodion.active').find('.accrodion-content').show();
			Self.find('.accrodion').each(function() {
				$(this).find('.accrodion-title').click(function () {
					if ($(this).parent().hasClass('active') === false ) {					
						$('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
						$('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
						$(this).parent().addClass('active');					
						$(this).parent().find('.accrodion-content').slideDown();	
					};
				});
			});
		});
		
	};
}


		if ($('.accordion-box').length) {
	        $('.accordion-box .acc-btn').click(function() {
	            if ($(this).hasClass('active') !== true) {
	                $('.accordion-box .acc-btn').removeClass('active');
	            }

	            if ($(this).next('.acc-content').is(':visible')) {
	                $(this).removeClass('active');
	                $(this).next('.acc-content').slideUp(500);
	            } else {
	                $(this).addClass('active');
	                $('.accordion-box .acc-content').slideUp(500);
	                $(this).next('.acc-content').slideDown(500);
	            }
	        });
	    }




// 3. gallery fancybox activator 
function GalleryFancyboxActivator () {
  var galleryFcb = $('.fancybox');
  if(galleryFcb.length){
    galleryFcb.fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',
      helpers : {
        media : {}
      }
    });
  }
}



// 4. select menu
function selectMenu () {
	if ($('.select-menu').length) {
		$('.select-menu').selectmenu();
	};
}



// 5. client carousel
function clientCarousel () {
	if ($('.client-carousel').length) {
		$('.client-carousel.owl-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: false,
		    dots: false,
		    autoWidth: false,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    responsive: {
		        0:{
		            items:1,
		            autoWidth: false
		        },
		        480:{
		            items:2,
		            autoWidth: false
		        },
		        600:{
		            items:3,
		            autoWidth: false
		        },
		        1000:{
		            items:4,
		            autoWidth: false
		        }
		    }
		});
	};
}



// 6. counter number changer
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}



	//Progress Bar / Levels
	if($('.progress-levels .progress-box .bar-fill').length){
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width',progressWidth+'%');
			$(this).parents('.progress-box').children('.percent').html(progressWidth+'%');
		});
	}



// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .counter-column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}



// 8. contact form validation
function contactFormValidation () {

	if($('.contact-form').length){
		$('.contact-form').validate({ // initialize the plugin
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				},
				subject: {
					required: true
				}
			},
			submitHandler: function (form) { 
				// sending value with ajax request
				$.post($(form).attr('action'), $(form).serialize(), function (response) {
					$(form).parent('div').append(response);
					$(form).find('input[type="text"]').val('');
					$(form).find('input[type="email"]').val('');
					$(form).find('textarea').val('');
				});
				return false;
			}
		});
	}
}



// 9. sticky header
function stickyHeader () {
	if ($('.stricky').length) {
		var strickyScrollPos = 100;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.stricky').removeClass('fadeIn animated');
	      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
		}
		else if($(this).scrollTop() <= strickyScrollPos) {
			$('.stricky').removeClass('stricky-fixed fadeInDown animated');
	      	$('.stricky').addClass('slideIn animated');
		}
	};
}

function mainmenu() {
	//Submenu Dropdown Toggle
	if($('.main-menu li.dropdown ul').length){
		$('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu li.dropdown .dropdown-btn').click(function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

}


// 10. gallery
function fleetGallery () {
	if ($('.mixit-gallery').length) {
		$('.mixit-gallery').mixItUp();
	};
}



// 11. typed plugin
function typed () {
	if ($(".typed").length) {
		$(".typed").typed({
	        stringsElement: $('.typed-strings'),
	        typeSpeed: 200,
	        backDelay: 1500,
	        loop: true,
	        contentType: 'html', // or text
	        // defaults to false for infinite loop
	        loopCount: false,
	        callback: function () { null; },
	        resetCallback: function () { newTyped(); }
	    });
    };
}



	//Jquery Tabs Box
	if($('.tabs-box').length){
		//Tabs
		$('.tabs-box .tab-buttons .tab-btn').click(function(e) {
			
			e.preventDefault();
			var target = $($(this).attr('href'));
			
			target.parents('.tabs-box').children('.tab-buttons').children('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.tabs-box').children('.tab-content').children('.tab').fadeOut(0);
			target.parents('.tabs-box').children('.tab-content').children('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		});
		
	}





	if($('.has-gallery-popup').length){
		
		//Show Gallery Popup
		$('.has-gallery-popup').click(function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('body').addClass('popup-visible');
			$(target).addClass('now-visible');
		});
		
		//Show Gallery Popup
		$('.gallery-box .btn-close,.gallery-box .bg-fade-layer').click(function() {
			$('.gallery-box').removeClass('now-visible');
			$('body').removeClass('popup-visible');
		});
		
	}
	
	




// 13. testimonails carousel
function testimonialsCarosuleGardener () {
	if ($('.testimonials-section').length) {
		$('.testimonials-section .owl-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
		    dots: false,
		    autoplay: true,
		    autoplayHoverPause: true,
		    navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        800:{
		            items:2
		        },
		        1000:{
		            items:2
		        }
		    }
		});
	}
}


// 13. testimonails carousel
function relatedProjectCarosule () {
	if ($('.related-project-carousel').length) {
		$('.related-project-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
		    dots: false,
		    autoplay: true,
		    autoplayHoverPause: true,
		    navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});
	}
}


function toolTip () {
	$('[data-toggle="tooltip"]').tooltip();
}


function singleFeaturedHover () {
	if ($('.single-our-feature').length) {		
		$('.single-our-feature').hover(function () {
			var bgHover = $(this).data('hover-background');
			$(this).css({
				'background-image': 'url('+bgHover+')'
			});
		}, function () {
			$(this).css({
				'background-image': ''
			});
		});
	};
}

function languageSwitcher () {
	if ($("#polyglot-language-options").length) {
			$('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
				effect: 'fade',
                testMode: true,
                onChange: function(evt){
                    alert("The selected language is: "+evt.selectedItem);
                }
			});
	};
}

function aboutCarousel () {
	if ($('.about-page .owl-carousel').length) {
		$('.about-page .owl-carousel').owlCarousel({
			loop: true,
		    margin: 0,
		    nav: false,
		    dots: true,
		    autoplay: true,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
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
	};
}

function testiWidgetCarousel () {
	if ($('.testimonials-widget .owl-carousel').length) {
		$('.testimonials-widget .owl-carousel').owlCarousel({
			loop: true,
		    margin: 0,
		    nav: false,
		    dots: true,
		    autoplay: true,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
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
	};
}

function singleProjectCarousel () {
	if ($('.single-project-carousel').length) {
		$('.single-project-carousel').owlCarousel({
			loop: true,
		    margin: 0,
		    nav: true,
		    navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    dots: false,
		    autoplay: true,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
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
	};
}

function blogShareSlide () {
	if ($('.share-box.has-slide').length) {		
		$('.share-box.has-slide button').click(function () {
			$(this).parent().find('.share-slide').toggleClass('share-hide share-show');
		});
	};
}

function respnsiveVideo () {
	if ($('.responsive-video-box').length) {
		$('.responsive-video-box').fitVids();
	}
}

function videoFancybox () {
	if ($("a.video-fancybox").length) {
		$("a.video-fancybox").click(function() {
		    $.fancybox({
		            'padding'       : 0,
		            'autoScale'     : false,
		            'transitionIn'  : 'none',
		            'transitionOut' : 'none',
		            'title'         : this.title,
		            'width'         : 680,
		            'height'        : 495,
		            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		            'type'          : 'swf',
		            openEffect      : 'elastic',
				    closeEffect     : 'elastic',
				    helpers         : {
				    	media : {}
				    },
		            'swf'           : {
		            	'wmode'             : 'transparent',
		                'allowfullscreen'   : 'true'
		            }
		        });

		    return false;
		});
	};
}


function mobileNavToggler () {
	if ($('.mainmenu-holder').length) {
		$('.mainmenu-holder .nav-footer .menu-expander').click(function () {
			$('.mainmenu-holder .nav-header').toggleClass('closed opened');
			return false;
		});
		$('.mainmenu-holder .nav-header .navigation li.dropdown').children('a').append(function () {
			return '<button class="dropdown-expander"><i class="fa fa-bars"></i></button>';    			
		});
		$('.mainmenu-holder .nav-header .navigation .dropdown-expander').click(function () {
			var Self = $(this);
			Self.parent().parent().children('.submenu').toggleClass('closed opened');
			return false;
		});
	}
}

function contactFormValidation () {

	if($('.contact-form').length){
		$('.contact-form').validate({ // initialize the plugin
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				requirement: {
					required: true
				}
			},
			submitHandler: function (form) { 
				// sending value with ajax request
				$.post($(form).attr('action'), $(form).serialize(), function (response) {
					$(form).parent('div').append(response);
					$(form).find('input[type="text"]').val('');
					$(form).find('input[type="email"]').val('');
					$(form).find('textarea').val('');
				});
				return false;
			}
		});
	}
}

	// Fact Counter
	function CounterNumberChanger () {
	 var timer = $('.timer');
	 if(timer.length) {
	  timer.appear(function () {
	   timer.countTo();
	  })
	 }

	}


	//Testimonials One Column
	if ($('.testimonial-one-column').length) {
		$('.testimonial-one-column').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				940:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}



	//Testimonials One Column
	if ($('.testimonial-two-column').length) {
		$('.testimonial-two-column').owlCarousel({
			loop:true,
			margin:25,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				940:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});    		
	}
		//Testimonials One Column
    if ($('.logo_carousel').length) {
            $('.logo_carousel').owlCarousel({
                loop: true,
                margin: 30,
                dots: false,
                autoplay: true,
                autoplayTimeout: 1500,
                autoplaySpeed: 1000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                lazyLoad: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    400: {
                        items: 1
                    },
                    550: {
                        items: 1
                    },
                    1001: {
                        items: 1
                    }
                }
            })
        }



		//Testimonials One Column
    if ($('.logo_carousel1').length) {
            $('.logo_carousel1').owlCarousel({
                loop: true,
                margin: 30,
                dots: false,
                autoplay: true,
                autoplayTimeout: 1500,
                autoplaySpeed: 1000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                lazyLoad: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 1
                    },
                    1024: {
                        items: 2
                    },
                    1100: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            })
        }

        
				//Contact Form Validation
		if($('#contact_form').length){
			$("#contact_form").validate({
			    submitHandler: function(form) {
			      var form_btn = $(form).find('button[type="submit"]');
			      var form_result_div = '#form-result';
			      $(form_result_div).remove();
			      form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
			      var form_btn_old_msg = form_btn.html();
			      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
			      $(form).ajaxSubmit({
			        dataType:  'json',
			        success: function(data) {
			          if( data.status == 'true' ) {
			            $(form).find('.form-control').val('');
			          }
			          form_btn.prop('disabled', false).html(form_btn_old_msg);
			          $(form_result_div).html(data.message).fadeIn('slow');
			          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
			        }
			      });
			    }
			});
		}


	//Main BX-Slider
	if($('.testimonial-slide').length){
		$('.testimonial-slide').bxSlider({

			auto:true,
			mode:'vertical',
			nextSelector: '#slider-next',
			nextText: '',
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			maxSlides: 2,
			minSlides: 2,
			moveSlides: 1,
			pause: 5000,
			speed: 700,
			pager: false
		});
	}
	
//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').click(function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.click(function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();


	// Google Map Settings
	if($('#map-location').length){
		var map;
		 map = new GMaps({
			el: '#map-location',
			zoom: 14,
			scrollwheel:false,
			//Set Latitude and Longitude Here
			lat: -37.817085,
			lng: 144.955631
		  });
		  
		  //Add map Marker
		  map.addMarker({
			lat: -37.817085,
			lng: 144.955631,
			infoWindow: {
			  content: '<p style="text-align:center;"><strong>Envato</strong><br>Melbourne VIC 3000, Australia</p>'
			}
		 
		});
	}

	// 13. hiddenBarMenuConfig
function hiddenBarMenuConfig () {
	var menuWrap = $('.hidden-bar .main_menu');
	// appending expander button
	menuWrap.find('.dropdown').children('a').append(function () {
		return '<button type="button" class="btn expander"><i class="fa fa-chevron-down"></i></button>';
	});
	// hidding submenu 
	menuWrap.find('.dropdown').children('ul').hide();
	// toggling child ul
	menuWrap.find('.btn.expander').each(function () {
		$(this).click(function () {
			$(this).parent() // return parent of .btn.expander (a) 
				.parent() // return parent of a (li)
					.children('ul').slideToggle();

			// adding class to expander container
			$(this).parent().toggleClass('current');
			// toggling arrow of expander
			$(this).find('i').toggleClass('fa-chevron-up fa-chevron-down');
			

			return false;

		});
	});
}




// 15. hiddenBarToggler
function hiddenBarToggler () {
	if ($('.hidden-bar-closer').length) {
		$('.hidden-bar-closer').click(function () {
			$('.hidden-bar').css({
				'right': '-150%'
			});
		});
	};
	if ($('.hidden-bar-opener').length) {
		$('.hidden-bar-opener').click(function () {
			$('.hidden-bar').css({
				'right': '0%'
			});
		});
	};
}


	//Gallery Popup Hide / Show
	if($('.has-gallery-popup').length){
		
		//Show Gallery Popup
		$('.has-gallery-popup').click(function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('body').addClass('popup-visible');
			$(target).addClass('now-visible');
		});
		
		//Show Gallery Popup
		$('.gallery-box .btn-close,.gallery-box .bg-fade-layer').click(function() {
			$('.gallery-box').removeClass('now-visible');
			$('body').removeClass('popup-visible');
		});
		
	}
	
	
	//Gallery Popup Slider / Vertical Gallery Slider
	if($('.vertical-slider').length) {
		var slider = new MasterSlider();
		slider.setup('masterslider' , {
			width:850,
			height:470,
			space:10,
			view:'basic',
			dir:'v'
		});
		slider.control('arrows');	
		slider.control('scrollbar' , {dir:'v'});	
		slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
		slider.control('thumblist' , {autohide:false ,dir:'v'});
	}







// instance of fuction while Document ready event	
jQuery(document).ready(function () {
	(function ($) {
		revolutionSliderActiver();
		accrodion();
		selectMenu();		
		CounterNumberChanger();
		contactFormValidation();
		fleetGallery();
		GalleryFancyboxActivator();
		typed();
		mobileNavToggler();
		testimonialsCarosuleGardener();
		toolTip();
		singleFeaturedHover();
		languageSwitcher();
		relatedProjectCarosule();
		singleProjectCarousel();
		aboutCarousel();
		blogShareSlide();
		respnsiveVideo();
		testiWidgetCarousel();
		videoFancybox();
		contactFormValidation();
		enableMasonry();
		mainmenu ()
		hiddenBarMenuConfig ()
		hiddenBarToggler ()

	})(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).load(function () {
	(function ($) {
		clientCarousel();
		handlePreloader();
	})(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).scroll(function () {	
	(function ($) {
		stickyHeader();
		factCounter();
		scrollToTop();
	})(jQuery);
});
    