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
	if(now < -6) {
		now = -6
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
			if(i==1){
				document.querySelector(".wrapper>ul>li:nth-child(2)>.tit_1").style.animation='tit_1 0.8s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(2)>.tit_2").style.animation='tit_2 0.8s linear both 0.5s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(1)").style.animation='rotate 1s linear both 0.8s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(1)").style.animation='rotate 1s linear both 0.8s';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(1)").style.animation='rotate 1s linear both 0.8s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(2)").style.animation='rotate 1s linear both 1.1s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(2)").style.animation='rotate 1s linear both 1.1s';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(2)").style.animation='rotate 1s linear both 1.1s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(3)").style.animation='rotate 1s linear both 1.4s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(3)").style.animation='rotate 1s linear both 1.4s';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(3)").style.animation='rotate 1s linear both 1.4s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(4)").style.animation='rotate 1s linear both 1.7s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(4)").style.animation='rotate 1s linear both 1.7s';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(4)").style.animation='rotate 1s linear both 1.7s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(5)").style.animation='rotate 1s linear both 2s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(5)").style.animation='rotate 1s linear both 2s';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(5)").style.animation='rotate 1s linear both 2s';
				document.querySelector(".wrapper ul li:nth-child(2)>.msg>.msg_img>p").style.animation='rotate 1s linear both 2s';
				document.querySelector(".wrapper ul li:nth-child(2)>.msg>.msg_img>span").style.animation='rotate 1s linear both 2s';
				document.querySelector(".wrapper ul li:nth-child(2)>.msg>.msg_txt").style.animation='msg_txt 1s linear both 2s';
			}else{
				document.querySelector(".wrapper>ul>li:nth-child(2)>.tit_1").style.animation='tit_1_2 0.6s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(2)>.tit_2").style.animation='tit_2_2 0.6s linear both 0.3s';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(1)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(1)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(1)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(2)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(2)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(2)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(3)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(3)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(3)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(4)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(4)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(4)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(5)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(5)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(5)").style.animation='rotate_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.msg>.msg_img>p").style.animation='rotate_2 1s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.msg>.msg_img>span").style.animation='rotate_2 1s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.msg>.msg_txt").style.animation='msg_txt_2 1s linear both';
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