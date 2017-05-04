define(["models/orders"],function(orders){

	var titlePager = {
		view: "toolbar",
		css: "highlighted_header header5",
		paddingX:5,
		paddingY:5,
		height:40,
		cols:[
			{view: "button", type: "iconButton", icon: "tree", label: "选择机构", width: 120},
			{view: "button", type: "iconButton", icon: "times", label: "清除", width: 100},
			{view: "button", type: "iconButton", icon: "exchange", label: "调整", width: 100},
			{view: "button", type: "iconButton", icon: "delicious", label: "剔除", width: 100},
			{view: "button", type: "iconButton", icon: "search-plus", label: "查询", width: 100},
			{view: "button", type: "iconButton", icon: "external-link", label: "导出", width: 100},
		]
	};
	var gridPager =  {
		margin: 10,
		rows:[
			{
				id:"orderData",
				view:"datatable", select:true,
				
				columns:[
					{id:"id", header:"#", width:50},
					{id:"employee", header:["客户ID", {content:"selectFilter"} ], sort:"string", minWidth:150, fillspace:1},
					{id:"customer", header:["客户名称", {content:"selectFilter"} ], sort:"string", minWidth:150, fillspace:1},
					{id:"status", header:"客户编码", sort:"string", width:90},
					{id:"fee", header:"目前管辖机构", width:90, sort:"string", format:webix.i18n.priceFormat},
					{id:"taxes", header:"新机构", width:90, sort:"string", format:webix.i18n.priceFormat},
					{id:"total", header:"地址", width:90, sort:"string", format:webix.i18n.priceFormat},
					{id:"shipping_company", header:"管辖方式", sort:"string" },
					{id:"payment_method", header:"联系电话", width:130, sort:"string"},
					{id:"date", header:"建档日期", sort:"string", width:100},
					{id:"trash", header:"认领员工", width:100},
					{id:"trash", header:"认领日期", width:100},
					{id:"trash", header:"客户细分名称", width:100},
					{id:"trash", header:"客户状态", width:100},
					{id:"trash", header:"状态时间", width:100},
					{id:"trash", header:"营业区", width:100}
				],
				export: true,
				on: {
					onAfterLoad: function(){
						this.select(4);
					}
				},
				onClick:{
					webix_icon:function(e,id){
						webix.confirm({
							text:"Are you sure sdfds", ok:"Yes", cancel:"Cancel",
							callback:function(res){
								if(res){
									webix.$$("orderData").remove(id);
								}
							}
						});
					}
				},
				//autoheight:true,
				height: 450,
				data:orders.getAll,
				pager: "pagerA"
			},
			{
				view:"pager", id:"pagerA",
				size:25,
				height: 35,
				group:5

			}
		]
	};


	var layout = {
		type: "clean",
		
		rows:[
			titlePager,
			gridPager
		]
	};

	return { $ui: layout };

});