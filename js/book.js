window.onload=function(){
	var item_1=document.querySelector('.nav .item:nth-of-type(1)');
	var sub_nav=item_1.getElementsByClassName('sub_nav')[0];
	var item_a=item_1.getElementsByTagName('a')[0];
	var timer=null;

	item_a.onmouseover=function(){
		clearTimeout(timer);
		//sub_nav.style.display="block";
		move1(sub_nav,{"height":244})
	}
	sub_nav.onmouseover=function(){
			clearTimeout(timer);
			//sub_nav.style.display="block";
			move1(sub_nav,{"height":244})
		}	
	sub_nav.onmouseout=function(){
		//sub_nav.style.display="none";
		move1(sub_nav,{"height":0})
	}	
	item_a.onmouseout=function(){
		timer=setTimeout(function(){
			//sub_nav.style.display="none";
			move1(sub_nav,{"height":0})
		},500)
	}
	
	var content_title=document.getElementsByClassName('content_title')[0];
	var a_link=content_title.getElementsByTagName('a')[0];
	a_link.onmouseover=function(){
		//alert(1)
		this.style.backgroundColor="#e83a37";
		move(this,{'width':102});
	}
	a_link.onmouseout=function(){
		this.style.backgroundColor="#8E9395";
		move(this,{'width':84});
	}

	var timer=null;
	var return_top=document.getElementsByClassName('return_top')[0];
 	return_top.onclick=function(){
 		var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
 		timer=setInterval(function(){
 			if(document.body.scrollTop){
 				document.body.scrollTop-=100;
 				if(document.body.scrollTop==0){
 					clearInterval(timer);
 				}
 			}else{
 				document.documentElement.scrollTop-=100;
 				if(document.documentElement.scrollTop==0){
 					clearInterval(timer);
 				}
 			}
 		},30)
 	}
}