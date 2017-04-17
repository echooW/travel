var isFirefox = typeof document.body.style.MozUserSelect != 'undefined',
	now = 0,
	active = true,
	wra = document.getElementsByTagName('ul')[0],
	obj = wra.getElementsByTagName('li');
cri = document.getElementsByClassName('crik')[0],
	on = cri.getElementsByTagName('span');
//绑定滚轮事件
window.addEventListener(isFirefox ? 'DOMMouseScroll' : "mousewheel", fn, false);

function fn(e) { //滚轮触发函数
	e = e || event;
	//调整滚轮返回值兼容
	a = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail % 3 == 0 ? e.detail / 3 : e.detail);
	if(active) {
		active = false;
		setTimeout(one, 500)
		two(a)
	}
}

function one() { //滚轮开关
	active = true;
}

function two(a) { //加载函数
	now += a
	if(now < -5) {
		now = -5
	} else if(now > 0) {
		now = 0
	}
	wra.style.top = (now * 100) + 'vh';
	var now1 = Math.abs(now);
	for(var i = 0, len = obj.length; i <= len - 1; i++) {
		obj[i].className = '';
		on[i].className = '';
		if(i == now1) {
			obj[i].className = 'active';
			on[i].className = 'blue';
		}
	}
	
	for(var i = 0, len = obj.length; i <= len - 1; i++) {
		if(obj[i].className=="active") {
			if(i==0){
				document.querySelector(".wrapper>ul>li:nth-child(1)>.text").style.animation='txt 0.8s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(1)>.text2").style.animation='txt2 0.8s linear both 0.8s';
				document.querySelector(".wrapper>ul>li:nth-child(1)>.text3").style.animation='txt3 0.8s linear both 1.5s';
				document.querySelector(".wrapper>ul>li:nth-child(1)>.feiji").style.animation='feiji 0.8s linear both 2s';
			}else{
				document.querySelector(".wrapper>ul>li:nth-child(1)>.text").style.animation='txt_1 0.3s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(1)>.text2").style.animation='txt2_1 0.3s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(1)>.text3").style.animation='txt3_1 0.3s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(1)>.feiji").style.animation='feiji_1 0.3s linear both';
			}
		}
	}
}
two(0);
cri.addEventListener("click", fn2, false);

function fn2(e) {
	var num = e.target,
		str = num.getAttribute('date-url');
	now = parseInt(str);
	two(0);
};