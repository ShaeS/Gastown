// JavaScript Document

$(document).ready(
	function() {
		$("span.nav-btn").click(function() {
			$("ul.nav").slideToggle();
		}); 
		
		$(window).resize(function() {
			if ($(window).width() > 600 ) {
				$("ul.nav").removeAttr("style"); 	
			}
		});
		
		$(".all").click(function() {
		$(".1d").css("display","block");
		$(".2d").css("display","block");
		$(".3d").css("display","block");
		$(".none").css("display","none");
		$(".all").css("color","#c1bd53");
		$(".1").css("color","black");
		$(".2").css("color","black");
		$(".3").css("color","black");
		$(".4").css("color","black");
		$(".5").css("color","black");
		});
		
		
		$(".1").click(function() {
		$(".1d").css("display","block");
		$(".2d").css("display","none");
		$(".3d").css("display","none");
		$(".none").css("display","none");
		$(".all").css("color","black");
		$(".1").css("color","#c1bd53");
		$(".2").css("color","black");
		$(".3").css("color","black");
		$(".4").css("color","black");
		$(".5").css("color","black");
		});
		
		$(".2").click(function() {
		$(".1d").css("display","none");
		$(".2d").css("display","block");
		$(".3d").css("display","none");
		$(".none").css("display","none");
		$(".all").css("color","black");
		$(".1").css("color","black");
		$(".2").css("color","#c1bd53");
		$(".3").css("color","black");
		$(".4").css("color","black");
		$(".5").css("color","black");
		});
		
		$(".3").click(function() {
		$(".1d").css("display","none");
		$(".2d").css("display","none");
		$(".3d").css("display","block");
		$(".none").css("display","none");
		$(".all").css("color","black");
		$(".1").css("color","black");
		$(".2").css("color","black");
		$(".3").css("color","#c1bd53");
		$(".4").css("color","black");
		$(".5").css("color","black");
		});
		
		$(".4").click(function() {
		$(".1d").css("display","none");
		$(".2d").css("display","none");
		$(".3d").css("display","none");
		$(".none").css("display","block");
		$(".all").css("color","black");
		$(".1").css("color","black");
		$(".2").css("color","black");
		$(".3").css("color","black");
		$(".4").css("color","#c1bd53");
		$(".5").css("color","black");
		});
		
		$(".5").click(function() {
		$(".1d").css("display","none");
		$(".2d").css("display","none");
		$(".3d").css("display","none");
		$(".none").css("display","block");
		$(".all").css("color","black");
		$(".1").css("color","black");
		$(".2").css("color","black");
		$(".3").css("color","black");
		$(".4").css("color","black");
		$(".5").css("color","#c1bd53");
		});
		
		
		
		
		
		/*$(".all").hover(function(){
    	$(".all").css("color", "#c1bd53");
    	}, function(){
    	$(".all").css("color", "black");
		});
		
		$(".1").hover(function(){
    	$(".1").css("color", "#c1bd53");
    	}, function(){
    	$(".1").css("color", "black");
		});
		
		$(".2").hover(function(){
    	$(".2").css("color", "#c1bd53");
    	}, function(){
    	$(".2").css("color", "black");
		});
		
		$(".3").hover(function(){
    	$(".3").css("color", "#c1bd53");
    	}, function(){
    	$(".3").css("color", "black");
		});
		
		$(".4").hover(function(){
    	$(".4").css("color", "#c1bd53");
    	}, function(){
    	$(".4").css("color", "black");
		});
		
		$(".5").hover(function(){
    	$(".5").css("color", "#c1bd53");
    	}, function(){
    	$(".5").css("color", "black");
		});*/
		
		
		$(".all").hover(function(){
    	$(".all").css("cursor", "pointer");
    	});
		
		$(".1").hover(function(){
    	$(".1").css("cursor", "pointer");
    	});
		
		$(".2").hover(function(){
    	$(".2").css("cursor", "pointer");
    	});
		
		$(".3").hover(function(){
    	$(".3").css("cursor", "pointer");
    	});
		
		$(".4").hover(function(){
    	$(".4").css("cursor", "pointer");
    	});
		
		$(".5").hover(function(){
    	$(".5").css("cursor", "pointer");
    	});
	});
	