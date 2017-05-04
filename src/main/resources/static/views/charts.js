define([
	"views/modules/dashline",
	"views/modules/visitors",
	"views/modules/orders",
	"views/modules/data_pager",
	"views/modules/revenue",
	"views/modules/taskschart",
	"views/modules/diffchart"
],function(dashline, visitors, orders, chart_diff, revenue, tasks, diffchart){
	function handler(){
		$$('orderData').clearAll();
		$$('orderData').load("/order/equipmentRichselect.howard");
	}
	var layout = {
		type: "clean",
		rows:[
			{
				view: "form",
				css : "title",
				paddingX:5,
				paddingY:5,
				rows:[
					{cols:[
						{ view:"text", placeholder:"e.g.王宗伟",tooltip:'客户名称', label:"客户名称", inputAlign:"left", labelAlign:"left"},
						{ view:"text", placeholder:"e.g.28CD21891884",tooltip:'客户编码', label:"客户编码", inputAlign:"right", labelAlign:"right"},
						{ view:"text", placeholder:"e.g.0283349930488",tooltip:'业务号码', label:"业务号码", inputAlign:"right", labelAlign:"right"},
						{ 
							view:"richselect", yCount:2,
							label: '客户状态',  name:"fruit1",
							placeholder:"e.g.在用/注销",
							options:[
								{ id:1, value:"在用"   }, 
								{ id:2, value:"注销"   }
							]
						}
					]},
					{cols:[
						{
							view:"template",
							width:80,
							template: "<div class='switch-btn'><input type='checkbox' checked='checked' class='js-switch'/> <label></label></div>", borderless: true
						},{ 
							view: "uploader", id:"upl1",
							autosend:false, value: '导入号码',
							link:"mylist" 
						},
						
						
						{
							view:"template",
							width:80,
							template: "<div class='switch-btn'><input type='checkbox' checked='checked' class='js-switch'/></div>", borderless: true
						},{ 
							view: "uploader", id:"upl2",
							autosend:false, value: '导入客户ID',
							link:"mylist" 
						},{},{},
						{view: "button", type: "iconButton", icon: "search-plus", label: "查询", width: 100}
					]}
				]
			},
			
			{
				type: "space",
				rows:[

					{
						type: "wide",
						minHeight: 550,
						cols: [
							{
								gravity: 8,
								type: "clean",
								rows:[
									chart_diff
								]
							},
							diffchart
						]
					}
				]

			}
		]
	};
	return { $ui:layout };

});
