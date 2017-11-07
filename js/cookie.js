function setCookie(key,value,time){
	var date = new Date(); 
	date.setDate(date.getDate() + time)
	//键key值value对形式
	document.cookie = key+"="+value+";expires=" + date.toGMTString()
}

function getCookie(key) {
	var str = document.cookie;
	var arr1 = str.split("; ")
	for(var i = 0; i < arr1.length; i++) {
		var arr2 = arr1[i].split("=")
		if(key === arr2[0]) {
			return arr2[1];
		}
	}
}

function removeCookie(key){
	setCookie(key,"随便赋值",-1)
}
