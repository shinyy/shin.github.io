$(function(){
	var nowDate=new Date(),//当天
		//nowYear=nowDate.getFullYear(),//当年
		//nowMonth=nowDate.getMonth()+1,//当月
		days=["周日","周一","周二","周三","周四","周五","周六"],
		everyMonthDays,//每月天数
		nowDateNum,
		nowDay;
		
		function calendar(){
		//循环输出日期
		for(var i=0;i<=13;i++){
			nowDateNum=nowDate.getDate();
			nowDay=nowDate.getDay()%7;
				if(nowDay==0||nowDay==5||nowDay==6){
					$("<td class='holiday'><p>"+(nowDateNum)+"</p><p>"+days[nowDay]+"</p></td>").appendTo(".calendar-date");
					}else{
						$("<td><p>"+(nowDateNum)+"</p><p>"+days[nowDay]+"</p></td>").appendTo(".calendar-date");
				};
			nowDate.setDate(nowDate.getDate()+1);
			$(".calendar-til").text(nowDate.getFullYear()+"年"+(nowDate.getMonth()+1)+"月");
			
			};
		//end
		};	
	calendar();
	
	var clickNum=1;	
	//右键
	$(".calendar-right-btn").click(function(){
		$(".calendar-date").children("td").remove();
			calendar();
			clickNum++;
		});
		
	//左键
	$(".calendar-left-btn").click(function(){
		$(".calendar-date").children("td").remove();
			nowDate.setDate(nowDate.getDate()-28);
			calendar();
			clickNum--;
		});
		
		
		
		var betweenN=[14,13,12,11,10,9,8,7,6,5,4,3,2,1];
		$(".calendar-date").on("click","td",function(){
				var d=nowDate;
				d.setDate(d.getDate()-betweenN[$(this).index()]);
				console.log(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate())
				$(".select-date").text(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate())
				//alert(nowDate.getFullYear()+"-"+(nowDate.getMonth()+1)+"-"+nowDate.getDate())
				nowDate=new Date();
				nowDate.setDate(nowDate.getDate()+14*clickNum);
				console.log(nowDate)
			});
	})