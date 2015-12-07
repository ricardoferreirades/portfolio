$(document).ready(function(){
	
	// Contact form validation
	$("#sendForm").validate();
	
	// navigation scroll
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 0
	    }, 900, 'swing');
	});

	// collapseble menu
	$("#navBars").click(function(){
		$(this).prop("disabled", true);
		$("#menu").slideToggle(1000, function(){
			$("#navBars").prop("disabled", false);
		});
	});

	// Hiding the menu when the page loads
	$("#menu").hide();

	// showing the menu when the window changes
	$(window).resize(function(){
	    if($(window).width() > 767){
	      $("#menu").show();
	    }else{
	      $("#menu").hide();
	    }
	});
});