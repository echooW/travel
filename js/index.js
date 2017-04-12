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
			if(i == now1) {
				obj[i].className = 'active';
				on[i].className = 'blue';
			} else {
				obj[i].className = '';
				on[i].className = '';
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
}