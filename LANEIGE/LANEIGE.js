$(function(){
	var timer;
	var index=0;
	function show(){
		$('.contenttop .banner>.tu').eq(index).css('display','block')
			.siblings().css('display','none');
		$('.contenttop .xiabiao>img').eq(index).attr('src','images/now.png')
		.siblings().attr('src','images/nonow.png');
		index++;
		if (index>2) {
			index=0;
		}
	}
	show();
	timer=setInterval(show,2000);

	$(".contenttop .aleft").bind('click',function(){
		clearInterval(timer);
		index--;
		if (index<0) {
			index=2;
		}
		$('.contenttop .banner>.tu').eq(index).css('display','block')
			.siblings().css('display','none');
		$('.contenttop .xiabiao>img').eq(index).attr('src','images/now.png')
		.siblings().attr('src','images/nonow.png');

		timer=setInterval(show,2000);
	});

	$(".contenttop .aright").bind('click',function(){
		clearInterval(timer);
		index++;
		if (index>2) {
			index=0;
		}
		$('.contenttop .banner>.tu').eq(index).css('display','block')
			.siblings().css('display','none');
		$('.contenttop .xiabiao>img').eq(index).attr('src','images/now.png')
		.siblings().attr('src','images/nonow.png');
		
		timer=setInterval(show,2000);
	});

	$('.contenttop .xiabiao>img').hover(function(){
		index=$(this).index();
		clearInterval(timer);
		$('.contenttop .banner>.tu').eq(index).css('display','block')
			.siblings().css('display','none');
		$('.contenttop .xiabiao>img').eq(index).attr('src','images/now.png')
		.siblings().attr('src','images/nonow.png');
	},function(){
		timer=setInterval(show,2000);
	});

	var now;
	$('.contentcenter .prox>.cpro>li').bind('click',function(){
		now=$(this).index();
		$(this).css('border','1px #ccc solid').siblings()
		.css('border','1px #fff solid');
		$('.contentcenter .product>.pro').eq(now).css('display','block')
			.siblings().css('display','none');
	});

	$('.top').bind('click',function(){
		$("body").animate({
			scrollTop: 0				
		},1000);
	})

}); 
