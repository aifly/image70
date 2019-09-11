!function () {


	function Face(option) {
		var option = option || {};
		this.obj = option.obj;
		this.init();
		this.opacity = 0;
	};

	Face.prototype = {
		constructor: Face,
		init: function () {
			this.x = 0;
			this.y = 0;
			this.vx = Math.random() * -60 - 5;
			this.vy = Math.random() * -60 - 10;
			this.opacity = 0;
			this.obj.style.opacity = 0;
			this.obj.style.transform = 'translate(' + this.x + 'px,' + this.y + 'px)'
		},
		animate: function () {
			if (this.opacity === 0) {
				this.obj.style.opacity = 1;
				this.opacity = 1;
			}
			this.x += this.vx;
			this.y += this.vy;
			this.vy += Math.random() * 3 + 2;
			this.obj.style.opacity *= .9;
			this.obj.style.transform = 'translate(' + this.x + 'px,' + this.y + 'px)'
		},
	};




	var util = {
		loading: function (arr, fn, fnEnd) {
			var len = arr.length;
			var count = 0;
			var i = 0;

			function loadimg() {
				if (i === len) {
					return;
				}
				var img = new Image();
				img.onload = img.onerror = function () {
					count++;
					if (i < len - 1) {
						i++;
						loadimg();
						fn && fn(i / (len - 1), img.src);
					} else {
						fnEnd && fnEnd(img.src);
					}
				};
				img.src = arr[i];
			}
			loadimg();
		},
		bindEvent() {

			var $ = this.$;
			var $$ = this.$$;

			$('#loading').ontouchmove = function (e) {
				e.preventDefault();
			}
			var titleC = $('#zmiti-title-C');
			var items = $$('.zmiti-swpier-item');
			/* var nav = $('#zmiti-nav');
			var navItems = nav.querySelectorAll('li');
			var s = this;
			nav.ontouchend = function(e){
				if (e.target.nodeName === "LI"){
					navItems.forEach(function(item,i){
						item.classList.remove('active')
						if(item === e.target){
							item.classList.add('active')
							s.currentIndex = i;
							if(s.currentIndex === s.lastIndex){
								return;
							}
							s.init(i);
							s.lastIndex = i;
						}
					})
				}
			}; */
			var main = this.$('.zmiti-main-ui')
			this.$('#zmiti-arrow').ontouchend = function () {
				main.classList.toggle('close');
				//nav.classList.toggle('hide');
				

			}

		},
		$: function (selector) {
			return document.querySelector(selector);
		},
		currentIndex: 0,
		lastIndex: 0,
		imgList: [
			[
				{
					title: '农民和农机技术员',
					imgs: [
						'./assets/images/01/2-3.jpg',
						'./assets/images/01/1-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1949年10月8日，黑龙江讷河农民在秋收（王纯德摄）。</div><div style="text-indent:2em;text-align:justify">2019年5月31日，在山东省济宁市嘉祥县仲山镇，雷沃重工股份有限公司工作人员在遥控指挥自动驾驶收割机作业（新华社记者郭绪雷摄）。</div><div style="text-indent:2em;text-align:justify">从“面朝黄土背朝天”的人工收割，到智能化、自动化收割，技术的进步正在把农民从艰苦的田间劳动逐步解放出来。如今，无人驾驶收割机安装了自动驾驶系统，可以实现高精准定位，自动路径规划和无人驾驶行进。</div>'
				},
				{
					title: '新生儿护士',
					imgs: [
						'./assets/images/01/4-3.jpg',
						'./assets/images/01/3-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1950年，辽宁鞍山职工医院医务人员在为婴儿称体重（王纯德摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月19日，在内蒙古呼和浩特，内蒙古自治区人民医院新生儿科护士长杨晓玲（右）和同事用多功能保温箱为婴儿称体重（新华社记者彭源摄）。</div><div style="text-indent:2em;text-align:justify">新中国新生儿医疗护理水平取得巨大进步，新生儿科医务工作人员的工作条件也发生了巨大的变化。在内蒙古自治区人民医院，新生儿科设有新生儿重症监护病区，并配置进口呼吸机、辐射抢救台、封闭式婴儿培养箱等先进设备。</div>'
				},
				{
					title: '婚姻登记员',
					imgs: [
						'./assets/images/01/6-3.jpg',
						'./assets/images/01/5-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1952年，在湖南醴陵，司法工作人员（左）将结婚证递给白兔潭村村民全裕盛（中）和孙桂华（新华社记者毛松友摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月25日，在湖南醴陵，民政局工作人员宋宛真（左）将结婚证递给前来登记的新人刘亮（右）和范灵芝（新华社记者薛宇舸摄）。</div><div style="text-indent:2em;text-align:justify">据醴陵民政局工作人员介绍，现在婚姻登记使用实时在线登记系统，更加科学、规范、便民。</div>'
				},
				{
					title: '邮递员与快递员',
					imgs: [
						'./assets/images/01/8-3.jpg',
						'./assets/images/01/7-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1951年，北京市邮政管理局的三名女邮递员一早准备出发工作（新华社记者牛畏予摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月26日，北京市前门石头胡同顺丰快递点快递小哥刘阔驾驶电动车出发送快递（新华社记者鞠焕宗摄）。</div><div style="text-indent:2em;text-align:justify"> 过去，邮递员大多骑着一辆绿色加重自行车，一天可派送近百封平信。近年来，随着电子通信设备的日益完善和电商的发展，传送家书的平信少了，快递包裹越来越多。如今，在派送高峰期，一名快递员用快递三轮车一天可派送数百件包裹。</div>'
				},
				{
					title: '自行车装配工',
					imgs: [
						'./assets/images/01/10-3.jpg',
						'./assets/images/01/9-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1953年，在国营天津自行车厂，老技工给新工人讲解车辆的装配技术（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年7月9日，河北省邢台市万怡自行车广宗有限公司技术工人在自动组装流水线上工作（新华社记者牟宇摄）。</div><div style="text-indent:2em;text-align:justify">中国有“自行车王国”之称，自行车深深植根于人们的日常生活。近几年，共享单车作为绿色、共享经济的代表，广泛地进入人们的生活。自行车与互联网技术结合，焕发了新的活力。在河北广宗，自行车生产企业经过40多年的发展，已由家庭作坊式生产发展成规模化生产，自行车自动组装流水线提高了生产效率，产品在供应国内市场的同时大量出口海外。</div>'
				},
				{
					title: '牧区医生',
					imgs: [
						'./assets/images/01/12-3.jpg',
						'./assets/images/01/11-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1954年，在新疆帕米尔高原上的乌恰县，一位牧区医疗小组的医务人员被柯尔克孜族牧民妇女们请到家里去看病（新华社记者王平摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月7日，新疆塔什库尔干塔吉克自治县达布达尔乡热斯喀木村村医发尔亚特•塔西白克（右三）与来自乡卫生院的医务人员来到热斯喀木村易地扶贫搬迁安置点出诊（新华社记者胡虎虎摄）。</div><div style="text-indent:2em;text-align:justify">从过去骑着马深入大山牧场巡诊，到现在定期前往集中居住点上门服务；从过去几种简单的常备药，到如今种类丰富的各类药品……新疆牧区的医疗条件和水平大幅提升，牧民享受到越来越多、越来越便利的医疗惠民服务。</div>'
				}, {
					title: '汽车制造工人',
					imgs: [
						'./assets/images/01/14-3.jpg',
						'./assets/images/01/13-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">这是1958年拍摄的第一汽车制造厂（资料照片）。这里生产了第一批红旗轿车。</div><div style="text-indent:2em;text-align:justify">2019年4月9日，在一汽红旗总装车间内，职工在对生产的红旗轿车进行静检作业（新华社记者许畅摄）。</div><div style="text-indent:2em;text-align:justify">60多年前，新中国汽车工业百废待兴，老一辈汽车人和建设者来到长春创立第一汽车制造厂（现中国第一汽车集团有限公司），开启了我国汽车工业的发展大幕。如今，新一代“汽车人”正在不断精进技艺，缩小与世界最高水平的差距，努力踏上自主品牌振兴之路。</div><div style="text-indent:2em;text-align:justify">2018年，我国汽车产销分别完成2780.92万辆和2808.06万辆，连续十年蝉联全球第一。</div>'
				}, {
					title: '纺织工人',
					imgs: [
						'./assets/images/01/16-3.jpg',
						'./assets/images/01/15-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1958年，山东省高唐县，一名纺织工人用土制纺纱机纺布（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年6月25日，山东省高唐县超越纺织有限公司，工人田桂兰正在操作新一代智能细纱机进行石墨烯纱线的纺纱作业（新华社记者王凯摄）。</div><div style="text-indent:2em;text-align:justify">从过去脏乱差的厂房到现在井然有序的车间，从落后的纺织机到先进的纺织生产线，从单一的纺织品种到加工多样化纺织产品，中国纺织工人见证了纺织产业的一步步蜕变。</div>'
				}, {
					title: '油田工人',
					imgs: [
						'./assets/images/01/18-3.jpg',
						'./assets/images/01/17-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1959年，新疆克拉玛依油田工人在建设九号集油区（新华社记者武纯展摄）。</div><div style="text-indent:2em;text-align:justify">2019年1月15日，新疆油田公司风城油田作业区员工孙晟（前）和王晓东在重18井区对油井实施增产措施（吴小川摄）。</div><div style="text-indent:2em;text-align:justify">新中国成立初期，面对国际禁运和“中国贫油论”，中国地质学家和石油人打井找油。1955年，在新疆发现克拉玛依油田，缓解了中国工业用油的燃眉之急；1959年，在黑龙江发现大庆油田，中国甩掉了“中国贫油论”的帽子。当前，克拉玛依油田油气当量已连续17年稳产1000万吨/年以上，智慧油田建设也为油气生产注入了新动力。克拉玛依这座“因油而生、因油而兴”的戈壁油城，在一代代拥有“工匠精神”的克拉玛依人的打造下，城市面貌日新月异，人民生活水平稳步提高，克拉玛依正成为“一带一路”上一颗闪亮的明珠。</div>'

				}, {
					title: '茶学专家',
					imgs: [
						'./assets/images/01/20-3.jpg',
						'./assets/images/01/19-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1954年，武汉大学茶学专业毕业的肖时英（右）、张木兰夫妇在云南野生茶树旁合影（肖时英提供）。</div><div style="text-indent:2em;text-align:justify">2019年5月27日，86岁的肖时英（左二）在云南普洱市现代生态有机茶园为学生实地授课（新华社记者薛东梅摄）。</div><div style="text-indent:2em;text-align:justify">上世纪50年代，现在的普洱茶主产区云南省，大部分是野生茶树，缺乏良种，产量低下。肖时英、张木兰是共和国培养的第一批大学生，跋山涉水来到边疆。几十年来他们扎根基层，开展茶籽育苗、茶树扦插、茶树嫁接等多种繁殖方法试验，有效解决茶园规模化种植发展中的茶苗供给难题。今天的云南省普洱市，土地利用率和茶叶产量大幅提升，多品种组合种植、修剪多个采摘面的“立体生态茶园”实现丰产丰收，增加了茶园综合经济效益。</div>'

				}],
			[{
				title: '计算机研发人员',
				imgs: [
					'./assets/images/02/2-3.jpg',
					'./assets/images/02/1-3.jpg',
				],
				desc: '<div style="text-indent:2em;text-align:justify">1958年，中国科学院计算技术研究所和有关单位在苏联的技术援助下试制成功我国第一台通用电子计算机——“八一”型电子计算机。图为工作人员在观察运行工作中的通用电子计算机（新华社记者李基禄摄）。</div><div style="text-indent:2em;text-align:justify">2019年4月24日，在国家超级计算天津中心“天河三号”原型机机房内，国家超级计算天津中心应用研发部部长孟祥飞（左）和同事一起巡查（新华社记者李然摄）。</div><div style="text-indent:2em;text-align:justify">从依靠国外援助生产出中国第一台计算机，到今天完全由我国自主研发的新一代百亿亿次超级计算机——“天河三号”原型机，一代代中国计算机人怀揣理想与信念，为推动我国科技事业发展不断拼搏努力、克难攻坚。在2019年发布的新一期全球超级计算机500强榜单上，中国超算上榜数量蝉联第一，中国在超算领域的创新能力备受国际业界关注。</div>'
			},
			{
				title: '少数民族地区教师',
				imgs: [
					'./assets/images/02/4-3.jpg',
					'./assets/images/02/3-3.jpg',
				],
				desc: '<div style="text-indent:2em;text-align:justify">1954年，在云南省普洱市西盟佤族自治县创办的第一所小学——西盟小学，老师带领孩子读书学习（资料照片）。</div><div style="text-indent:2em;text-align:justify">2018年12月7日，云南省西盟佤族自治县勐梭镇班母村佤山育忠幼儿园的孩子跟着老师岩科上音乐课（新华社记者杨宗友摄）。1986年出生的岩科是班母村佤族寨人。他说，我的阿妈小时候没有进过一天学堂，现在，佤山的孩子们都在宽敞明亮的教室里学习。</div><div style="text-indent:2em;text-align:justify">从1954年西盟县创办第一所小学至今，这里的教育发生了翻天覆地的变化——从破旧的土房子到现代化校舍，从最初的基础学习到如今的多样化教学，从培养兴趣到全面发展，从文化教育到素质提升……教育惠及着每个家庭，教育发展为佤族群众带来了看得见、摸得着的福祉。</div>'
			},
			{
				title: '司机',
				imgs: [
					'./assets/images/02/6-3.jpg',
					'./assets/images/02/5-3.jpg',
				],
				desc: '<div style="text-indent:2em;text-align:justify">1959年，贵州黔东南苗族侗族自治州交通局第二汽车运输队的女司机坐在车中（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年7月5日，在贵州三都水族自治县，水族女司机万兴丽坐在车中（新华社记者欧东衢摄）。</div><div style="text-indent:2em;text-align:justify">万兴丽的驾龄已有20年，她现在是三都交通运输公司的一名司机，驾驶从高铁站到三都的班车。万兴丽告诉记者，二十年前贵州山高路远，司机职业非常辛苦，专职女司机非常少。近年来，随着贵州“县县通高速”，道路条件发生了天翻地覆的变化，专职女司机逐渐增多，开车再也不是一件“苦差事”。</div>'
			},
			{
				title: '畜牧兽医',
				imgs: [
					'./assets/images/02/8-3.jpg',
					'./assets/images/02/7-3.jpg',
				],
				desc: '<div style="text-indent:2em;text-align:justify">1959年，在青海省海北藏族自治州门源回族自治县的苏吉滩公社，畜牧兽医余中学正在给牧民讲解治疗犊牛副伤寒的技术和理论（新华社记者李景瑞摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月27日，在青海省海北藏族自治州门源县苏吉滩乡察汉达吾村，县畜牧兽医站站长刘文先给村级动物防疫员讲解包虫病的防治（新华社记者张龙摄）。</div><div style="text-indent:2em;text-align:justify">过去，我国的兽医从业人员大多凭借传统经验开展兽医工作，很少接受过专门的培训。现在，基层兽医站的工作人员大多接受过系统的兽医职业教育培训。他们深入到农牧民群众身边，利用现代化演示和通讯手段，为基层动物防疫人员和牧民开展畜牧业养殖、病害防治等技术培训，为当地畜牧业繁荣发展保驾护航。</div>'
			},
			{
				title: '鞍钢工人',
				imgs: [
					'./assets/images/02/10-3.jpg',
					'./assets/images/02/9-3.jpg',
				],
				desc: '<div style="text-indent:2em;text-align:justify">上世纪50年代，鞍钢大型厂生产重轨的场景（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年7月5日，工人在鞍钢集团鞍钢股份大型厂百米重轨生产线检查生产情况（新华社记者潘昱龙摄）。</div><div style="text-indent:2em;text-align:justify">鞍钢位于辽宁省鞍山市，70年前，它在千疮百孔中恢复开工，挺起国家建设的钢铁脊梁，点燃了举国上下摆脱一穷二白的希望。如今鞍钢钢铁产能接近4000万吨，成为跻身世界500强的巨型“钢铁航母”。过去鞍钢工人的工作环境十分艰苦，很多一线工人都是顶着高温、吸着粉尘作业。如今，鞍钢工人的工作环境有了明显变化，高温工作岗位配备了降温设备。</div>'
			},
			{
				title: '户籍民警',
				imgs: [
					'./assets/images/02/12-3.jpg',
					'./assets/images/02/11-3.jpg',
				],
				desc: '<div style="text-indent:2em;text-align:justify">1959年，在广西南宁市临江派出所，民警为一名带孩子的妇女办户籍（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年7月31日，在北京市公安局西城分局二龙路派出所户籍大厅，民警刘雅楠为一名儿童办理身份证业务（新华社记者赵宇思摄）。</div><div style="text-indent:2em;text-align:justify">近年来，办理户口、居民身份证工作的效率和服务质量较以前均有大幅提升。以北京市公安局西城分局二龙路派出所为例，该所按照市局规定落实便民政策，推出“一站式”户口迁移、身份证异地办理、预约受理等业务，进一步简化办理流程，方便群众。</div>'
			},
			{
				title: '防疫员',
				imgs: [
					'./assets/images/02/14-3.jpg',
					'./assets/images/02/13-3.jpg',
				],
				desc: '<div style="text-indent:2em;text-align:justify">1958年，在陕西渭南，一名接受培训的防疫员（左）在兽医史德春（中）的指导下学习生猪耳根下注射方法（新华社记者姜国宪摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月2日，陕西省西安市高陵区鹿苑街道药惠村，高陵区动物疫病预防控制中心兽医师张璞（左）、助理兽医师郑新龙（中）使用一次性注射器为养殖户裴夫记（右）饲养的猪注射疫苗（新华社记者张博文摄）。</div><div style="text-indent:2em;text-align:justify">如今，生猪防疫需由具备资质的兽医师操作。在注射疫苗时，防疫人员要穿着全身防护服，避免人畜交叉感染。</div>'
			},
			{
				title: '服装设计者',
				imgs: [
					'./assets/images/02/16-3.jpg',
					'./assets/images/02/15-3.jpg',
				],
				desc: '<div style="text-indent:2em;text-align:justify">1957年，天津市缝纫供销社职工在用旧大褂改制当时女性流行的服装——“布拉吉”（俄语“连衣裙”的音译）（新华社记者梁一丁摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月20日，天津工业大学针织与针织服装系教师匡丽赟在学校教室使用服装企业废弃的旧面料进行创作（新华社记者岳月伟摄）。</div><div style="text-indent:2em;text-align:justify">过去物质相对匮乏，人们追求美除了买新衣服，用旧衣改新衣的现象十分普遍。现在，人们生活条件改善，“环保”成为新的时尚主题。在天津工业大学针织与针织服装系，老师带领学生利用各种废旧面料进行再创作。他们手工制成的服装作品在大学生创意大赛中获奖并被服装企业挑中选用。</div>'
			},
			{
				title: '茶农',
				imgs: [
					'./assets/images/02/18-3.jpg',
					'./assets/images/02/17-3.jpg',
				],
				desc: '<div style="text-indent:2em;text-align:justify">1958年，在湖北五峰山，灯塔农业社的工作人员将采摘后的鲜叶进行温室加湿处理（李德义摄）。</div><div style="text-indent:2em;text-align:justify">2018年4月11日，福建武夷山市桐木村茶农、正山小种红茶制作技艺传承人江元勋（右二）指导当地茶农制作红茶（新华社记者张国俊摄）。</div><div style="text-indent:2em;text-align:justify">桐木村茶农江元勋介绍，过去由于生产经营模式落后，产品销路不畅，茶农收入低。如今，茶叶形成了规模化、产业化生产，传统工艺不断改良。越来越多的村民加入到这个行列，茶叶生产已成为当地支柱产业。</div>'
			},
			{
				title: '黄河摆渡人',
				imgs: [
					'./assets/images/02/20-3.jpg',
					'./assets/images/02/19-3.jpg',
				],
				desc: '<div style="text-indent:2em;text-align:justify">1954年，在甘肃兰州，西瓜和蔬菜被装上羊皮筏子，即将沿黄河顺流而下运送到其他城市（新华社记者胡越摄）。</div><div style="text-indent:2em;text-align:justify">2019年5月29日，在甘肃白银市景泰县中泉镇龙湾村，游客们乘坐羊皮筏子在黄河上漂流（新华社记者陈斌摄）。</div><div style="text-indent:2em;text-align:justify">羊皮筏子是西北腹地黄河沿岸民间保留下来的一种古老的摆渡和运输工具。上世纪四五十年代，陆路交通不是很发达，羊皮筏子是黄河中上游重要的水运工具。如今，古老的羊皮筏子已较少用作运输工具，而是成为黄河上游颇具特色的旅游项目。</div>'
			}
			]
			,
			[
				{
					title: '交通警察',
					imgs: [
						'./assets/images/03/2-3.jpg',
						'./assets/images/03/1-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1960年，一名交警在北京市东长安街执勤（新华社记者黄景达摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月26日，北京市交管局中心区支队二中队交警仁俊汉在东长安街指挥路面交通（新华社记者张晨霖摄）。</div><div style="text-indent:2em;text-align:justify">过去，交通警察在交通岗楼执勤，控制信号灯要靠手扳。只要有车走，交警的手就不能停。如今，交通管理手段不断朝着数字化、智能化、现代化发展，交警可以通过大数据判断车流量，用手中的遥控器控制信号灯。同时，随着我国机动车数量与日俱增，他们的工作强度比以往更大。无论刮风、下雨、烈日、严寒，从清晨到黄昏，甚至在深夜，都能看到交警执勤的身影。</div>'
				},
				{
					title: '公交车售票员',
					imgs: [
						'./assets/images/03/4-3.jpg',
						'./assets/images/03/3-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1960年，北京公交车售票员舒志英在车上售票（新华社记者黄景达摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月27日，乘客在杭州乘坐公交车时使用移动支付完成购票（新华社记者黄宗治摄）。</div><div style="text-indent:2em;text-align:justify">在中国许多城市，昔日的公交车售票员已无需上岗，通常由司机在自助购票机旁辅助值守。乘客购票的支付方式从纸票、月票、IC卡，发展到如今可以实现扫码乘车。公共交通的发展为人们出行提供了越来越多的便利。</div>'
				},
				{
					title: '特色种植农民',
					imgs: [
						'./assets/images/03/6-3.jpg',
						'./assets/images/03/5-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1962年，在山西永济，虞乡公社社员收摘中药红花（新华社记者董荣贵摄）。</div><div style="text-indent:2em;text-align:justify">2019年4月10日，山西平定县冠山镇后沟村村民在采摘连翘叶（新华社记者曹阳摄）。</div><div style="text-indent:2em;text-align:justify">随着人民生活水平的提高，人们对健康的重视度与日俱增，中药材等特色种植业发展迅速。在山西平定，当地因地制宜大力发展连翘种植产业，成立农业合作社吸纳附近村民务工。特色种植不仅拓宽了农民的增收渠道，更为他们脱贫致富打下坚实基础。</div>'
				},
				{
					title: '动画制作人',
					imgs: [
						'./assets/images/03/8-3.jpg',
						'./assets/images/03/7-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">上世纪60年代，动画片艺术家万籁鸣在构思彩色动画片《大闹天宫》（下集）中的人物形象（新华社记者林慧摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月20日，上海美术电影制片厂厂长、3D动画电影《孙悟空之火焰山》导演速达审看片中孙悟空的造型图（新华社记者刘颖摄）。</div><div style="text-indent:2em;text-align:justify">上世纪60年代，著名动画艺术家万籁鸣和他的团队为了创作动画片《大闹天宫》，用铅笔画了10万多张画面。如今，上海美术电影制片厂厂长速达和她的团队在创作电影《孙悟空之火焰山》（预计2021年上映）时使用了三维动画等高科技技术。国产动画片正在不断创造新的辉煌。2019年，《哪吒之魔童降世》成为首部总票房破40亿元的国产动画电影。</div>'
				},
				{
					title: '包钢工人',
					imgs: [
						'./assets/images/03/10-3.jpg',
						'./assets/images/03/9-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1960年，负责内蒙古包钢一号大平炉开炉生产的炼钢工人们在观察炉温上升情况（崔晓华摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月4日，内蒙古包头钢铁（集团）有限责任公司转炉总工长刘铭在转炉炼钢现场用对讲机指挥操作（新华社记者刘磊摄）。</div><div style="text-indent:2em;text-align:justify">包钢是内蒙古工业的标志，它的建成投产结束了内蒙古“手无寸铁”的历史。如今这座草原城市里的钢铁集团成为我国重要的钢铁生产基地。随着去产能、调结构的推进，包钢集团的生产技术和装备不断升级，自动化水平大大提高，实现了产品种类、质量和数量的提升。</div>'
				},
				{
					title: '电影放映员',
					imgs: [
						'./assets/images/03/12-3.jpg',
						'./assets/images/03/11-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1967年7月，在江西省于都县梓山公社上焦水库，放映员正在放映电影（王名益摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月2日，在江西省吉安市峡江县水边镇湖洲村，乡村电影放映员谢萍果（右一）在为村民们放电影。他从事这项工作已有41年（新华社记者彭昭之摄）。</div><div style="text-indent:2em;text-align:justify">几十年前，看电影是件隆重的事。电影院只在大城市有，农村地区放电影，全靠放映员人挑肩扛，翻山越岭，露天放映。那时电影放映还是胶片机时代，农村没电，放映员要带发电机、放映机，再加上其它放映设备，整套一百多斤，全部都需要自己扛。如今，放露天电影跟过去大不相同了，数字化技术替代了胶片，一台放映机加上一块幕布，就能把另一个世界展现在村民面前。在一些大城市，露天放映还与汽车电影院等形式相结合，成为时尚而怀旧的休闲方式。</div>'
				},
				{
					title: '文物修复师',
					imgs: [
						'./assets/images/03/14-3.jpg',
						'./assets/images/03/13-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1961年，新疆维吾尔自治区博物馆的工作人员正在修复从吐鲁番阿斯塔那古墓中发掘出来的唐代泥塑、马俑（新华社记者武纯展摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月30日，新疆维吾尔自治区博物馆文物科技保护中心工作人员梁江兵（左）、高愚民（中）、关懿在使用仪器设备修复文物（新华社记者胡虎虎摄）。</div><div style="text-indent:2em;text-align:justify">从简陋的工作条件、单一的修复工具、全靠手工的工作方式，到如今良好的办公环境，现代化文物修复仪器设备与传统工艺相结合的修复方法，文物修复工作者的工作方式发生了很大变化。文物修复软硬件条件明显改善，为保护传承历史文化提供了良好保障。</div>'
				},
				{
					title: '奶牛饲养员',
					imgs: [
						'./assets/images/03/16-3.jpg',
						'./assets/images/03/15-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1962年，黑龙江红色草原牧场星火牛场第二生产队饲养员王德成拿着奶瓶喂刚生下4天的犊牛（新华社记者胡伟摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月10日，黑龙江省牡丹江市红星有机森林牧场的牛舍内，工作人员张德玉在检查奶牛身体情况（新华社记者王建威摄）。</div><div style="text-indent:2em;text-align:justify">过去奶牛都是单头饲养，吃的是玉米秸秆，产奶量也比较低。近年来，我国涌现出一批大型乳企，国内大中型牧场崛起。现代化养殖不仅使产奶量增加，奶的品质也越来越好。2018年，全国牛奶产量达3075万吨。奶业转型升级加快，规模化养殖比例达62.1％。</div>'
				},
				{
					title: '幼儿园老师',
					imgs: [
						'./assets/images/03/18-3.jpg',
						'./assets/images/03/17-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">上世纪60年代，天津市和平区兴安路的一家幼儿园内，孩子们在保育员的看护下做游戏（新华社记者田明摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月8日，济南智慧苑幼儿园老师曹斐然（后）通过多媒体网络信息化教学平台给学生上课（新华社记者王凯摄）。</div><div style="text-indent:2em;text-align:justify">幼儿园是孩子离开父母走向“社会”的第一步，是孩子获得关爱、学习生活知识的欢乐天地。上世纪50年代，托儿所、幼儿园负责看管孩子的保育员被称为“阿姨”，绝大多数托儿所、幼儿园都很简陋，玩教具单一，饮食也不丰富。如今，许多幼儿园配有专业的幼儿教师，教室宽敞明亮、设施齐全，多媒体教学越来越普及。</div>'
				},
				{
					title: '大庆石油工人',
					imgs: [
						'./assets/images/03/20-3.jpg',
						'./assets/images/03/19-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">这是1965年大庆石油工人第一次取出长岩芯时的情景（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年6月26日，大庆油田1202钻井队党支部书记姜洪伟介绍正在使用的先进钻机（新华社记者王建威摄）。</div><div style="text-indent:2em;text-align:justify">上世纪60年代，大庆不仅带来了石油，更给全国人民带来了“大庆精神”。那时的石油工人更换套管，在钻台上至少要4个人同时施工，场地上还要有3个人。现在通过机械化、自动化程度高的钻机，1202钻井队工人基本不需要到钻台和场地上作业，操作人员在司钻房就能操作，高效快捷。</div>'
				}
			]
			,
			[
				{
					title: '厨师',
					imgs: [
						'./assets/images/04/2-3.jpg',
						'./assets/images/04/1-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1962年，山西太原林香斋饭店的厨师匡茂彩端出一盘新做的糖醋鱼（新华社记者花皑摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月6日，在山西太原林香斋饭店，厨师张澜在给糖醋鱼浇汁（新华社记者詹彦摄）。</div><div style="text-indent:2em;text-align:justify">张澜说，在林香斋饭店，经常听前辈们说起匡茂彩大厨，他在林香斋任职期间做了很多代表菜，香酥鸡、过油肉、糖醋鱼……得到了当时顾客广泛认可，获得了口口相传的好口碑。现在从事烹饪工作，相比以前食材更丰富，厨房设备更先进，食品卫生与安全方面的要求也更加严格。他希望自己和同事们能在继承传统烹饪技艺的基础上进行创新，做出与时俱进的菜品，让更多的顾客认可。</div>'
				},
				{
					title: '酿酒师',
					imgs: [
						'./assets/images/04/4-3.jpg',
						'./assets/images/04/3-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1963年9月20日，北京葡萄酒厂的厂长、技术人员和老工人正在品鉴即将出厂的白葡萄酒（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年6月24日，在位于宁夏银川市的张裕摩塞尔十五世酒庄，年轻的酿酒师于千、樊志强、张浩、王转荣（从左至右）正在品鉴酒庄生产的几款葡萄酒（新华社记者冯开华摄）。</div><div style="text-indent:2em;text-align:justify">从技术工人到专业化程度极高的酿酒师，酿酒师的职业变化见证着中国葡萄酒产业的迅速发展。葡萄种植和葡萄酒酿造技术日趋精进，中国的葡萄酒产品屡次在国际大赛中获奖，形成了一批在国内外具有一定市场认知度和影响力的葡萄酒品牌。葡萄酒产区的酒庄也迎来越来越多的“品酒”体验者和观光客。</div>'
				},
				{
					title: '出租车司机',
					imgs: [
						'./assets/images/04/6-3.jpg',
						'./assets/images/04/5-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1965年，北京首都汽车公司职工在出租站擦洗汽车（新华社记者郑震孙摄）。</div><div style="text-indent:2em;text-align:justify">2019年8月25日，北京新月联合出租汽车公司司机穆怀东一边运送乘客，一边通过网约车手机平台接收订单信息（新华社记者张笑宇摄）。</div><div style="text-indent:2em;text-align:justify">中国出租车行业发展迅速。从汽车出租不普及的年代到路上招手打车，再到手机软件叫车，快车、专车等各种网约车方便了人们的出行，出租车司机的工作效率也大大提高。</div>'
				},
				{
					title: '火车检修工',
					imgs: [
						'./assets/images/04/8-3.jpg',
						'./assets/images/04/7-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">上世纪70年代，江西省南昌市向塘机务段老司机长陈圣伦使用点检锤检查火车头轮对部件（向塘机务段提供）。</div><div style="text-indent:2em;text-align:justify">2019年5月31日，在上海动车段上海虹桥动车运用所，机械师对动车组检测机器人进行作业前预热启动（新华社记者陈飞摄）。这套系统可全自动检测所有型号动车组车底和转向架可视部件，具备数据无线传输以及故障自动判断功能。</div><div style="text-indent:2em;text-align:justify">蒸汽火车时代，火车检修工人很多工作主要靠人工，凭经验。工作环境脏乱差，每当工作完成后，车检工通常满身油污。如今，列车检修环境得到明显改善，检修工也由原来单纯使用点检锤锤检，到现在利用科技手段辅助检查，检修科技含量越来越高，故障发生率大幅下降。</div>'
				},
				{
					title: '丝织厂工人',
					imgs: [
						'./assets/images/04/10-3.jpg',
						'./assets/images/04/9-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1963年，浙江杭州云裳丝织厂技术革新小组在调试更新设备（新华社记者章耕辛摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月12日，工人钱琴姝在江苏苏州市吴江区盛泽镇江苏华佳丝绸股份有限公司车间进行络丝作业（新华社记者李响摄）。</div><div style="text-indent:2em;text-align:justify">从上世纪五六十年代使用自制的铁木丝织机，发展到如今使用剑杆织机、喷气喷水织机等设备，技术的改良提升了纺织工人的工作效率。一些纺织企业在智能制造的助力下，实现生产工序的自动化、数字化，降低了纺织工人的劳动强度。</div>'
				},
				{
					title: '水渠建设者',
					imgs: [
						'./assets/images/04/12-3.jpg',
						'./assets/images/04/11-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1963年，新疆吐鲁番五星公社社员在整修坎儿井渠道（新华社记者武纯展摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月7日，在新疆塔什库尔干塔吉克自治县达布达尔乡热斯喀木村，工人操作挖掘机铺设防渗、防蒸发的灌溉管道（新华社记者胡虎虎摄）。</div><div style="text-indent:2em;text-align:justify">从吐鲁番延续千年的地下灌溉工程坎儿井，到帕米尔高原上防渗、防蒸发的灌溉管道；从主要依靠人工修整，到机械施工……新疆当地百姓取水用水的渠道越来越多样。</div>'
				},
				{
					title: '乡村小学教师',
					imgs: [
						'./assets/images/04/14-3.jpg',
						'./assets/images/04/13-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1964年，在河北省煎茶铺公社西煎大队的一所耕读小学，知识青年高香兰在给学生们上语文课（新华社记者梁一丁摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月2日，在河北省清河县连庄小学，老师潘海丽用电子黑板为三年级学生上语文课（新华社记者朱旭东摄）。</div><div style="text-indent:2em;text-align:justify">经过几十年的发展，我国乡村小学教学环境和条件较新中国成立初期有了明显改善，从自制简单的教具、挂图、小黑板，变成了今天的投影仪、电脑、多媒体设备，上课方式日趋多样化和现代化，为教师的教学减轻了负担，也为学生的学习带来便捷。同时，我国乡村小学教师的学历结构不断优化，社会地位不断提升，乡村教师教学专业化程度越来越高，乡村教育事业得到了迅速发展。</div>'
				},
				{
					title: '潜水员',
					imgs: [
						'./assets/images/04/16-3.jpg',
						'./assets/images/04/15-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1961年，广州市航海俱乐部潜水教练员给潜水员戴上水下定向指南针准备潜水（新华社记者王南摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月23日，在海南省陵水黎族自治县分界洲岛旅游区，潜水教练符育铭（左）为即将带游客潜水的潜水长黄基全整理装备（新华社记者杨冠宇摄）。</div><div style="text-indent:2em;text-align:justify">新中国成立以来，潜水运动在我国逐渐发展起来，参与者越来越多。休闲潜水作为一种充满挑战性和趣味性的休闲方式，正逐渐走入人们的生活。随着现代科技的发展，潜水装备也从最初简单的气瓶、蛙鞋发展到现在的潜水电脑表、智能潜水辅助器等高科技设备，日趋多样先进。</div>'
				},
				{
					title: '采珠人',
					imgs: [
						'./assets/images/04/18-3.jpg',
						'./assets/images/04/17-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">上世纪60年代，广西北海市珠农在海上进行传统木桩海水珍珠养殖作业（北海南珠宫提供，翻拍照片）。</div><div style="text-indent:2em;text-align:justify">2019年6月15日，在广西北海市铁山港区的广西精工海洋科技有限公司，工作人员在室内海水珍珠工厂护理珠母贝（新华社记者张爱林摄）。</div><div style="text-indent:2em;text-align:justify">广西北海市享有“珠城”美誉，这里盛产有“中国海水珍珠皇后”之称的南珠。现在，南珠养殖由过去在海上进行的传统木桩海水养殖变成了现在的室内工厂一体化养殖，不受风浪、水温的影响，更有利于培育优质珍珠。</div>'
				},
				{
					title: '电力工人',
					imgs: [
						'./assets/images/04/20-3.jpg',
						'./assets/images/04/19-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1969年，在贵州省贵阳市乌当区，两名水电技术员在检修电路（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年6月24日，在天津市武清区王庆坨镇，国网天津检修公司特高压输电运检室无人机巡检班的电力工人司浩宇依照“迎峰度夏特巡”要求，在鲁固、锡泰、廊河三条特高压输电线路并行处开展无人机巡检工作，确保输电安全（新华社记者李然摄）。</div><div style="text-indent:2em;text-align:justify">据国网天津检修公司介绍，通过运用无人机对输电线路进行巡检，省时省力，准确高效，能及时排除电路安全隐患。</div>'
				}
			],
			[
				{
					title: '兵马俑文物保护工作者',
					imgs: [
						'./assets/images/05/2-3.jpg',
						'./assets/images/05/1-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1974年，时任秦始皇兵马俑考古队领队的袁仲一在陕西西安兵马俑一号坑发掘现场进行文物清理工作（秦始皇帝陵博物院提供）。</div><div style="text-indent:2em;text-align:justify">2019年7月4日，秦始皇帝陵博物院文物保护部副研究员兰德省在兵马俑一号坑修复现场对新修复的兵马俑进行彩绘加固保护（新华社记者李一博摄）。</div><div style="text-indent:2em;text-align:justify">1974年，兵马俑的发现震惊了世界。1987年，联合国教科文组织将秦始皇陵及兵马俑坑列入《世界遗产名录》。位于陕西省西安市临潼区的秦始皇帝陵博物院先后建立了显微分析实验室、扫描电镜实验室、微生物实验室、文物保存环境实验室、化学实验室、彩绘文物修复室、综合文物修复室等，用最先进的文物科技保护技术为兵马俑的保护修复提供保障，文物修复工作者的工作方式也进入科技时代，兵马俑修复多项技术获得国家专利。</div>'
				},
				{
					title: '沙漠科研人员',
					imgs: [
						'./assets/images/05/4-3.jpg',
						'./assets/images/05/3-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1979年，中国科学院新疆分院生物沙漠土壤研究所科研人员夏训诚（右一）在罗布泊西部取沙漠样品（新华社记者赵昌春摄）。</div><div style="text-indent:2em;text-align:justify">2019年5月30日，中国生态系统研究网络沙坡头沙漠实验研究站工作人员王炳尧（右）、李云飞在宁夏中卫市境内腾格里沙漠南缘检测沙丘表面温度（新华社记者王鹏摄）。</div><div style="text-indent:2em;text-align:justify">上世纪50年代，新中国开始对沙漠进行治理。我国沙漠科学家从研究沙漠开始入手，发明了中国的“治沙神器”草方格。1977年，作为中国治沙经验的沙坡头麦草方格，获得国外专家一致认可，并成为最早向世界输出的中国治沙方案。近年来，我国国土绿化和防沙治沙工程不断推进，从“沙进人退”到“绿进沙退”的历史性转变，离不开一代代沙漠科研人员的努力奋斗。</div>'
				},
				{
					title: '电视生产者',
					imgs: [
						'./assets/images/05/6-3.jpg',
						'./assets/images/05/5-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1975年，广东中山无线电厂工人在装配电视机（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年6月11日，在广东惠州，TCL电子高级工程师张琪（中）在TCL AI电视生产线上测试机器人工作状况（新华社记者刘大伟摄）。</div><div style="text-indent:2em;text-align:justify">电视机的出现极大丰富了人们的精神和文化生活。随着时代的发展，电视机的生产也由过去的人工制造变为智能化生产，机器人技术、自动化技术的应用大幅提高了生产效率。</div>'
				},
				{
					title: '外科医生',
					imgs: [
						'./assets/images/05/8-3.jpg',
						'./assets/images/05/7-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1975年，在广东中山，卫生院的外科大夫在为病人做胆切除手术（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年7月18日，在位于广东广州的中山大学附属第一医院，泌尿外科主任陈凌武教授（左）运用“机器人辅助腹腔镜”进行一台输卵管狭窄整形手术（新华社记者刘大伟摄）。</div><div style="text-indent:2em;text-align:justify">外科手术技术和相关手术辅助医疗设备的进步，给医务工作者的工作方式带来变化，为患者的治疗和康复提供了更好的条件。</div>'
				},
				{
					title: '巡道工',
					imgs: [
						'./assets/images/05/10-3.jpg',
						'./assets/images/05/9-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1977年，河南郑州铁路局信阳分局孝子店养路工区巡道工芦利连在夜间巡道（新华社记者樊鸣涛摄）。</div><div style="text-indent:2em;text-align:justify">2019年1月21日，中国铁路郑州局集团有限公司郑州工务机械段的钢轨探伤工准备出乘作业（新华社记者李安摄）。</div><div style="text-indent:2em;text-align:justify">过去，巡道工只能走上铁轨，通过观察、用锤子敲等方法探查轨道。如今，巡道作业引入探伤车等先进设备辅助人工巡查。探伤工驾驶钢轨探伤车在铁路线上穿梭忙碌，为钢轨“把脉问诊”，及时发现并消除钢轨问题隐患。</div>'
				},
				{
					title: '景德镇陶瓷生产者',
					imgs: [
						'./assets/images/05/12-3.jpg',
						'./assets/images/05/11-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1978年，江西景德镇为民瓷厂工人在生产日用瓷（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年7月26日，在江西景德镇陶溪川文创街区的陶瓷3D打印体验中心，工作人员黄旭用3D打印技术制作陶瓷花瓶（新华社记者万象摄）。 </div><div style="text-indent:2em;text-align:justify">被誉为“中国瓷都”的景德镇，改革开放后因瓷重生。如今，从日用陶瓷到精细陶瓷、特种陶瓷、科技陶瓷等，景德镇正在打造陶瓷创新链、文化链、产业链。2017年，景德镇陶瓷产业产值达372亿元，艺术陈设瓷、高技术陶瓷占陶瓷总产值的近一半。</div>'
				},
				{
					title: '列车员',
					imgs: [
						'./assets/images/05/14-3.jpg',
						'./assets/images/05/13-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1977年，河北石家庄分局石家庄列车段的列车员邸敬茹为乘客送热水（新华社记者朱力摄）。</div><div style="text-indent:2em;text-align:justify">2019年1月21日，在重庆西开往广州南的D1867次列车上，列车员在车厢内为旅客送上新春祝福（包亮摄）。</div><div style="text-indent:2em;text-align:justify">新中国成立以来，伴随着列车提速升级和车厢环境改善，列车员的着装与仪容也发生了显著变化。现在，列车员的作业流程更加规范化，工作中也更加注重细节，力求为旅客出行提供更专业、更优质的服务。</div>'
				},
				{
					title: '坭兴陶技艺传承人',
					imgs: [
						'./assets/images/05/16-3.jpg',
						'./assets/images/05/15-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1973年，李人帡（左二）在广西钦州坭兴陶工厂学习制作坭兴陶技艺（李人帡提供）。</div><div style="text-indent:2em;text-align:justify">2019年6月14日，李人帡（左二）在车间研究坭兴陶雕刻制作工艺（新华社记者张爱林摄）。</div><div style="text-indent:2em;text-align:justify">李人帡上个世纪70年代初涉足坭兴陶艺，是坭兴陶国家级代表性传承人。从钦州坭兴工艺厂雕刻技工到现在的钦州坭兴陶工艺美术研究所副所长，李人帡与坭兴陶结下不解之缘。据他介绍，钦州坭兴陶以前受技术制约，成品率低、精品更少。现在随着各项技术难关的突破，坭兴陶的窑变成品率提高到90%以上，日用陶产品畅销国内外。</div>'
				},
				{
					title: '图书馆管理员',
					imgs: [
						'./assets/images/05/18-3.jpg',
						'./assets/images/05/17-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1979年，湖北省武汉市少年儿童图书馆工作人员为小读者准备暑期儿童读物（新华社记者张申明摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月21日，湖北省图书馆工作人员何菁在借阅区巡查（新华社记者熊琦摄）。</div><div style="text-indent:2em;text-align:justify">“我刚来图书馆的时候，全都是手工借还，图书馆工作人员要给每本书做一个卡片，读者只有通过卡片才能找到书。现在，读者通过自动查询系统就能找到自己想找的图书。”何菁说。随着图书馆数字化技术的引入，简化了工作人员的工作流程，给读者带来了更好的借阅体验。</div>'
				},
				{
					title: '导游',
					imgs: [
						'./assets/images/05/20-3.jpg',
						'./assets/images/05/19-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1979年，在江苏无锡，上海旅行社的导游向游客介绍太湖风光（新华社记者唐允礼摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月29日，上海锦江旅游的导游颜紫千带着来自哥伦比亚的游客游览上海豫园（新华社记者刘颖摄）。</div><div style="text-indent:2em;text-align:justify">上世纪80年代初，假日旅游还是个新鲜事物，那时的导游更多的是带着国内游客在附近旅游。如今，越来越多的外国人到中国旅游，很多导游成为了“民间使者”，向外国游客介绍中国的风土人情。</div>'
				}
			],
			[
				{
					title: '环卫工人',
					imgs: [
						'./assets/images/06/2-3.jpg',
						'./assets/images/06/1-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1983年，湖北省黄石市城乡建设局市政工程管理处下水道班的工人进行清污工作（燕杨摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月25日，山东省高唐县市政路桥工程有限责任公司员工金兴环用遥控器操纵清淤车，对城区污水管道检查井沉淀池进行清掏作业（新华社记者王凯摄）。</div><div style="text-indent:2em;text-align:justify">排淤工人是城市血管的“清道夫”，他们经常穿梭在地下管网中，在黑暗、污浊、臭气熏人的排水井下为城市清理阻塞物和泥浆。近年来，机械化设备被应用在环卫工作中，排淤工作效率大大提升。</div>'
				},
				{
					title: '保姆与月嫂',
					imgs: [
						'./assets/images/06/4-3.jpg',
						'./assets/images/06/3-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1988年，在重庆九龙坡区，保姆杨钟英（左）为乡村医生李文蓉（右）带孩子（新华社记者刘诗临摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月3日，月嫂陈玉容（右）和护士何秀丽在安徽合肥一家月子中心为婴儿做护理。陈玉容在月子中心的工作是照顾婴儿和产妇的日常生活，何秀丽的工作侧重于关注婴儿和产妇的日常护理（新华社记者刘军喜摄）。</div><div style="text-indent:2em;text-align:justify">上世纪80年代，随着城市生活的发展，一些家庭需要有人帮忙照看老人、儿童及料理家务，保姆职业为解决这一需求逐渐发展起来。如今，家政服务已经成为城市居民生活的一项普遍需求，从保姆、小时工到专业的育儿嫂、儿童营养师，家政服务更加专业化、细化。</div>'
				},
				{
					title: '火车司机',
					imgs: [
						'./assets/images/06/6-3.jpg',
						'./assets/images/06/5-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1987年，一名火车司机驾驶内燃机车在广西境内行驶（中国铁路南宁局集团有限公司提供）。</div><div style="text-indent:2em;text-align:justify">2018年6月26日，一名动车司机驾驶动车在广西南宁市境内行驶（新华社记者陆波岸摄）。</div><div style="text-indent:2em;text-align:justify">过去，火车司机用电话联系前方站确认进站股道和信号开放情况，依靠人工观察前方信号灯；现在，这些工作已被信号全自动采集系统替代。列车驾驶室操作台机械化控制被数字化控制所取代，司机的工作环境发生了巨大改变。</div>'
				},
				{
					title: '乡村医生',
					imgs: [
						'./assets/images/06/8-3.jpg',
						'./assets/images/06/7-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1986年，在广东省连南瑶族自治县，乡村医生房志荣（右二）下乡为群众看病（新华社记者周家国摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月18日，福建武夷山市上梅乡茶景村乡村医生余淼春（右）上门为贫困老人罗春风（左三）看病（新华社记者张国俊摄）。</div><div style="text-indent:2em;text-align:justify">虽然现在农村整体医疗条件有了很大改善，但对于偏远乡村来说，仍非常需要长期扎根的乡村医生。今年42岁的余淼春19岁从卫校毕业后回到家乡当村医。20多年来，他奔走在茶景村各处，为方圆十几公里的乡亲送医送药。</div>'
				},
				{
					title: '民宿经营者',
					imgs: [
						'./assets/images/06/10-3.jpg',
						'./assets/images/06/9-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1984年7月，在内蒙古呼和浩特，刘玉林在自家人开设的新成旅馆为客人准备卧具（新华社记者施长江摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月30日，浙江省宁波市奉化区大堰镇明湖山庄民宿经营者李华在院子里打理花草（新华社记者黄宗治摄）。</div><div style="text-indent:2em;text-align:justify">来自江苏常州的李华2017年开始在浙江宁波的偏远山村与朋友合伙经营民宿，现有的12间客房由村里的老建筑改造而来。“来住的客人都可以感受到我是用心在服务，我经常带着客人一起在乡间玩耍，他们如同住在自己家里一样。”李华说。近年来，民宿产业蓬勃发展，对发展乡村旅游、实现乡村振兴发挥着重要作用。</div>'
				},
				{
					title: '海岸巡逻人员',
					imgs: [
						'./assets/images/06/12-3.jpg',
						'./assets/images/06/11-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">上世纪80年代，原武警海南边防总队海口支队官兵在执行巡逻任务（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年6月25日，海南省公安厅海岸警察总队（筹备组）海口支队民警在海口湾水域执行巡逻任务（新华社记者杨冠宇摄）。</div><div style="text-indent:2em;text-align:justify">新中国成立以来，海南省海岸巡逻警用装备、信息化建设越来越先进，环海南岛防控一体化建设也越来越完善。</div>'
				},
				{
					title: '建筑工人',
					imgs: [
						'./assets/images/06/14-3.jpg',
						'./assets/images/06/13-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1984年，重庆市第一建筑工程公司工人在该公司工地施工（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年7月9日，中铁十五局工人在重庆鹅公岩轨道专用桥施工现场作业（新华社记者王全超摄）。</div><div style="text-indent:2em;text-align:justify">城市的日新月异，离不开建筑工人的勤劳与汗水。如今，建筑工人的专业化程度、知识与技能有了较大提升，建筑工地的管理和运作也更加安全、科学和人性化。</div>'
				},
				{
					title: '道工程人员',
					imgs: [
						'./assets/images/06/16-3.jpg',
						'./assets/images/06/15-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1982年，铁道兵第八师指战员在引滦入津工程隧道施工中人工装运石渣。</div><div style="text-indent:2em;text-align:justify">2019年5月25日，中铁十八局集团有限公司（原铁道兵第八师）的建设者在玉磨铁路（玉溪至磨憨）大尖山隧道施工中用钻孔台车作业。</div><div style="text-indent:2em;text-align:justify">中国人民解放军铁道兵是一支从战火中诞生、修路中成长的铁道工程部队。1984年兵改工后，这支筑路队伍继承和发扬了原铁道兵部队“志在四方，前无险阻，逢山筑路，遇水架桥”的光荣传统。他们生活和战斗在最艰苦的地方，为祖国的铁路、水电等建设做出了巨大贡献；他们的工作也从以前落后的施工作业发展到现在的机械化作业和科学管理，实现了质的飞跃。</div><div style="text-indent:2em;text-align:justify">新华社记者杨宗友摄</div>'
				},
				{
					title: '大熊猫饲养员',
					imgs: [
						'./assets/images/06/18-3.jpg',
						'./assets/images/06/17-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1984年，原四川省平武县林业局助理工程师钟肇敏（左）给野生大熊猫幼崽“龙龙”喂食（新华社记者金勖琪摄）。</div><div style="text-indent:2em;text-align:justify">5月26日，在中国大熊猫保护研究中心卧龙神树坪基地，饲养员在照顾“熊猫幼儿园”内的大熊猫（新华社记者薛玉斌摄）。</div><div style="text-indent:2em;text-align:justify">2016年，世界自然保护联盟将大熊猫从“濒危”物种调整为“易危”物种。这不仅仅是中国不懈努力的结果，也是全球保护工作的重大成果之一。如今，中国大熊猫保护工作者传承老一辈精神，不仅攻克了圈养大熊猫人工繁育“发情难”“配种受孕难”“育幼成活难”三大难题，还在不断增加大熊猫野化放归数量，努力改善野生大熊猫遗传多样性，实现大熊猫野外种群的可持续发展。</div>'
				},
				{
					title: '义乌小商品经营者',
					imgs: [
						'./assets/images/06/20-3.jpg',
						'./assets/images/06/19-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">这是1982年9月开业的浙江义乌第一代小商品市场（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年6月26日，在义乌国际商贸城经营圣诞用品的朱爱娟（右）向外国客商展示样品（新华社记者黄宗治摄）。</div><div style="text-indent:2em;text-align:justify">曾经，三面环山的义乌人迫于生计，走街串巷，易物换钱。如今，“鸡毛换糖”的马路市场早已成为“世界超市”。目前，义乌拥有市场经营面积640余万平方米，经营商位7.5万个，汇集26个大类、210多万种商品。</div>'
				}
			],
			[
				{
					title: '理发师',
					imgs: [
						'./assets/images/07/2-3.jpg',
						'./assets/images/07/1-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1987年，上海市南京美发公司特级理发师张学明（左）和同事在为两名女士设计发型（新华社记者柳中央摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月26日，在上海市南京美发公司，发型师李德中在为客户整理发型（新华社记者丁汀摄）。</div><div style="text-indent:2em;text-align:justify">李德中告诉记者，上海市南京美发公司是一家拥有87年历史的老店，靠着良好的口碑和品牌形象走到今天，店中老师傅最长的已在此工作43年。现在，年轻的发型师在老师傅的言传身教下，在保留过硬基本功的同时更加注重潮流元素，借助先进的美发设备，为顾客设计出更时尚的发型。</div>'
				},
				{
					title: '火车站售票员',
					imgs: [
						'./assets/images/07/4-3.jpg',
						'./assets/images/07/3-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1988年，在广西南宁，售票员使用老式电脑出售车票（中国铁路南宁局集团有限公司提供）。</div><div style="text-indent:2em;text-align:justify">2019年6月14日，在广西南宁东站，车站售票员廖苑在窗口为旅客办理实名制车票售票业务（新华社记者陆波岸摄）。</div><div style="text-indent:2em;text-align:justify">新中国成立以来，铁路售票购票经历了多次变化。从手工制票到电脑售票，再到如今的实名制互联网电子购票以及自助购票，乘客购买火车票更加规范、方便和快捷。</div>'
				},
				{
					title: '主持人',
					imgs: [
						'./assets/images/07/6-3.jpg',
						'./assets/images/07/5-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1989年，在位于四川成都市青羊区东胜街的四川电视台演播间，播音主持人钟晓霞在播报四川新闻（钟晓霞提供）。</div><div style="text-indent:2em;text-align:justify">2019年7月16日，在位于四川成都市高新区天府大道的四川广播电视台演播间，播音主持人钟晓霞在播报四川新闻（新华社记者江宏景摄）。</div><div style="text-indent:2em;text-align:justify">作为一名播音主持人，钟晓霞1987年进入四川电视台工作，从事这个行业已有30余年。她见证了电视行业的发展——演播背景由一块布变成现在由几十块大屏组成的LED背景；布光由最初人工控制的三五盏灯到现在智能控制的几十盏灯；录像设备由当年的标清摄像机发展到现在的4K、8K摄像机；演播室由十几平方米扩大到现在的几百平方米，由最初单纯的播音室发展为可录制新闻节目、访谈节目，并可供几十位编辑、记者同时线上使用的多区域、多功能、多媒体演播室。</div>'
				},
				{
					title: '苏州绣娘',
					imgs: [
						'./assets/images/07/8-3.jpg',
						'./assets/images/07/7-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1981年，江苏苏州越溪公社社员在业余时间刺绣（新华社记者高梅及摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月11日，在江苏省苏州市镇湖街道苏绣小镇，姚惠芬（左）和妹妹姚惠琴研究苏绣作品的刺绣针法（新华社记者李响摄）。</div><div style="text-indent:2em;text-align:justify">苏绣是中国四大名绣之一。出生于刺绣世家的姚惠芬首创了“简针绣”技法，并对中国水墨写意刺绣及人物肖像刺绣进行了大胆探索，在刺绣技法和审美内涵方面取得许多突破。</div>'
				},
				{
					title: '测量工程师',
					imgs: [
						'./assets/images/07/10-3.jpg',
						'./assets/images/07/9-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1984年，重庆市第一建筑工程公司测量工程师在该公司工地施工现场作业（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年1月17日，中建三局测量工程师在重庆万科超高层项目二期塔楼施工现场作业（新华社记者王全超摄）。</div><div style="text-indent:2em;text-align:justify">随着工程建设技术的不断发展，大型工程建设项目的不断开工，工程测量的应用获得较大发展，测量工程师也逐渐成为热门职业，同时也有了更高的职业要求。</div>'
				},
				{
					title: '列车生产者',
					imgs: [
						'./assets/images/07/12-3.jpg',
						'./assets/images/07/11-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">这是上世纪90年代的长春客车厂载客列车装配生产线（资料照片）。</div><div style="text-indent:2em;text-align:justify">2019年6月20日，中车长春轨道客车股份有限公司（中车长客）工人唐建坤（前）在中车长客高速动车组制造中心检查“复兴号”动车组列车底部电气系统（新华社记者张楠摄）。</div><div style="text-indent:2em;text-align:justify">从“绿皮车”到“复兴号”高铁，从时速80公里到时速350公里，中国载客列车几经更迭换代。如今，中国高铁已成为中国的一张闪亮名片，工作在列车生产线上的劳动者们见证了中国高铁告别跟跑者历史、驶向领跑者位置的新征程。</div>'
				},
				{
					title: '雕刻师',
					imgs: [
						'./assets/images/07/14-3.jpg',
						'./assets/images/07/13-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1988年，福建泉州市惠安县石雕厂影雕师刘碧兰在石头上雕刻（新华社记者黄兴泉摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月9日，福建省工艺美术大师、非遗项目惠安石雕代表性传承人张振雄（左）与公司员工一起雕刻彩色影雕作品（新华社记者魏培全摄）。</div><div style="text-indent:2em;text-align:justify">福建惠安石雕已有上千年历史，2006年入选首批国家级非物质文化遗产名录。影雕技艺自古“传女不传男”，影雕工人过去只雕刻黑白影雕。如今，“传女不传男”的传统早已打破。惠安县目前拥有一大批影雕大师团队和数万名相关从业人员。随着产业不断转型升级，彩色影雕成为主流，产品远销日本、韩国等100多个国家和地区。</div>'
				},
				{
					title: '蔬菜种植户',
					imgs: [
						'./assets/images/07/16-3.jpg',
						'./assets/images/07/15-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1997年，山东寿光五台镇仉东村的程淑英在大棚里收摘新近引进的状元红甜瓜（新华社记者张鲁成摄）。</div><div style="text-indent:2em;text-align:justify">2019年6月26日，山东寿光稻田镇崔西村村民崔新建演示用手机APP调节大棚的温度和湿度（新华社记者朱峥摄）</div><div style="text-indent:2em;text-align:justify">上世纪80年代末，山东寿光农民率先在国内利用冬暖式大棚种植反季节蔬菜，成为中国北方地区的一个重要蔬菜基地。如今，寿光农民借助先进的“物联网”技术，大力推广水肥一体化、智能放风机、植物生长灯等先进设备，菜农足不出户就能实现对蔬菜大棚的监管，引领大棚发展的现代化转型。</div>'
				},
				{
					title: '青藏高原教师',
					imgs: [
						'./assets/images/07/18-3.jpg',
						'./assets/images/07/17-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1991年，拉萨市一所小学学前班的孩子们在老师的指导下书写藏文字母（新华社记者觉果摄）。</div><div style="text-indent:2em;text-align:justify">2019年7月5日，西藏拉萨市海城小学学生在老师强巴格桑指导下上电脑课（新华社记者普布扎西摄）。</div><div style="text-indent:2em;text-align:justify">过去，西藏的老师们大多在简易的教室里教书。随着现代教育的办学规模不断扩大，西藏学校的教学环境大大改善。如今，西藏已全面落实15年义务教育免费“三包”政策，农牧区家长的教育观念也越来越强。</div>'
				},
				{
					title: '摄影记者',
					imgs: [
						'./assets/images/07/20-3.jpg',
						'./assets/images/07/19-3.jpg',
					],
					desc: '<div style="text-indent:2em;text-align:justify">1997年10月15日，摄影记者在上海市八运会曲棍球场上使用胶片相机和长焦镜头拍摄（新华社记者焦卫平摄）。</div><div style="text-indent:2em;text-align:justify">2017年8月11日，新华社摄影记者在山东青岛奥帆中心操作无人机（新华社发）。</div><div style="text-indent:2em;text-align:justify">新中国成立以来，随着经济的发展和科技的进步，媒体工作者的工作方式发生了巨大改变。摄影记者手中的器材从单纯的胶片相机发展到数码相机，再到无人机等各种新型设备。新技术与摄影结合，拓展了记者的采访领域和拍摄手段，丰富了报道内容，新闻记者正以崭新姿态迎接融媒体时代的到来。</div>'
				}
			]
		],
		$$: function (selector) {
			return document.querySelectorAll(selector);
		},
		secretKey: "e9469538b0623783f38c585821459454",
		host: "https://activity.xhsxmt.com", //测试域名：https://testxlive.xinhuaapp.com
		layout: function () {
			var faceImgs = '';

			for (var i = 1; i <= 15; i++) {
				faceImgs += "<div class='zmiti-face'><img draggable='false' src='./assets/images/" + i + ".gif'/></div>"
			}
			var html = '';
			var s = this;
			var className = ''
			this.imgList[this.currentIndex].forEach(function (img, i) {
				if (img.title) {


					
					if (s.zmitiTitle.classList.contains('hide')) {
						className = 'hide'
					}

					html += "<div class='zmiti-team zmiti-swpier-item " + className + " '>\
                                        <h3 class='zmiti-header'>"+ (i + 1) + "、" + img.title + "</h3>\
                                        <div class='zmiti-img-box'>\
                                            <img draggable='false' src='"+ img.imgs[0] + "' class='zmiti-img' />\
                                            <img draggable='false' src='"+ img.imgs[1] + "' class='zmiti-img' />\
                                            <canvas width='750' ></canvas>\
											<div class='zmiti-swipe-bar'></div>\
											<img src='./assets/images/heart.png' class='zmiti-heart' />\
                                        </div>\
                                        <div class='zmiti-swiper-bottom'>\
                                            <span>"+ img.desc + "</span>\
                                        </div>\
                                        <div class='zmiti-like'>\
                                            <img draggable='false' src='./assets/images/like1.png'/>\
                                            <span class='zmiti-img-like-num'>0</span>\
                                            "+ faceImgs + "\
                                        </div>\
                                    </div>"
				}
			})


			var s = this;
			(this.$('#container').innerHTML = html);
			console.log(this.$('#container'))
			var next = '——精彩延续 敬待下期';
			if(this.currentIndex>=6){
				next =  '';
			}
			this.$('#container').innerHTML += "<div class='zmiti-swpier-item " + className + "' style='text-align:center;text-indent:0;' id='zmiti-group-name'>第" + (this.currentIndex + 1) + "期" + next + "<div style='display:" + (!next? 'block':'none')+";text-align:left;text-indent:1em'>往期回顾</div></div>"

			var prevsObj = document.createElement('div');
			prevsObj.className = "zmiti-swpier-item zmiti-prev-list " + className;
			for(var i = 0; i < this.currentIndex;i++){
				var name = i === 0 ? '':'_'+(i+1);
				var href = window.location.protocol + '//h5.zhongguowangshi.com/h5/' + window.h5name + '/index' + name+'.html';
				prevsObj.innerHTML += '<div><a href="' + href +'">第' + (i + 1) +'期</a></div>';
			}

			this.$('#container').appendChild(prevsObj);

			var likes = this.$$('.zmiti-like');
			likes.forEach(function (like, k) {
				var faces = like.querySelectorAll('.zmiti-face');
				var facesAry = [];
				faces.forEach(function (face, i) {
					facesAry.push(new Face({
						obj: face
					}));
				});
				t = null;

				like.index = k;
				like.addEventListener('touchend', function () {
					if (t === null) {
						t = setInterval(function () {
							facesAry.forEach(function (face) {
								face.animate();
							})
						}, 30);
						s.like(this.index, like);
					}
					setTimeout(function () {
						clearInterval(t);
						t = null;
						facesAry.forEach(function (face) {
							face.init();
						});
					}, 1000);
				});
			})
		},
		like: function (index) {
			var s = this;
			var $$ = this.$$;
			axios.post(s.host + '/activity/num/updateNum', ({
				"secretKey": s.secretKey, // 请求秘钥
				"nm": "70年70行-" + (s.currentIndex + 1) + "-" + (index + 1) // 活动某组图片点赞标识 或者活动某组图片浏览量标识 标识由更新接口定义
			})).then(function (data) {
				var dt = data.data;
				if (typeof dt === 'string') {
					dt = JSON.parse(dt);
				}
				if (dt.rc === 0) {
					var numObj = $$(".zmiti-swpier-item")[index].querySelector('.zmiti-img-like-num');
					if (numObj) {
						numObj.innerHTML = numObj.innerHTML * 1 + 1;
					}
				}
			});

		},
		getPV: function (id) {
			var s = this;
			var $$ = this.$$;
			axios.post(this.host + '/activity/num/getNum', ({
				"secretKey": s.secretKey,  // 请求秘钥
				"nm": "70年70行-" + (s.currentIndex + 1) + "-" + id // 活动某组图片点赞标识 或者活动某组图片浏览量标识 标识由更新接口定义
			})).then(function (data) {
				var dt = data.data;
				if (typeof dt === 'string') {
					dt = JSON.parse(dt);
				}
				if ($$(".zmiti-swpier-item")[id - 1].querySelector('.zmiti-img-like-num')) {
					$$(".zmiti-swpier-item")[id - 1].querySelector('.zmiti-img-like-num').innerHTML = dt.data.num;
				}
			});
		},
		init: function () {

			var index = this.currentIndex;
			var imgList = [
				'./assets/images/right1.png',
				'./assets/images/error1.png',
				'./assets/images/edit.png',
			];
			var s = this;
			setTimeout(() => {
				s.$('#loading').classList.add('show');
			}, 100);
			this.imgList.forEach(function (imgs, l) {
				l === s.currentIndex && imgs.forEach(function (img, i) {
					imgList = imgList.concat(img.imgs);
				});
			})

			var pro = s.$('#progress');
			s.$('#loading').addEventListener('touchmove', function (e) {
				e.preventDefault();
			})
			this.container = this.container || this.$('#container');
			this.zmitiTitle = this.zmitiTitle || s.$('#zmiti-title-C');
			var className = ''
			/* if (this.zmitiTitle.classList.contains('hide')) {
				className = 'hide'
			} */

			this.container.innerHTML = '<div class="zmiti-swpier-item ' + className + ' loading" style="height:800px;position:relative;z-index:1;"><span  id="zmiti-loading-text">数据加载中...</span></div>';
			var loadingText = s.$('#zmiti-loading-text');
			this.loading(imgList, function (e) {
				pro.innerHTML = (e * 100 | 0) + "%";
				loadingText.innerHTML = '数据加载中...' + (e * 100 | 0) + "%";
			}, function () {
				
				setTimeout(function () {
					s.$('#loading').classList.remove('show');
					s.$('.zmiti-main-ui').classList.add('active');
					s.layout();
					s.setSize();
					s.bindEvent();
				}, 110)



				s.imgList[index].forEach(function (img, i) {
					s.getPV(i + 1);
				});

				axios.post(s.host + '/activity/num/updateNum', ({
					"secretKey": s.secretKey, // 请求秘钥
					"nm": "70年70行总浏览" // 活动某组图片点赞标识 或者活动某组图片浏览量标识 标识由更新接口定义
				})).then(function (data) {
					var dt = data.data;
					if (typeof dt === 'string') {
						dt = JSON.parse(dt);
					}

				});


				/* axios.post(s.host + '/xhs-security-activity/activity/num/getNum', {
					"secretKey": s.secretKey, // 请求秘钥
					"nm": "xhs-image40-pv"
				}).then(function (data) {
					var dt = data.data;
					if (typeof dt === 'string') {
						dt = JSON.parse(dt);
					}

					console.log(dt);
				});
*/

			})
		},
		initCanvas: function () {
			var self = this;
			document.addEventListener('touchmove',function(e){
			
			})
			this.canvases.forEach(function (item, i) {
				///var {canvas,imgs,box,offsetLeft} = item;
				var canvas = item.canvas,
					box = item.box,
					imgs = item.imgs,
					offsetLeft = item.offsetLeft;
				var context = canvas.getContext('2d');
				var img = new Image();
				var s = 0.5;
				img.addEventListener('load', function () {
					var scale = this.width / canvas.width;
					context.drawImage(imgs[0], 0, 0, canvas.width, canvas.height);
					setTimeout(function () {
						context.drawImage(imgs[1], 0, 0, canvas.width * scale * s, canvas.height * scale, 0, 0, canvas.width * s, canvas.height);
					}, 100)
					var bar = box.querySelector('.zmiti-swipe-bar');
					var doc = document;
					function start(e) {

						var node = e.target.parentNode.parentNode;
						var index = -1;
						self.$$(".zmiti-main-ui .zmiti-swpier-item").forEach(function (item, i) {
							if (item === node) {
								index = i;
							}
						});


						
						var heart = doc.querySelectorAll('.zmiti-heart')[index];
						heart.classList.add('active')
						heart.addEventListener('animationend', function () {
							this.classList.remove('active');
						});

						
						

						index > -1 && self.like(index);

						
						var h = 0
						if (self.zmitiTitle.classList.contains('hide')) {
							h = 700
						}
						heart.style.left = (e.changedTouches[0].pageX / 750) * 100 + '%';

						heart.style.top = e.changedTouches[0].pageY - self.$('#container').offsetTop + h - box.offsetTop + 'px';

						//e.preventDefault();

						document.ontouchmove = function (e) {
							var pageX = e.changedTouches[0].pageX;
							s = (pageX - offsetLeft) / canvas.width;
							context.clearRect(0, 0, canvas.width, canvas.height);
							context.drawImage(imgs[0], 0, 0, canvas.width, canvas.height);

							context.drawImage(imgs[1], 0, 0, canvas.width * scale * s, canvas.height * scale, 0, 0, canvas.width * s, canvas.height);
							bar.style.left = Math.min(Math.max(s * 100, 0), 99) + '%';
							
						}
						document.ontouchend = function (e) {
							// e.preventDefault();
							document.ontouchmove = null;
							document.ontouchend = null;
							var ss = s;
							setTimeout(function () {
								var t = setInterval(function () {
									if (s > .5) {
										s -= .04;
									}
									else {
										s += .04;
									}
									if (Math.abs(s - .5) <= .08) {
										s = .5;
										clearInterval(t);
									}

									context.clearRect(0, 0, canvas.width, canvas.height);
									context.drawImage(imgs[0], 0, 0, canvas.width, canvas.height);

									context.drawImage(imgs[1], 0, 0, canvas.width * scale * s, canvas.height * scale, 0, 0, canvas.width * s, canvas.height);
									bar.style.left = Math.min(Math.max(s * 100, 0), 99) + '%';


								}, 20);
							}, 100)


						}
					
					}

					box.querySelector('.zmiti-img-box').addEventListener('touchstart', function (e) {
						start(e);
						// return false;
					});

					box.querySelector('.zmiti-img-box').addEventListener('touchmove', function (e) {
						
					});

					
				})

				img.src = imgs[0].src;
			});
		},
		getQueryString: function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return (r[2]);
			return null;
		},
		setSize: function () {
			var $$ = this.$$;
			this.canvases = [];
			var self = this;
			setTimeout(function () {
				for (var i = 0; i < $$('.zmiti-img-box').length; i++) {
					var box = $$('.zmiti-swpier-item')[i];
					var offsetLeft = box.offsetLeft;
					var imgs = box.querySelectorAll('.zmiti-img');
					var canvas = box.querySelector('canvas');
					canvas.height = 491;
					canvas.width = box.clientWidth;
					self.canvases.push({ canvas, imgs, box, offsetLeft });
					self.initCanvas();
				};
			}, 100)
		},
	};

	var index = 1;
	index = (window.location.href.split('/').pop().split('_')[1]||'1.html').split('.')[0] || 1;
	util.currentIndex = index * 1 - 1;

	util.currentIndex = Math.min(util.currentIndex, 6)

	var playObj = util.$('#play');
	var audio = util.$('#audio');

	audio.play()
	playObj.classList.add('rotate');

	audio.addEventListener('play', function () {
		playObj.classList.add('rotate');
		console.log(123);
	});
	audio.addEventListener('pause', function () {
		playObj.classList.remove('rotate');
	});
	playObj.addEventListener('touchend', function () {
		audio[audio.paused ? 'play' : "pause"]();
		playObj.classList[audio.paused?'remove':'add']('rotate');//
	})

	var s = this;
	document.addEventListener("WeixinJSBridgeReady", function () {
		WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
			audio.play();
		});
	}, false)
	var play = function () {
		document.removeEventListener("WeixinJSBridgeReady", play);
		document.removeEventListener("YixinJSBridgeReady", play);
		audio.play();

	};
	if (window.WeixinJSBridge) {
		audio.play();
	}
	//weixin
	if (typeof WeixinJSBridge == "undefined") {
		document.addEventListener("WeixinJSBridgeReady", play, false);
	} else {
		document.addEventListener('YixinJSBridgeReady', play, false);
		audio.play();
	}

	var arr = ['一', '二', '三', '四', '五', '六', '七'];
	//第X期——精彩延续 敬待下期
	//util.$('#zmiti-group-name').innerHTML = '第' + arr[util.currentIndex] + '期——精彩延续 敬待下期';
	util.init(1);



}();