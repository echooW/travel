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
				document.querySelector(".wrapper>ul>li:nth-child(2)>.tit_1").style.animation='tit_1_2 0.2s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(2)>.tit_2").style.animation='tit_2_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(1)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(1)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(1)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(2)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(2)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(2)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(3)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(3)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(3)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(4)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(4)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(4)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate>.rotateNode:nth-child(5)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.rotate_txt>p:nth-child(5)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.gang>.gangN:nth-child(5)").style.animation='rotate_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.msg>.msg_img>p").style.animation='rotate_2 1s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.msg>.msg_img>span").style.animation='rotate_2 1s linear both';
				document.querySelector(".wrapper ul li:nth-child(2)>.msg>.msg_txt").style.animation='msg_txt_2 1s linear both';
			}
			if(i==2){
				document.querySelector(".wrapper>ul>li:nth-child(3)>.tit_1").style.animation='tit_1 0.8s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(3)>.tit_2").style.animation='tit_2 0.8s linear both 0.5s';
				document.querySelector(".wrapper>ul>li:nth-child(3)>.modul_1").style.animation='modul_1 1.2s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(3)>.modul_2").style.animation='modul_2 0.8s linear both 0.5s';
				document.querySelector(".wrapper>ul>li:nth-child(3)>.modul_3").style.animation='modul_3 1s linear both 0.5s';
			}else{
				document.querySelector(".wrapper>ul>li:nth-child(3)>.tit_1").style.animation='tit_1_2 0.2s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(3)>.tit_2").style.animation='tit_2_2 0.2s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(3)>.modul_1").style.animation='modul_1_2 0.2s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(3)>.modul_2").style.animation='modul_2_2 0.2s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(3)>.modul_3").style.animation='modul_3_2 1s linear both';
			}
			if(i==3){
				document.querySelector(".wrapper>ul>li:nth-child(4)>.tit_1").style.animation='tit_1 0.8s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(4)>.tit_2").style.animation='tit_2 0.8s linear both 0.5s';
				document.querySelector(".wrapper ul li:nth-child(4)>.pic>.picNode:nth-child(1)").style.animation='picOpa 0.8s linear both 1s';
				document.querySelector(".wrapper ul li:nth-child(4)>.pic>.picNode:nth-child(2)").style.animation='picOpa 0.8s linear both 1.5s';
				document.querySelector(".wrapper ul li:nth-child(4)>.pic>.picNode:nth-child(3)").style.animation='picOpa 0.8s linear both 2s';
				document.querySelector(".wrapper ul li:nth-child(4)>.pic>.picNode:nth-child(4)").style.animation='picOpa 0.8s linear both 2.5s';
				document.querySelector(".wrapper ul li:nth-child(4)>.bg").style.animation='picOpa 0.8s linear both 3s';
			}else{
				document.querySelector(".wrapper>ul>li:nth-child(4)>.tit_1").style.animation='tit_1_2 0.2s linear both';
				document.querySelector(".wrapper>ul>li:nth-child(4)>.tit_2").style.animation='tit_2_2 0.2s linear both';
				document.querySelector(".wrapper ul li:nth-child(4)>.pic>.picNode:nth-child(1)").style.animation='picOpa_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(4)>.pic>.picNode:nth-child(2)").style.animation='picOpa_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(4)>.pic>.picNode:nth-child(3)").style.animation='picOpa_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(4)>.pic>.picNode:nth-child(4)").style.animation='picOpa_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(4)>.bg").style.animation='picOpa_2 0.5s linear both';
			}
			if(i==4){
				document.querySelector(".wrapper ul li:nth-child(5)>.text_1").style.animation='text_1 1s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.text_2>img:nth-child(1)").style.animation='picOpa 0.8s linear both 1s';
				document.querySelector(".wrapper ul li:nth-child(5)>.text_2>img:nth-child(2)").style.animation='picOpa 0.8s linear both 1.8s';
				document.querySelector(".wrapper ul li:nth-child(5)>.text_3").style.animation='picOpa 0.8s linear both 2.6s';
				document.querySelector(".wrapper ul li:nth-child(5)>.text_4").style.animation='picOpa 0.8s linear both 2.6s';
				
				
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(13)").style.animation='picOpa 0.8s linear both 3s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(3)").style.animation='picOpa 0.8s linear both 3.3s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(7)").style.animation='picOpa 0.8s linear both 3.6s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(14)").style.animation='picOpa 0.8s linear both 3.9s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(4)").style.animation='picOpa 0.8s linear both 4.2s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(9)").style.animation='picOpa 0.8s linear both 4.5s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(10)").style.animation='picOpa 0.8s linear both 4.8s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(6)").style.animation='picOpa 0.8s linear both 5.1s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(2)").style.animation='picOpa 0.8s linear both 5.4s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(1)").style.animation='picOpa 0.8s linear both 5.7s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(5)").style.animation='picOpa 0.8s linear both 6s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(11)").style.animation='picOpa 0.8s linear both 6.3s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(8)").style.animation='picOpa 0.8s linear both 6.6s';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(12)").style.animation='picOpa 0.8s linear both 6.9s';
			}else{
				document.querySelector(".wrapper ul li:nth-child(5)>.text_1").style.animation='text_1_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.text_2>img:nth-child(1)").style.animation='picOpa_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.text_2>img:nth-child(2)").style.animation='picOpa_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.text_3").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.text_4").style.animation='picOpa_2 0.8s linear both';
				
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(13)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(3)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(7)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(14)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(4)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(9)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(10)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(6)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(2)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(1)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(5)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(11)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(8)").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(5)>.images>div:nth-child(12)").style.animation='picOpa_2 0.8s linear both';
				
			}
			if(i==5){
				document.querySelector(".wrapper ul li:nth-child(6)>.text_1").style.animation='text_1 1s linear both';
				document.querySelector(".wrapper ul li:nth-child(6)>.text_2").style.animation='text_5 0.8s linear both 0.8s';
				document.querySelector(".wrapper ul li:nth-child(6)>.text_3").style.animation='text_6 0.8s linear both 1.3s';
				document.querySelector(".wrapper ul li:nth-child(6)>.bg_6").style.animation='picOpa 1s linear both 1.8s';
				document.querySelector(".wrapper ul li:nth-child(6)>.gift").style.animation='picOpa 1s linear both 2.8s';
			}else{
				document.querySelector(".wrapper ul li:nth-child(6)>.text_1").style.animation='text_1_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(6)>.text_2").style.animation='text_5_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(6)>.text_3").style.animation='text_6_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(6)>.bg_6").style.animation='picOpa_2 0.8s linear both';
				document.querySelector(".wrapper ul li:nth-child(6)>.gift").style.animation='picOpa_2 0.8s linear both';
			}
			if(i==6){
				document.querySelector(".wrapper ul li:nth-child(7)>.text_1").style.animation='text_1 1.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(7)>.text_2").style.animation='text_7 1s linear both 1s';
				document.querySelector(".wrapper ul li:nth-child(7)>.text_3").style.animation='text_8 1s linear both 1.8s';
				document.querySelector(".wrapper ul li:nth-child(7)>.dress").style.animation='picOpa 1s linear both 2.5s';
			}else{
				document.querySelector(".wrapper ul li:nth-child(7)>.text_1").style.animation='text_1_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(7)>.text_2").style.animation='text_7_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(7)>.text_3").style.animation='text_8_2 0.5s linear both';
				document.querySelector(".wrapper ul li:nth-child(7)>.dress").style.animation='picOpa_2 0.5s linear both 2.5s';
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

var rotate=document.querySelectorAll(".wrapper ul li:nth-child(2)>.rotate>.rotateNode");
//alert(rotate.length)
for(let i=0;i<rotate.length;i++){
	rotate[i].onmouseover=function(){
		for(let j=0;j<rotate.length;j++){
			rotate[j].onmouseout=function(){
				this.style.animation="";
			}
		}
		this.style.animation="1s rotateNode linear both";
	}
}


		document.querySelector(".wrapper ul li:nth-child(3)>.modul_1>img:nth-child(6)").style.animation="5s y_1 infinite";
		document.querySelector(".wrapper ul li:nth-child(3)>.modul_1>img:nth-child(7)").style.animation="5s y_1 infinite 3s";
		document.querySelector(".wrapper ul li:nth-child(3)>.modul_1>img:nth-child(8)").style.animation="5s y_1 infinite 5s";


var pic=document.querySelectorAll(".wrapper ul li:nth-child(4)>.pic>.picNode");
//alert(rotate.length)
for(let i=0;i<pic.length;i++){
	pic[i].onmouseover=function(){
		for(let j=0;j<pic.length;j++){
			pic[j].onmouseout=function(){
				this.style.animation="";
			}
		}
		this.style.animation="1s rotatePic linear both";
	}
}

document.querySelector(".wrapper ul li:nth-child(4)>.foot>div:nth-child(1)").style.animation="4s opa infinite";
document.querySelector(".wrapper ul li:nth-child(4)>.foot>div:nth-child(3)").style.animation="4s opa infinite";
document.querySelector(".wrapper ul li:nth-child(4)>.foot>div:nth-child(5)").style.animation="4s opa infinite";
document.querySelector(".wrapper ul li:nth-child(4)>.foot>div:nth-child(2)").style.animation="4s opa infinite 2s";
document.querySelector(".wrapper ul li:nth-child(4)>.foot>div:nth-child(4)").style.animation="4s opa infinite 2s";
document.querySelector(".wrapper ul li:nth-child(4)>.foot>div:nth-child(6)").style.animation="4s opa infinite 2s";



var gift=document.querySelectorAll(".wrapper ul li:nth-child(6)>.gift>.giftNode>.img");
//alert(rotate.length)
for(let i=0;i<gift.length;i++){
	gift[i].onmouseover=function(){
		for(let j=0;j<gift.length;j++){
			gift[j].onmouseout=function(){
				this.style.animation="";
			}
		}
		this.style.animation="1s rotateNode linear both";
	}
}



document.querySelector(".wrapper ul li:nth-child(7)>.map>div:nth-child(1)").style.animation="4s opa infinite";
document.querySelector(".wrapper ul li:nth-child(7)>.map>div:nth-child(2)").style.animation="4s opa infinite 0.5s";
document.querySelector(".wrapper ul li:nth-child(7)>.map>div:nth-child(3)").style.animation="4s opa infinite 3s";
document.querySelector(".wrapper ul li:nth-child(7)>.map>div:nth-child(4)").style.animation="4s opa infinite 1.5s";
document.querySelector(".wrapper ul li:nth-child(7)>.map>div:nth-child(5)").style.animation="4s opa infinite 0.5s";
document.querySelector(".wrapper ul li:nth-child(7)>.map>div:nth-child(6)").style.animation="4s opa infinite 2.5s";
document.querySelector(".wrapper ul li:nth-child(7)>.map>div:nth-child(7)").style.animation="4s opa infinite";
document.querySelector(".wrapper ul li:nth-child(7)>.map>div:nth-child(8)").style.animation="4s opa infinite 3.5s";
document.querySelector(".wrapper ul li:nth-child(7)>.map>div:nth-child(9)").style.animation="4s opa infinite 2s";




