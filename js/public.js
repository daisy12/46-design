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
}