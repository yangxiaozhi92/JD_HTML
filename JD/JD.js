var positions = ["上海","重庆","天津","河北","山西","河南","辽宁","吉林","黑龙江","浙江","江苏","山东","安徽","内蒙古","福建","湖北","湖南","广东","广西","江西","四川","海南","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆","台湾","香港","澳门","钓鱼岛","海外"];
var hotwords = ["免单","领免息券","多肉植物","抢机票","每50减20","和田玉","中老年女装","免费试用","沙滩鞋"];

function addPositionTarget(positions) {
	var positionDiv = document.getElementsByClassName("position-all");
	var positionUl = positionDiv[0];
	for (var i = 0; i < positions.length; i++) {
		var positionLi = document.createElement("li");
		positionLi.innerHTML = positions[i];
		positionLi.onclick = function(){updatePosition(this);};
		positionUl.appendChild(positionLi);
	}
}

// 更新地理位置
function updatePosition(thisPosition) {
	var oldPosition = document.getElementsByClassName("selected");
	oldPosition[0].className = "";
	thisPosition.className = "selected";
	var nowPosition = document.getElementsByClassName("position-now");
	nowPosition[0].innerHTML = thisPosition.innerHTML;
}

// 关闭广告
function closeAd(adClassName) {
	var adDiv = document.getElementsByClassName(adClassName);
	adDiv[0].style.visibility = "hidden";
}

// 添加热搜关键字
function addHotword(hotwords) {
	var hot = document.getElementsByClassName("hotword");
	for (var i = 0; i < hotwords.length; i++) {
		var a_hot = document.createElement("a");
		a_hot.href = "javascript:;";
		a_hot.innerHTML = hotwords[i];
		if (i == 0) {
			a_hot.className = "hottest";
		}
		hot[0].appendChild(a_hot);
	}
}

// 添加城市定位
addPositionTarget(positions);

// 添加热搜关键字
addHotword(hotwords);

