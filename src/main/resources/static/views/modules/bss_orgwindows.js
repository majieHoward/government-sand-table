define(function(){
	var callback;
	var helloworld=function(demo){
		callback=demo;
	}
	var windowsOfBssorg={
			view:"window",
			id:"win4",
			  top:100,
			  fullscreen:true,
			  animate:{type:"flip", subtype:"vertical"},
            modal:true,
		    head:{
				view:"toolbar", margin:-4, cols:[
					{view:"label", label: "This window can be closed" },
					{ view:"icon", icon:"cog", css:"alter",
						click:"webix.message('Cog pressed')"},
					{ view:"icon", icon:"times-circle", css:"alter",
						click:"$$('win4').hide();"}
					]
			},
			body:{
				view:"grouplist",
				id:"bss_org_list",
				select:false,
				template:"<span class='info'>选择</span>&nbsp;&nbsp;#value#",
				onClick:{
					info:function(e, id){
						console.log(callback);
						callback(id);
						return false;
					}
				},
				data:smalltreedata
			}
		}

	return {
		$ui:windowsOfBssorg,
		demo:helloworld
	};

});