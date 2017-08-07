$(function(){
	// 头部菜单切换城市处效果
	var zhandian;
	$('header .mfont2').click(function(){
		$('header .change').show();
	})
	$('header .cuohao').click(function(){
		$(this).parents('header .change').hide();
	})
	$('header .all').click(function(){
		zhandian=$(this).html();
		console.log(zhandian);
		$(this).parents('header .change').hide();
		$('header .mfont1').html(zhandian);
	})
	$('header .otherzhan1>div').click(function(){
		zhandian=$(this).html();
		$(this).parents('header .change').hide();
		console.log(zhandian);
		$('header .mfont1').html(zhandian);
	});
	$('header .otherzhan2>div').click(function(){
		zhandian=$(this).html();
		$(this).parents('header .change').hide();
		console.log(zhandian);
		$('header .mfont1').html(zhandian);
	});

	// 搜索框处的效果
	$('.righttop .txt').focus(function(){
		$('.righttop .txt').attr('placeholder','搜索公司、职位或地点');
	});

	$('.righttop .txt').blur(function(){
		$('.righttop .txt').attr('placeholder','全民升职季');
	});

	// banner图处轮播的效果
	var timer;
	var index=1;
	function create(){
		var step=0;
		timer=setInterval(function(){
			//显示5张图片，只要移动4次即可，所以判断3张图片的高度
			if(step>165){
				step=330;
				if(step<0){
					create1();
				}else{
					step-=330;
				}
				$('.righttop .leftbanner').animate({top:"-"+step+"px"},200);
				$('.righttop .rightbanner>img').eq(index).css('opacity','1').css('border','4px #77D3BE solid')
				.siblings().css('opacity','0.75').css('border','4px #D3D3D3 solid');
				$('.righttop .rightsanjia>div').eq(index).css('display','block')
				.siblings().css('display','none');
			}else{
				step+=165;
			}
			$('.righttop .leftbanner').animate({top:"-"+step+"px"},400);
			$('.righttop .rightbanner>img').eq(index).css('opacity','1').css('border','4px #77D3BE solid')
			.siblings().css('opacity','0.75').css('border','4px #D3D3D3 solid');
			$('.righttop .rightsanjia>div').eq(index).css('display','block')
			.siblings().css('display','none');
			index++;
			if(index>2){
				index=0;
			}
		},2400);
	}
	create();

	// 热门职位和最新职位的交换效果
	var n;
	$('.rightbottom .zhiwei>div').click(function(){
		n=$(this).index();
		$(this).css('border-top','2px #00B38A solid').css('background','#fff').css('color','#000')
		.siblings().css('border-top','2px #F6F6F6 solid').css('background','#F6F6F6').css('color','#999');
		$('.zwcontent>.zwul').eq(n).css('display','block').siblings().css('display','none');
	});

	// 固定导航条处的效果
	$(window).scroll(function(){
		var height = $(window).height();
		console.log(height);
		var h = $(".footertop").height();
		var hh = height-h;
		var scrolltop=$(this).scrollTop();
		if(scrolltop>2400){
			$(".footertop").css({
				position:"relative",
				top:'2758px'
			});	
			$(".raside").css({
				top:'310px'
			});
		}else{
			$(".footertop").css({
				position:"fixed",
				top:hh+'px'
			});
			$(".raside").css({
				top:'380px'
			});
		}

		if(scrolltop>0){
			$(".raside .rad1").css('visibility','visible');
		}else{
			$(".raside .rad1").css('visibility','hidden');
		}
	})

});