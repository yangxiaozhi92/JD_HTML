var positions = ["上海","重庆","天津","河北","山西","河南","辽宁","吉林","黑龙江","浙江","江苏","山东","安徽","内蒙古","福建","湖北","湖南","广东","广西","江西","四川","海南","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆","台湾","香港","澳门","钓鱼岛","海外"];
var hotwords = ["免单","领免息券","多肉植物","抢机票","每50减20","和田玉","中老年女装","免费试用","沙滩鞋"];
var menuLines = ["全部商品分类","服装城","美妆馆","超市","生鲜","全球购","闪购","团购","拍卖","金融"];
var menuList = [{
	categoryName : "家用电器",
	menuListTitle : ["品牌日","家电城","智能生活馆","京东净化馆","京东帮服务店","家电众筹馆"],
	menuLeftList : [{
						itemName : "大家电",
						itemList : ["平板电视","家用空调","家用中央空调","冰箱","洗衣机","家庭影院","DVD","迷你音响","冷柜/冰吧","酒柜","家电配件"]
					},
					{
						itemName : "厨卫大电",
						itemList : ["油烟机","燃气灶","烟灶套装","消毒柜","洗碗机","电热水器","燃气热水器","嵌入式厨电"]
					},
					{
						itemName : "厨卫小电",
						itemList : ["电饭煲","微波炉","电烤箱","电磁炉","电压力锅","豆浆机","咖啡机","面包机","榨汁机","料理机","电饼铛","养生壶/煎药壶","酸奶机","煮蛋器","电水壶/热水壶","电炖锅","多用途锅","电烧烤锅","电热饭盒","其他厨房电器"]
					},
					{
						itemName : "生活电器",
						itemList : ["电风扇","冷风扇","吸尘器","净化器","扫地机器人","加湿器","挂烫机/熨斗","取暖电器","插座","电话机","净水器","饮水机","除湿机","干衣机","清洁机","收录/音机","其他生活电器","生活电器配件"]
					},
					{
						itemName : "个护健康",
						itemList : ["剃须刀","口腔护理","电吹风","美容器","卷/直发器","理发器","剃/脱毛器","足浴盘","健康秤/厨房秤","按摩器","按摩椅","血压计","血糖仪","体温计","计步器/脂肪检测仪","其他健康电器"]
					},
					{
						itemName : "五金家装",
						itemList : ["电动工具","手动工具","仪器仪表","浴霸/排气扇","灯具","LED灯","洁身器","水槽","龙头","淋浴花洒","厨卫五金","家具五金","门铃","电器开关","插座","电工电料","监控安防","电线/线缆"]
					}]
},
{
	categoryName : "手机、数码、京东通信",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "电脑、办公",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "家居、家具、家装、厨具",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "男装、女装、童装、内衣",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "个护化妆、清洁用品、宠物",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "鞋靴、箱包、珠宝、奢侈品",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "运动户外、钟表",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "汽车、汽车用品",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "母婴、玩具乐器",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "食品、酒类、生鲜、特产",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "医药保健",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "图书、音像、电子书",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "彩票、旅行、充值、票务",
	menuListTitle : [],
	menuLeftList : []
},
{
	categoryName : "理财、众筹、白条、保险",
	menuListTitle : [],
	menuLeftList : []
}];

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
	adDiv[0].style.display = "none";
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

// 添加menu-line
function addMenuLine(menuLines) {
	var menu = document.getElementsByClassName("menu-line");
	for (var i = 0; i < menuLines.length; i++) {
		var a_line = document.createElement("a");
		a_line.href = "javascript:;";
		a_line.innerHTML = menuLines[i];
		if (i == 0) {
			a_line.className = "all-menu";
		} else {
			a_line.className = "other";
		}
		menu[0].appendChild(a_line);
	}
}

// 添加menu-list
function addMenuList(menuList) {
	var menuAll = document.getElementsByClassName("menu-list");
	var menu = menuAll[0];
	for (var i = 0; i < menuList.length; i++) {
		var menuLi = document.createElement("li");
		menu.appendChild(menuLi);
		var menuLi_p = document.createElement("p");
		menuLi.appendChild(menuLi_p);
		menuLi_p.className = "categoryName";
		menuLi_p.innerHTML = menuList[i].categoryName + '<i class="jd-icon z-arrow-right"></i>';

		var categoryContentUl = document.createElement("ul");
		menuLi.appendChild(categoryContentUl);
		categoryContentUl.className = "category-content";

		var menu_left = document.createElement("li");
		categoryContentUl.appendChild(menu_left);
		menu_left.className = "menu-left";

		var menu_left_title = document.createElement("div");
		menu_left.appendChild(menu_left_title);
		menu_left_title.className = "menu-left-title";

		var titles = menuList[i].menuListTitle;
		for (var j = 0; j < titles.length; j++) {
			var title_a = document.createElement("a");
			title_a.innerHTML = titles[j] + '<i class="jd-icon z-arrow-right"></i>';
			menu_left_title.appendChild(title_a);
		}

		var menu_left_list = document.createElement("ul");
		menu_left.appendChild(menu_left_list);
		menu_left_list.className = "menu-left-list";
		var leftList = menuList[i].menuLeftList;
		for (var k = 0; k < leftList.length; k++) {
			var item_li = document.createElement("li");
			menu_left_list.appendChild(item_li);
			item_li.className = "menu-item";

			var item_a = document.createElement("a");
			item_a.innerHTML = leftList[k].itemName + '<i class="jd-icon z-arrow-right"></i>';
			item_li.appendChild(item_a);

			var item_ul = document.createElement("ul");
			item_li.appendChild(item_ul);
			item_ul.className = "menu-item-content";

			var itemList = leftList[k].itemList;
			for (var m = 0; m < itemList.length; m++) {
				var item_list_li = document.createElement("li");
				item_ul.appendChild(item_list_li);
				item_list_li.innerHTML = "<a href=''>"+itemList[m]+"</a>";
			}

		}
	}
}

// 添加城市定位
addPositionTarget(positions);

// 添加热搜关键字
addHotword(hotwords);

// 添加menu-line
addMenuLine(menuLines);

// 添加menu-list
addMenuList(menuList);

