
	
$(function(){
	
	$(".toggle-card").children("li").on("click",function(){
		var indexNum=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".order-card").eq(indexNum).addClass("cur").siblings().removeClass("cur");
		});
	//选择酒店
	/*$(".select-show").click(function(){
		$(".select-slide").toggle();
		});*/
	//订单状态
	$(".order-table").find(".check").on("click",function(){
		$(this).toggleClass("cur");
		});
	//订单详情
	$(".order-num,.add-acc").on("click",function(){
		$(".shadow").show();
		});
	$(".close").click(function(){
		$(".shadow").hide();
		});
	//OTA管理
	$(".open-btn").on("click",function(){
		//$(".ota-toggle").show();
		$(".all-nav").hide();
		$(".order-cnontent.no-border").show();
		$(this).parents(".content").addClass("sp");
		$(this).parents(".order-cnontent").hide();
		$(".top").hide();
		$(".small-all-nav").show();
	});
	$(".small-all-nav").click(function(){
		//$(".ota-toggle").hide();
		$(".all-nav").show();
		$(".order-cnontent.no-border").hide().siblings(".order-cnontent").show();
		$(".content.sp").removeClass("sp");
		$(this).parents(".order-cnontent").hide();
		$(".top").show();
		$(this).hide();
		});
	//房价房态
	
		$(".rooms-sp-tb").find("tr").children("td").on("mouseenter",function(){
			var touchIndex=$(this).index()-1,
				touchLine=$(this).parent("tr").index();
			$(this).prevAll().addClass("hover");
			$(".calendar-date").children("td").eq(touchIndex).addClass("hover");
			for(var i=0;i<touchLine;i++){
				$(".rooms-sp-tb").find("tr").eq(i).children("td").eq(touchIndex).addClass("hover");
				};
			}).on("mouseleave",function(){
				$(".hover").removeClass("hover");
			}).on("click",function(){
					
					//模拟相应的日期点击
					$(".calendar-date").children("td").eq($(this).index()-1).click();
					//end
					$(".alert-box").hide();
					if($(this).parents("tr").hasClass("x-pay")){
						$(".alert-box.x-pay").show();
						}else{
							$(".alert-box.y-pay").show();
							};
			
					});
		$(".alert-box").children(".close").click(function(){
			$(this).parent().hide();
			});
				
	//筛选房型
	$(".shin-select-copy").click(function(){
		$(this).children(".shin-select-slide").toggle();
		});
	//日期浮动
	$(window).scroll(function(){
		if($(window).scrollTop()>=$(".rooms-sp-block").offset().top-10){
			$(".calendar-block").addClass("sp").css("width",$(".rooms-sp-block").width());
			$(".rooms-sp-block").addClass("sp");
			}else{
				$(".calendar-block").removeClass("sp");
				$(".rooms-sp-block").removeClass("sp");
				};
		});
	//价格模式
	$(".select-room-state").find("label").on("click",function(){
		$(".price-type-tb").addClass("vis");
		switch($(this).index()){
			case 0:
			$(".price-type-tb").find("td").eq(0).removeClass("hide");
			$(".price-type-tb").find("td").eq(1).addClass("hide");
			$(".price-type-tb").find("td").eq(2).removeClass("hide");
			$(".price-type-tb").find("td").eq(3).addClass("hide");
			break;
			case 1:
			$(".price-type-tb").find("td").eq(0).removeClass("hide");
			$(".price-type-tb").find("td").eq(1).removeClass("hide");
			$(".price-type-tb").find("td").eq(2).addClass("hide");
			$(".price-type-tb").find("td").eq(3).removeClass("hide");
			break;
			case 2:
			$(".price-type-tb").find("td").eq(0).addClass("hide");
			$(".price-type-tb").find("td").eq(1).removeClass("hide");
			$(".price-type-tb").find("td").eq(2).removeClass("hide");
			$(".price-type-tb").find("td").eq(3).removeClass("hide");
			};
		});
		//切换酒店
		$(".select-show").click(function(e){
			$(".select-slide").toggle();
			 e.stopPropagation();
			});
		$(".select-slide").find("li").on("click",function(){
			var selectShow=$(this).children("a").text();
			$(".select-now").text(selectShow);
			});
		$("body").click(function(){
				$(".select-slide").hide();
			})
	})