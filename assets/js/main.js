$(document).ready(function(){
	
	// Contact form validation
	$("#sendForm").validate();
	
	// navigation scroll
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 55
	    }, 900, 'swing');
	});

	// collapseble menu
	$("#navBars").click(function(){
		$(this).prop("disabled", true);
		$("#menu").slideToggle(500, function(){
			$("#navBars").prop("disabled", false);
		});
	});

	// hiding the menu if the window width is less than 768px
	function hideMenu(){
		if ($(window).width() < 768) {
			$("#menu").hide();
			$(".menu-item").click(function(){
				$("#menu").slideUp();
			});
		}else{
			$("#menu").show();
		}
	}

	hideMenu();

	$(window).resize(function(){
		hideMenu();	
	});

	// showing menu
	$(window).on("scroll", function(){
		if($("body").scrollTop() > $(window).height()){
			$(".topBar").css({"top":"0", "opacity":"1"});
		}else{
			$(".topBar").css({'top':'-100px','opacity':'0'});
		}
	});
	

});