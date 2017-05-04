define(
		[ "views/menus/search", "views/menus/mail", "views/menus/message",
				"views/menus/profile", "views/menus/sidebar",
				"views/webix/icon", "views/webix/menutree" ],
		function(search, mail, message, profile, menu) {
			
			// Top toolbar
			var mainToolbar = {
				view : "toolbar",

				elements : [ {
					padding : 8,
					type : "line",
					view : "toolbar",
					borderless : true,
					multiview : true,
					align : "right",
					paddingY : -2,
					height : 75,
					cols : [ {
						view : "button",
						type : "imageTop",
						label : "客户管理",
						image : "assets/imgs/business/admin.png",
						width : 100
					}, {
						view : "button",
						type : "imageTop",
						label : "业务受理",
						image : "assets/imgs/business/businessAcceptance.png",
						width : 100
					}, {
						view : "button",
						type : "imageTop",
						label : "工单查询",
						image : "assets/imgs/business/workOrderInquiry.png",
						width : 100
					}, {
						view : "button",
						type : "imageTop",
						label : "业务查询",
						image : "assets/imgs/business/queryService.png",
						width : 100
					}, {
						view : "button",
						type : "imageTop",
						label : "商机",
						image : "assets/imgs/business/businessOpportunity.png",
						width : 100
					}, {
						view : "button",
						type : "imageTop",
						label : "知识库",
						image : "assets/imgs/business/knowledgeBase.png",
						width : 100
					}, {
						view : "button",
						type : "imageTop",
						label : "派单",
						image : "assets/imgs/business/distributeLeaflets.png",
						width : 100
					}, {
						view : "button",
						type : "imageTop",
						label : "营销查询",
						image : "assets/imgs/business/marketingManagement.png",
						width : 100
					}, {
						view : "button",
						type : "imageTop",
						label : "系统管理",
						image : "assets/imgs/business/systemManage.png",
						width : 100
					}, {
						view : "button",
						type : "imageTop",
						label : "OA办公",
						image : "assets/imgs/business/oaSystem.png",
						width : 100
					} ]
				}
				]
			};

			var body = {
				rows : [
						{
							height : 1,
							id : "title",
							css : "title",
							template : "<div class='header'>#title#</div><div class='details'>( #details# )</div>",
							data : {
								text : "",
								title : ""
							}
						}, {
							view : "scrollview",
							scroll : "native-y",
							body : {
								cols : [ {
									$subview : true
								} ]
							}
						} ]
			};

			var layout = {
				rows : [ mainToolbar, {
					cols : [ menu, body ]
				} ]
			};

			return {
				$ui : layout,
				$menu : "app:menu",
				$oninit : function(view, scope) {
					scope.ui(search.$ui);
					scope.ui(mail.$ui);
					scope.ui(message.$ui);
					scope.ui(profile.$ui);
				}
			};

		});