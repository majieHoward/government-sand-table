define([
	"views/modules/dashline",
	"views/modules/visitors",
	"views/modules/orders",
	"views/modules/data_pager",
	"views/modules/revenue",
	"views/modules/taskschart",
	"views/modules/diffchart",
	"views/modules/bss_orgwindows",
],function(dashline, visitors, orders, chart_diff, revenue, tasks, diffchart,bss_orgwindows){
	
	function handler(){
		$$('orderData').clearAll();
		$$('orderData').load("/order/equipmentRichselect.howard");
	}
	
	function openBssOrg(){
		
		$$('win4').show();
	}
	
	var layout = {
		type: "clean",
		rows:[
			
			{
				view: "form",
				id:"queryForm",
				css : "title",
				paddingX:5,
				paddingY:5,
				rows:[
					{cols:[
						{ view:"text", 
							id:"bssOrgId",
							name:"bssOrgId",
							width:1,
							readonly:true ,
							inputAlign:"left", 
						    labelAlign:"left"
						},
						{ view:"text", 
							id:"bssOrgName",
							name:"bssOrgName",
							placeholder:"点击选择机构",
							readonly:true ,
							tooltip:'机构', label:"机构", inputAlign:"left", 
						labelAlign:"left",
							click:openBssOrg
						},
						{ view:"text", 
							placeholder:"e.g.王宗伟",
							id:"custName",
							name:"custName",
							tooltip:'客户名称', label:"客户名称", inputAlign:"left", labelAlign:"left"},
						{ view:"text", 
								id:"custCode",
								name:"custCode",
								placeholder:"e.g.28CD21891884",
								tooltip:'客户编码', label:"客户编码", inputAlign:"right", labelAlign:"right"},
						
						{ view:"text", 
									id:"servAccNbr",
									name:"servAccNbr",	
									placeholder:"e.g.0283349930488",tooltip:'业务号码', label:"业务号码", inputAlign:"right", labelAlign:"right"}
						
						
					]},
					{cols:[
						{ 
							view:"richselect", yCount:2,
							label: '客户状态',  
							id:"custState",
							name:"custState",
							placeholder:"e.g.在用/注销",
							options:[
								{ id:1, value:"在用"   }, 
								{ id:2, value:"注销"   }
							]
						},
						{
							view:"template",
							width:80,
							template: "<div class='switch-btn'><input type='checkbox' id='controlImportPhoneNum' class='js-switch controlImportPhoneNum'/> <label></label></div>", 
							borderless: true,
							onClick:{
						        "controlImportPhoneNum":function(ev, id){
						        	if(document.getElementById("controlImportPhoneNum").checked==true){
						        		$$("importPhoneNum").enable();
						        	}else{
						        		$$("importPhoneNum").disable();
						        	}
						        }
						    }
						},{ 
							view: "uploader", id:"importPhoneNum",
							autosend:false, value: '导入号码',
							disabled:true,
							link:"mylist" 
						},
						{
							view:"template",
							width:80,
							template: "<div class='switch-btn'><input type='checkbox' id='controlImportClient' class='js-switch controlImportClient'/><label></label></div>",
							borderless: true,
							onClick:{
						        "controlImportClient":function(ev, id){
						        	if(document.getElementById("controlImportClient").checked==true){
						        		$$("importClient").enable();
						        	}else{
						        		$$("importClient").disable();
						        	}
						        }
						    }
						},{ 
							view: "uploader", id:"importClient",
							autosend:false, value: '导入客户ID',
							disabled:true,
							link:"mylist" 
						},
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
	var controlEvent=function(value){
		$$('bssOrgId').setValue(value.id);
    	$$('bssOrgId').refresh();
		$$('bssOrgName').setValue(value.bssOrgName);
    	$$('bssOrgName').refresh();
		
    	
    	$$('win4').hide();
	}
	function chartsbindingEvent(){
//		var result = webix.ajax().post("http://61.188.4.139//ims/policy_library_index_show!qryBssOrgIdTreeForMobile.action","upBssOrgId=14039329&filter=13", function (text) {
//			console.log(text);
//			var param={};
//			param.data=text.output;
//			console.log(param);
//			$$("bss_org_list").parse(param);
//		});
		
//		var result = webix.ajax().post("http://61.188.4.139//ims/policy_library_index_show!qryBssOrgIdTreeForMobile.action","upBssOrgId=14039329&filter=13", function (text) {
//			
//		});
//		webix.ajax("http://61.188.4.139//ims/policy_library_index_show!qryBssOrgIdTreeForMobile.action","upBssOrgId=281&filter=13",{
//    	    error:function(text, data, XmlHttpRequest){
//    	    	webix.message({ type:"error", text:"发送失败" });
//    	    },
//    	    success:function(text, data, XmlHttpRequest){
//    	    	console.log(data.json());
//    			var param={};
//    			param.data=data.json().output;
//    			console.log(param);
//    			$$("bss_org_list").parse(param);
//    	    }
//    	});
		webix.ajax("/bussiness/obtainQueryBssOrgTree.howard","parent=281",{
		    error:function(text, data, XmlHttpRequest){
		    	webix.message({ type:"error", text:"发送失败" });
		    },
		    success:function(text, data, XmlHttpRequest){
		    	console.log(data);
		    	var resultJSON=data.json();
		    	var param={};
		    	param.data=resultJSON.data;
				$$("bss_org_list").parse(param);
		    }
		});
		bss_orgwindows.demo(controlEvent);
	}
	chartsbindingEvent();
	return { $ui:layout ,
		$oninit : function(view, scope) {
			scope.ui(bss_orgwindows.$ui);
			
		}
	};

});
