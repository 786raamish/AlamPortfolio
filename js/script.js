$(document).ready(function(){

$('#slides').superslides({

	animation: 'fade',
	play: 5000,
	pagination : false
});

	var typed = new Typed(".typed", {
		strings: ["Web Developer.", "Software Engineer.", "Tech Enthusiast.", "Student."],
		typeSpeed:70,
		loop: true,
		startDelay:1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	var skillsTopOffset = $(".skillsSection").offset().top; 

	$(window).scroll(function() {



		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){

			$('.chart').easyPieChart({
            easing:'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152, 
            onStep: function(from, to, percent){
            	$(this.el).find('.percent').text(Math.round(percent));
            }
        });
 
		}

	});


	$("counter").each(function(){
		var element = $(this);
		var endVal = parseInt(element.text());

		element.countup(endVal);
	})



});

	$("[data-fanybox]").fancybox();


	
	$(".items").isotope({
		filter:'*',
		animationOptions : {
			duration: 1500,
			easing: 'linear',
			queue: false
			
		}

    });



