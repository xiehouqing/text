   var b1=b2=true;  //判定灯是否损坏
	var startbool=false;  //判定点击开始还是暂停
	var count=1;  //用于切换图片的计数
	var timer=null;  //设置定时器
    var begintime=true;  //判定开始键是否多按
	var endtime=true;    //判定结束键是否多按
    var time1=0,time2=0;
	var button=$('.button_item');
	var error=$('.is_error_item');
	var imgs=$('.pict');

   $(function(){
	
	button.eq(0).on('click',function(){
	if(begintime)
	 {
		begintime=false;
		endtime=true;
		button.removeClass('highlight').eq(0).addClass("highlight");
		startbool=true;
	  }
	    result(time1,time2,b1,b2);
		 return false;
	})
	    
	button.eq(1).on('click',function(){
		if(startbool&&b1&&b2){time1++;}
		else  {time1=0;}
		result(time1,time2,b1,b2);
		return false;
	});
		
			
	
	button.eq(2).on('click',function(){
		if(startbool&&b1&&b2){time2++;}
		else  {time2=0;}
	    result(time1,time2,b1,b2);
		return false;
	});	

	button.eq(3).on('click',function(){
	if(endtime){
		begintime=true;
		endtime=false;	
		button.removeClass('highlight').eq(3).addClass("highlight");
		startbool=false;
		time1=time2=0;
		result(time1,time2,b1,b2);
		}
	});
	error.eq(3).on('click',function(){
		error.removeClass('highlight').eq(3).addClass("highlight");
		error.eq(0).addClass('highlight');
		time1=time2=0;
		b2=false;
		result(time1,time2,b1,b2);
	})
	error.eq(1).on('click',function(){
		error.removeClass('highlight').eq(1).addClass('highlight');
		error.eq(2).addClass('highlight');
		time1=time2=0;
		b1=false;
		result(time1,time2,b1,b2);
		})
	error.eq(2).on('click',function(){
		error.removeClass('highlight').eq(0).addClass('highlight');
		error.eq(2).addClass('highlight');
		time1=time2=0;
		b1=b2=true;
		result(time1,time2,b1,b2);
		})
	error.eq(0).on('click',function(){
		error.removeClass('highlight').eq(0).addClass('highlight');
		error.eq(2).addClass('highlight');
		b1=b2=true;
		time1=time2=0;
		result(time1,time2,b1,b2);
		})
		
   })
   
  function result(time1,time2,b1,b2){
	  clearInterval(timer); //清除定时
	  changetime(time1,time2); //改变点击的次数
	  if(b1===true&&b2===true){
		  if(time1!==0||time2!=0){
			   if(time1>time2){  
			      imgs.eq(1).attr('src','img/bg1.png');
				  imgs.eq(0).attr('src','img/bg2.png');
				  }
			   else{  
			       imgs.eq(0).attr('src','img/bg1.png');
				   imgs.eq(1).attr('src','img/bg2.png');
			      }
		  }
		  else{
			   imgs.eq(0).attr('src','img/bg1.png');
			   imgs.eq(1).attr('src','img/bg1.png');
		  }
	  }
	  else if((b1===true&&b2==false)||(b1==false&&b2==true)){
		   if(startbool===true)
		     {
				 if(b1===true){ imgs.eq(0).on(swpic(0));  imgs.eq(1).attr('src','img/bg1.png');}
				 if(b2===true){ imgs.eq(1).on(swpic(1));  imgs.eq(0).attr('src','img/bg1.png');}
			 }
			 if(startbool===false)
			 {
				 imgs.eq(0).attr('src','img/bg1.png');
				 imgs.eq(1).attr('src','img/bg1.png');
			 }
		  
		 
	  }
		  
		
	
  }
	
	
//切换图片
function swpic(index){
	
	timer=setInterval(function(){
	imgs.eq(index).attr('src','img/bg'+(count%2+1)+'.png');
	
	count++;},2000);
	
}


//改变被点击的次数
function changetime(time1,time2){
	var ui=$('span');
	ui.get([0]).innerHTML=time1;
	ui.get([1]).innerHTML=time2;
}
	
	

	

