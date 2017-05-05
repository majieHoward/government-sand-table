define(function(){
	var callback;
	var helloworld=function(demo){
		callback=demo;
	}
   
	var windowsOfBssorg={
			view:"window",
			id:"win4",
			fullscreen:true,
			animate:{type:"flip", subtype:"vertical"},
            modal:true,
		    head:{
				view:"toolbar", margin:-4, cols:[
					{view:"label", label: "机构选择器" },
					
					{ view:"icon", icon:"times-circle", css:"alter",
						click:"$$('win4').hide();"}
					]
			},
			body:{
				view:"treetable",
				id:"bss_org_list",
				rowHeight:50,
				subRowHeight:"auto",
				columns:[
					{ id:"value", header:"机构名称", fillspace:true, 
					  template:function(data, common){
						  var id=data.bssOrgId;
						  var value=data.bssOrgName;
						  return "<input type='checkbox' class='webix_tree_checkbox_org_select webix_tree_checkbox ' name='selectQueryOrg'"
						  +'id="'+id+'selectQueryOrg"'+"></input>"+id+value;
					  }
					}
					
				],
				on:{
					onItemClick:function(id, e, node){
						if("true"===this.getItem(id).isParent){
							if(this.getItem(id).open){
								if(false==this.getItem(id).open){
									 this.open(id);
									 webix.message("展开机构ID:"+id+"机构名称:"+this.getItem(id).bssOrgName);
									
								}else{
									 this.close(id);
								}
							}else{
								
								this.open(id);
								webix.message("机构ID:"+id+"机构名称:"+this.getItem(id).bssOrgName);
							
							}
						}
					},
					onBeforeOpen:function(id){
	                    /**
	                     * 判断是否是第一次打开如果是第一次打开就和后台进行交互
	                     * 如果之前打开过就在和后台进行交互
	                     */
	                    if("true"===this.getItem(id).isParent&&-1===this.getItem(id).$count){
	                        webix.message("Getting children of " + id);
	                        this.loadBranch(id, null, "/order/sendThemeMessage.howard");
	                    }
	                },
	                onItemCheck:function(id){
	                    //code
	                	var selectQueryOrg = document.getElementsByName("selectQueryOrg");
	                	 for (var i = 0; i < selectQueryOrg.length; i++) {        
                	        if (selectQueryOrg[i].type == "checkbox")             
                	        	selectQueryOrg[i].checked = false;             
                	    }
	                	document.getElementById(id+"selectQueryOrg").checked=true;
	                	callback(this.getItem(id));
	                	
	                }
				}			 
			}
		}
	return {
		$ui:windowsOfBssorg,
		demo:helloworld
	};

});