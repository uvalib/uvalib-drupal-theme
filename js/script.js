(function ($) {

	// Handle Toggle of Mobile Navigation and Search Bar
	$('#mobile-menu').click(function(){
		$('#zone-menu-wrapper').toggle();
		if ($('#zone-branding-wrapper').hasClass('expanded-menu')) {
			$('#zone-branding-wrapper').removeClass('expanded-menu');
			// $('#zone-user-wrapper').removeClass('expanded-menu');
		}else {
			if($('#region-user-second').hasClass('search-close')) {
				$('#zone-search').slideToggle("fast");
				$('#region-user-second').toggleClass("search-close");
				$('#search-toggle-button').toggleClass("search-close-button");
			}
			$('#zone-branding-wrapper').addClass('expanded-menu');
			// $('#zone-user-wrapper').addClass('expanded-menu');
		}
	});

	$('#mobile-menu').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#mobile-menu').click();//Trigger search button click event
        }
    });

	// Toggle Search Bar and Button
	$('#search-toggle-button').click(function(){
		if ($('#zone-user-wrapper').hasClass('expanded-menu')) {
			$('#zone-branding-wrapper').removeClass('expanded-menu');
			$('#zone-user-wrapper').removeClass('expanded-menu');
			$('#zone-search').slideToggle("fast");
			$('#region-user-second').toggleClass("search-close");
			$(this).toggleClass("search-close-button");
		}else{
			$('#zone-user-wrapper').addClass('expanded-menu');
			$('#zone-search').slideToggle("fast");
			$('#zone-menu-wrapper').hide();
			$('#zone-search .form-text').focus();
			$('#region-user-second').toggleClass("search-close");
			$(this).toggleClass("search-close-button");
			if($(this).attr('aria-expanded') == 'true'){
				$(this).attr('aria-expanded','false').attr('aria-pressed','false');
			}else{
				$(this).attr('aria-expanded','true').attr('aria-pressed','true');
			}
		}
	});

	$('#search-toggle-button').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#search-toggle-button').click();//Trigger search button click event
        }
    });

	// Sidebar Subnav Mobile
	$('#zone-content-wrapper #zone-content #region-sidebar-first h2').click(function(){
		if($( window ).width() < 980){
			if ($('#zone-content-wrapper #zone-content #region-sidebar-first h2').hasClass('expanded-secondary-menu')) {
				$('#zone-content-wrapper #zone-content #region-sidebar-first .menu-block-wrapper').toggle();
				$('#zone-content-wrapper #zone-content #region-sidebar-first h2').removeClass('expanded-secondary-menu');
			}else{
				$('#zone-content-wrapper #zone-content #region-sidebar-first .menu-block-wrapper').toggle();
				$('#zone-content-wrapper #zone-content #region-sidebar-first h2').addClass('expanded-secondary-menu');
			}
		}
	});

	$('#zone-content-wrapper #zone-content #region-sidebar-first h2').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#zone-content-wrapper #zone-content #region-sidebar-first h2').click();//Trigger search button click event
        }
    });

	// Mobile Navigation Accordian
	$('#block-menu-block-1 ul li.expanded').find("li.active-trail").parent().toggle(function(){$(this).parent().addClass('expanded-mobile-menu');});
	$('#block-menu-block-1 ul li.expanded').click(function(){
		$(this).find("ul:first").slideToggle();
		if ($(this).hasClass('expanded-mobile-menu')) {
			$(this).removeClass('expanded-mobile-menu');
		}else{
			$(this).addClass('expanded-mobile-menu');
		}
	}).children().click(function(e){e.stopPropagation();});

	$('#block-menu-block-1 ul li.expanded a').focus(function() {
		$(this).parent().click();
	})

	//Click event to scroll to top
	$('#toTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		$('#main-content').focus();
		return false;
	});
	$('#toTop').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#toTop').click();//Trigger search button click event
        }
    });

	//Toggle toTop based on scroll position
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	//Smooth Scroll
	$('a[href*=#]:not([href=#])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      		if (target.length) {
        		$('html,body').animate({
          			scrollTop: target.offset().top
        		}, 1000);
        	return false;
      		}
    	}
  	});

  	// Views Ajax reload
  	$('#block-views-content-types-block .views-row').each(function() {
  		$(this).on('click', function(e){
  		  var value = $(this).find('a').attr('href');
  		  $('#block-views-content-types-block .views-row').each(function(){
  		  	if($(this).hasClass('active')){
  		  		if($(this).find('a').attr('href') != value){
  		  			$(this).removeClass('active');
  		  			$(this).find('a').attr('aria-pressed','false');
  		  		}
  		  	}
  		  });
  		  $(this).toggleClass('active');
  		  if($(this).find('a').attr('aria-pressed') == 'false'){
  		  		$(this).find('a').attr('aria-pressed','true');
  		  }else{
  		  		$(this).find('a').attr('aria-pressed','false');
  		  }
	      if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
	      	for (var viewName in Drupal.settings.views.ajaxViews){
	      		var viewSettings = Drupal.settings.views.ajaxViews[viewName];
	      		if(Drupal.settings.views.ajaxViews[viewName].view_args == value){
	      			Drupal.settings.views.ajaxViews[viewName].view_args = "All";
	      		}else{
	      			Drupal.settings.views.ajaxViews[viewName].view_args = value;
	      		}
	      	}
	      	$('.view-id-content').trigger("RefreshView");
	      	$("html, body").animate({ scrollTop: $('#block-views-content-types-block').offset().top }, 1000);
		  }
	      e.preventDefault();
	    });
  	});
// Views Ajax reload
  	$('#block-views-content-types-block-1 .views-row').each(function() {
  		$(this).on('click', function(e){
  		  var value = $(this).find('a').attr('href');
  		  $('#block-views-content-types-block-1 .views-row').each(function(){
  		  	if($(this).hasClass('active')){
  		  		if($(this).find('a').attr('href') != value){
  		  			$(this).removeClass('active');
  		  			$(this).find('a').attr('aria-pressed','false');
  		  		}
  		  	}
  		  });
  		  $(this).toggleClass('active');
  		  if($(this).find('a').attr('aria-pressed') == 'false'){
  		  		$(this).find('a').attr('aria-pressed','true');
  		  }else{
  		  		$(this).find('a').attr('aria-pressed','false');
  		  }
	      if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
	      	for (var viewName in Drupal.settings.views.ajaxViews){
	      		var viewSettings = Drupal.settings.views.ajaxViews[viewName];
	      		if(Drupal.settings.views.ajaxViews[viewName].view_args == value){
	      			Drupal.settings.views.ajaxViews[viewName].view_args = "All";
	      		}else{
	      			Drupal.settings.views.ajaxViews[viewName].view_args = value;
	      		}
	      	}
	      	$('.view-id-content').trigger("RefreshView");
	      	$("html, body").animate({ scrollTop: $('#block-views-content-types-block-1').offset().top }, 1000);
		  }
	      e.preventDefault();
	    });
  	});

	$(document).ready(function() {
		$('.slick-slider').each(function() {
			$(this).parent().hover(function() {
				//$(this).children('.slick__arrow').toggle();
			});
		});

		$('#zone-content-wrapper #zone-content #region-sidebar-first h2').attr("role","button").attr("tabindex","0");

	});

	function buildMasonry(theObject){
		theObject.imagesLoaded(function() {
		theObject.masonry({
		  itemSelector: '.views-row',
		});
	});
	}

	buildMasonry($('body.front #block-views-content-block-1 .view-content'));
	buildMasonry($('body.page-search #block-system-main .view-content'));
	buildMasonry($('body.page-people #block-system-main .view-content'));
	buildMasonry($('body.page-tools #block-system-main .view-content'));
	buildMasonry($('body.page-projects #block-system-main .view-content'));
	buildMasonry($('body.page-organizations #block-system-main .view-content'));
	buildMasonry($('body.page-resources #block-system-main .view-content'));


	$(document).ajaxComplete(function(event, xhr, settings) {
		buildMasonry($('body.front #block-views-content-block-1 .view-content'));
		buildMasonry($('body.page-search #block-system-main .view-content'));
		buildMasonry($('body.page-people #block-system-main .view-content'));
		buildMasonry($('body.page-tools #block-system-main .view-content'));
		buildMasonry($('body.page-projects #block-system-main .view-content'));
		buildMasonry($('body.page-organizations #block-system-main .view-content'));
		buildMasonry($('body.page-resources #block-system-main .view-content'));
	});
/***
Events Calendar Potential Fix
	$(document).ready(function(){
		$('.not-logged-in .fc-event-title').each(function(){
			var startText = $(this).text();
			var lastThree = startText.substr(-3);
			var newString = startText.substr(0, startText.length-3);

			if (lastThree == '- Y' || lastThree == '- N'){
				$(this).text(newString)
			}

			if(lastThree == '- Y'){
				$(this).hide();
			}
		});
	})
***/
}(jQuery));