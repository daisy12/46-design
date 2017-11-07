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
	
	var input_wrap=document.getElementsByClassName('input_wrap')[0];
	var btn=input_wrap.getElementsByClassName('submit')[0];

	btn.onmouseover=function(){
		this.style.background="#e83837";
		this.style.border="1px solid #fff";
		this.style.color="#fff";
	}
	btn.onmouseout=function(){
		this.style.background="#f5f5f5";
		this.style.border="none";
		this.style.color="#555";
	}

	

	var input_icon=document.getElementsByClassName('input_icon')[0];
	var input_icon_ul=input_icon.getElementsByTagName('ul')[0];

	var nav_top=document.getElementsByClassName('nav_top')[0];
	var nav_top_btn=nav_top.getElementsByTagName('input');
	var input_icon=document.getElementsByClassName('input_icon')[0];

	var input_wrap=document.getElementsByClassName('input_wrap')[0];
	var submit=input_wrap.getElementsByClassName('submit')[0];

	var ckeck=null;
	var timer=null;
	var current=null;
	//搜索框效果一：
	/*for(var i=0;i<nav_top_btn.length-1;i++){
		nav_top_btn[i].index=i;
		nav_top_btn[i].onclick=function(){
			input_icon.style.height=0;
			switch(this.index){
				case 0:input_icon.style.backgroundPosition="-1px -4px"
					move(input_icon,{'height':30});break;
				case 1:input_icon.style.backgroundPosition="-1px -42px";
					move(input_icon,{'height':30});break;
				case 2:input_icon.style.backgroundPosition="-1px -83px";
					move(input_icon,{'height':30});break;
				case 3:input_icon.style.backgroundPosition="-1px -126px";
					move(input_icon,{'height':30});break;
				case 4:input_icon.style.backgroundPosition="-1px -170px";
					move(input_icon,{'height':30});break;
				case 5:input_icon.style.backgroundPosition="-1px -218px";
					move(input_icon,{'height':30});break;
				case 6:input_icon.style.backgroundPosition="-1px -262px";
					move(input_icon,{'height':30});break;
				case 7:input_icon.style.backgroundPosition="-0px -309px";
					move(input_icon,{'height':30});break;
				case 8:input_icon.style.backgroundPosition="-1px -355px";
					move(input_icon,{'height':30});break;
				case 9:input_icon.style.backgroundPosition="-1px -405px";
					move(input_icon,{'height':30});break;
				case 10:input_icon.style.backgroundPosition="-1px -466px";
					move(input_icon,{'height':30});break;
				
				default:break;
			}
		 		 
		}
	}*/

	//搜索框图标效果
	for(var i=0;i<nav_top_btn.length;i++){
		nav_top_btn[i].index=i;
		nav_top_btn[i].onclick=function(){
			clearInterval(timer);
			switch(this.index){
				case 0:change_back(-42);
					submit.innerText="花瓣一下";
					break;
				case 1:change_back(-83);
					submit.innerText="图标一下";
					break;
				case 2:change_back(-4);
					submit.innerText="百度一下";
					break;
				case 3:change_back(-218);
					submit.innerText="百度一下";
					break;
				case 4:change_back(-355);
					submit.innerText="标识一下";
					break;
				case 5:change_back(-405);
					submit.innerText="艺术一下";
					break;
				case 6:change_back(-126);
					submit.innerText="代码一下";
					break;
				case 7:change_back(-170);
					submit.innerText="站酷一下";
					break;
				case 8:change_back(-466);
					submit.innerText="68作品一下";
					break;
				case 9:change_back(-262);
					submit.innerText="Behance一下";
					break;
				case 10:change_back(-309);
					submit.innerText="Dribbble一下";
					break;	
				default:break;
			}
		 		 
		}
	}
	function change_back(iTarget){
		if(iTarget>current){
			var speed=30;
		}else{
			var speed=-30;
		}

		timer=setInterval(function(){
			current=current+speed;
			if(Math.abs(current-iTarget)<Math.abs(speed)){
				input_icon.style.backgroundPosition="-0px "+iTarget+"px";
				clearInterval(timer);
			}else{
				input_icon.style.backgroundPosition="-0px "+current+"px";
			}
			
		},30)	
	}

	//信息提示效果
	 
	var a_link=document.getElementsByClassName('a_link');

	for(var i=0;i<a_link.length;i++){
		a_link[i].index=i;
		a_link[i].onmouseover=function(){
			//alert(this.parentNode.children[0]);
			if(this.index==0){

				this.parentNode.children[3].style.display="block";

				move1(this.parentNode.children[3],{'height':36});
				move1(this.parentNode.children[3],{'width':170})
				this.onmousemove=function(ev){
					var e=ev||window.event;
					var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
					
					var x=e.clientX-this.parentNode.offsetLeft;
					var y=e.clientY-this.parentNode.offsetTop+scrollH;
					this.parentNode.children[3].style.left=x+10+"px";
					this.parentNode.children[3].style.top=y+10+"px";
				}
			}else{
				this.parentNode.children[2].style.display="block";

				move1(this.parentNode.children[2],{'height':36});
				move1(this.parentNode.children[2],{'width':170})
				this.onmousemove=function(ev){
					var e=ev||window.event;
					var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
					
					var x=e.clientX-this.parentNode.offsetLeft;
					var y=e.clientY-this.parentNode.offsetTop+scrollH;
					this.parentNode.children[2].style.left=x+10+"px";
					this.parentNode.children[2].style.top=y+10+"px";
				}
			}
			
		}
		a_link[i].onmouseout=function(){
			if(this.index==0){
				this.parentNode.children[3].style.display="none";
				move1(this.parentNode.children[3],{'height':0});
				move1(this.parentNode.children[3],{'width':0})
			}else{
				this.parentNode.children[2].style.display="none";
				move1(this.parentNode.children[2],{'height':0});
				move1(this.parentNode.children[2],{'width':0})
			}
			
		}
	}

	var describe=document.getElementsByClassName('describe');
	for(var i=0;i<describe.length;i++){
		var describe_p=describe[i].getElementsByTagName('p');
	
		for(var j=0;j<describe_p.length;j++){
			describe_p[j].index=i;
			describe_p[j].onmouseover=function(){
				
				if(this.index==0){

					this.parentNode.parentNode.children[3].style.display="block";
					move1(this.parentNode.parentNode.children[3],{'height':36});
					move1(this.parentNode.parentNode.children[3],{'width':170})
					this.onmousemove=function(ev){
						var e=ev||window.event;
						var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
						
						var x=e.clientX-this.parentNode.parentNode.offsetLeft;
						var y=e.clientY-this.parentNode.parentNode.offsetTop+scrollH;
						this.parentNode.parentNode.children[3].style.left=x+10+"px";
						this.parentNode.parentNode.children[3].style.top=y+10+"px";
					}
				}else{
					this.parentNode.parentNode.children[2].style.display="block";
				 
					move1(this.parentNode.parentNode.children[2],{'height':36});
					move1(this.parentNode.parentNode.children[2],{'width':170})

					this.onmousemove=function(ev){
						var e=ev||window.event;
						var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
						
						var x=e.clientX-this.parentNode.parentNode.offsetLeft;
						var y=e.clientY-this.parentNode.parentNode.offsetTop+scrollH;
						this.parentNode.parentNode.children[2].style.left=x+10+"px";
						this.parentNode.parentNode.children[2].style.top=y+10+"px";
					}
				}
			}
			describe_p[j].onmouseout=function(){
				if(this.index==0){
					this.parentNode.parentNode.children[3].style.display="none";
					move1(this.parentNode.parentNode.children[3],{'height':0});
					move1(this.parentNode.parentNode.children[3],{'width':0})
				}else{
					this.parentNode.parentNode.children[2].style.display="none";
					move1(this.parentNode.parentNode.children[2],{'height':0});
					move1(this.parentNode.parentNode.children[2],{'width':0})
				}
			}
		}
	}
	 
	function describe_show(obj){
		detail.style.display="block";
		move1(detail,{'height':36});
		move1(detail,{'width':170})
		obj.onmousemove=function(ev){
			var e=ev||window.event;
			var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
			
			var x=e.clientX-share.offsetLeft;
			var y=e.clientY-share.offsetTop+scrollH;
			detail.style.left=x+10+"px";
			detail.style.top=y+10+"px";
		}
	}

	 
	



	/*法二：实现圆角
	var item=document.getElementsByClassName('item');
	for(var i=0;i<item.length;i++){
	
		item[i].onmouseover=function(){
			clearInterval(this.timer);
			var title=this.getElementsByClassName('title')[0];
			
			//alert(temp)
			this.timer=setInterval(function(){
				if(getStyle(title,'borderRadius')=="0px"){
					var temp=parseInt(getStyle(title,'borderRadius'));
				}else{
					var temp=parseInt(getStyle(title,'borderRadius').substring(4));
				}
				
				temp=temp-1;
				if(temp<0){
					title.style.borderRadius="0px 0px 0px 0px";
					clearInterval(this.timer);
					console.log(temp);
					return;

				}else{
					title.style.borderRadius="0px "+temp+"px 0px 0px";
					//console.log(temp);
					//console.log(getStyle(title,'borderRadius'))
				}

			},30)
		}
		item[i].onmouseout=function(){
			clearInterval(this.timer)
			var title=this.getElementsByClassName('title')[0];

			 
		
			this.timer=setInterval(function(){
				if(getStyle(title,'borderRadius')=="0px"){
					var temp=parseInt(getStyle(title,'borderRadius'));
				}else{
					var temp=parseInt(getStyle(title,'borderRadius').substring(4));
				}
				
				temp=temp+1;
				if(temp>=40){
					title.style.borderRadius="0px 40px 0px 0px";
					clearInterval(this.timer);
				}else{
					title.style.borderRadius="0px "+temp+"px 0px 0px";
					//console.log(temp)
				}
			},30)
		}
	}
*/
	var site_cen=document.getElementsByClassName('site_cen')[0];
	var tigs=site_cen.getElementsByClassName('tig');
	var materialfirst=document.getElementsByClassName('materialfirst')[0];
	var material_cen=materialfirst.getElementsByClassName('material_cen')[0];
	var tigs1=material_cen.getElementsByClassName('tig');

	var iconnext=document.getElementsByClassName('iconnext')[0];
	var material_cen1=iconnext.getElementsByClassName('material_cen')[0];
	var tigs2=material_cen1.getElementsByClassName('tig');

	site_cen.onmouseover=function(){
		for(var i=0;i<tigs.length;i++){
			tigs[i].style.display="block";
		}
	}
	site_cen.onmouseout=function(){
		for(var i=0;i<tigs.length;i++){
			tigs[i].style.display="none";
		}
	}

	material_cen.onmouseover=function(){
		//alert(1)
		for(var i=0;i<tigs1.length;i++){
			tigs1[i].style.display="block";
		}
	}
	material_cen.onmouseout=function(){
		//alert(1)
		for(var i=0;i<tigs1.length;i++){
			tigs1[i].style.display="none";
		}
	}
	material_cen1.onmouseover=function(){
		//alert(1)
		for(var i=0;i<tigs2.length;i++){
			tigs2[i].style.display="block";
		}
	}
	material_cen1.onmouseout=function(){
		//alert(1)
		for(var i=0;i<tigs2.length;i++){
			tigs2[i].style.display="none";
		}
	}

	for(var i=0;i<tigs.length;i++){
		tigs[i].onmouseover=function(){
			
				this.style.opacity="1";
				this.parentNode.children[3].style.display="block";
				move1(this.parentNode.children[3],{'height':36});
				move1(this.parentNode.children[3],{'width':170})
				this.onmousemove=function(ev){
					var e=ev||window.event;
					var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
					
					var x=e.clientX-this.parentNode.offsetLeft;
					var y=e.clientY-this.parentNode.offsetTop+scrollH;
					this.parentNode.children[3].style.left=x+10+"px";
					this.parentNode.children[3].style.top=y+10+"px";
				}
			
		}
		tigs[i].onmouseout=function(){
			this.style.opacity="0.5";
			this.parentNode.children[3].style.display="none";
			move1(this.parentNode.children[3],{'height':0});
			move1(this.parentNode.children[3],{'width':0})
		}
	}

	for(var i=0;i<tigs1.length;i++){
		tigs1[i].onmouseover=function(){
			
				this.style.opacity="1";
				this.parentNode.children[3].style.display="block";
				move1(this.parentNode.children[3],{'height':36});
				move1(this.parentNode.children[3],{'width':170})
				this.onmousemove=function(ev){
					var e=ev||window.event;
					var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
					
					var x=e.clientX-this.parentNode.offsetLeft;
					var y=e.clientY-this.parentNode.offsetTop+scrollH;
					this.parentNode.children[3].style.left=x+10+"px";
					this.parentNode.children[3].style.top=y+10+"px";
				}
			
		}
		tigs1[i].onmouseout=function(){
			this.style.opacity="0.5";
			this.parentNode.children[3].style.display="none";
			move1(this.parentNode.children[3],{'height':0});
			move1(this.parentNode.children[3],{'width':0})
		}
	}

	for(var i=0;i<tigs2.length;i++){
		tigs2[i].onmouseover=function(){
			
				this.style.opacity="1";
				this.parentNode.children[3].style.display="block";
				move1(this.parentNode.children[3],{'height':36});
				move1(this.parentNode.children[3],{'width':170})
				this.onmousemove=function(ev){
					var e=ev||window.event;
					var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
					
					var x=e.clientX-this.parentNode.offsetLeft;
					var y=e.clientY-this.parentNode.offsetTop+scrollH;
					this.parentNode.children[3].style.left=x+10+"px";
					this.parentNode.children[3].style.top=y+10+"px";
				}
			
		}
		tigs2[i].onmouseout=function(){
			this.style.opacity="0.5";
			this.parentNode.children[3].style.display="none";
			move1(this.parentNode.children[3],{'height':0});
			move1(this.parentNode.children[3],{'width':0})
		}
	}
}


 
