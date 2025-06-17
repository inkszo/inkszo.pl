jQuery(document).ready(function(){	
	"use strict";
	var navLinks = jQuery('#primary-menu a');
	for ( var i=0; i<navLinks.length; i++ ) { navLinks[i].tabIndex = i; }

	jQuery('#site-navigation ul.menu').superfish();
	jQuery('.menu-item-has-children').not( jQuery( '.mobile-navigation .menu-item-has-children' ) ).superfish();
	jQuery('.menu-item-has-children').append('<a class="slide-down-arrow"></a>');
	jQuery('.menu-item-has-children .slide-down-arrow').on('click', function() {
		jQuery( jQuery(this).parent().find('ul.sub-menu')[0] ).slideToggle('300');
		jQuery( this ).toggleClass( 'rotated' );
		event.stopPropagation();
	});
	jQuery("#comely-mobile-menu").mmenu({ navbar: { add: false } });

	jQuery('#slider-full-posts').owlCarousel({
		singleItem:true,
		slideSpeed:600,
		navigation:true,
		navigationText:false,
		paginationSpeed:800,
		pagination:false,
	});
	jQuery("#slider-grid-posts").owlCarousel({ 
		navigation:true,
		navigationText:false,
		slideSpeed:300,
		paginationSpeed:400,
		pagination:false,
		items:3,
		itemsDesktop:false,
		itemsDesktopSmall:false,
		itemsTablet:[1024,2],
		itemsMobile:[550,1] 
	});
	jQuery("#related-posts-wrapper").owlCarousel({ 
		navigation:false,
		navigationText:false,
		slideSpeed:300,
		paginationSpeed:400,
		pagination:true,
		items:3,
		itemsDesktop:false,
		itemsDesktopSmall:false,
		itemsTablet:[1024,2],
		itemsMobile:[550,1] 
	});
	jQuery('.gallery-slider').owlCarousel({
		singleItem:true,
		slideSpeed:600,
		navigation:true,
		navigationText:false,
		paginationSpeed:800,
		pagination:false,
		autoHeight:true
	});
	jQuery('.gallery').owlCarousel({
		singleItem:true,
		slideSpeed:600,
		navigation:true,
		navigationText:false,
		paginationSpeed:800,	
		autoHeight:true
	});

	jQuery('.post').fitVids();

	jQuery('.gt-light-box .gallery').magnificPopup({ 
		type: 'image',
		delegate: 'a',
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				if ( item.img[0].alt ) { return '<small>' + item.img[0].alt + '</small>'; } else { return ' '; }
			}
		},
		gallery: {		
			enabled: true,
			preloader: true,
			markup: '<div class="mfp-figure">'+
			    '<div class="mfp-close"></div>'+
			    '<div class="mfp-img"></div>'+
			    '<div class="mfp-bottom-bar">'+
			      '<div class="mfp-title"></div>'+
			      '<div class="mfp-counter"></div>'+
			    '</div>'+
			  '</div>',
			cursor: 'mfp-zoom-out-cur',
			verticalFit: true,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
			tPrev: 'Previous (Left arrow key)', // title for left button
			tNext: 'Next (Right arrow key)', // title for right button
			tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
		}
	});
	jQuery('.gt-light-box .lightbox-link, .gt-light-box .lightbox').magnificPopup({ 
		type: 'image',
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				if ( item.el.attr('data-caption') ) { return '<small>' + item.el.attr('data-caption') + '</small>'; } else { return ' '; }
			}
		}		
	});
	jQuery('.expand-arrow').magnificPopup({ 
		type: 'image',
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				if ( item.el.attr('data-caption') ) { return '<small>' + item.el.attr('data-caption') + '</small>'; } else { return ' '; }
			}
		},
		gallery: {		
			enabled: true,
			preloader: true,
			markup: '<div class="mfp-figure">'+
			    '<div class="mfp-close"></div>'+
			    '<div class="mfp-img"></div>'+
			    '<div class="mfp-bottom-bar">'+
			      '<div class="mfp-title"></div>'+
			      '<div class="mfp-counter"></div>'+
			    '</div>'+
			  '</div>',
			cursor: 'mfp-zoom-out-cur',
			verticalFit: true,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
			tPrev: 'Previous (Left arrow key)', // title for left button
			tNext: 'Next (Right arrow key)', // title for right button
			tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
		}
	});

	jQuery('#main-search-form-trigger').on('click', function() {
		if( !( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ) {
			jQuery('#main-search-form').stop().fadeIn('fast').find('input[type="search"]').focus();
			jQuery('body').css('overflow','hidden');
		}else {
			jQuery('#main-search-form').stop().fadeIn('fast');
			jQuery('body').css('overflow','hidden');
		}		
	});
	jQuery('#main-close-btn').on('click', function() {
		jQuery('#main-search-form').stop().fadeOut('fast');		
		jQuery('body').css('overflow','auto');
	});	

	var offset = 300,
		scroll_top_duration = 700,
		goToTopBtn = jQuery('#goToTop');

	goToTopBtn.on('click', function(event){
		event.preventDefault();
		jQuery('body,html').animate({ scrollTop: 0 , }, scroll_top_duration );
	});

	jQuery(window).scroll(function() {
	    clearTimeout(jQuery.data(this, 'scrollTimer'));
	    jQuery.data(this, 'scrollTimer', setTimeout(function() {
	        if ( jQuery(this).scrollTop() > offset ) { goToTopBtn.fadeIn( 'slow' ); }
	        else { goToTopBtn.fadeOut( 'slow' ); } 	        
	    }, 700));
	});
	
});