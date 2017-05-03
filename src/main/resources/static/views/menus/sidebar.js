define(function() {

	return {
		
		$ui : {
			width : 200,
			rows : [ {
				view : "tree",
				id : "app:menu",
				type : "menuTree2",
				css : "menu",
				activeTitle : true,
				select : true,
				tooltip : {
					template : function(obj) {
						return obj.$count ? "" : obj.details;
					}
				},
				on : {
					onBeforeSelect : function(id) {
						if (this.getItem(id).$count) {
							debugger;
							return false;
						}

					},
					onAfterSelect : function(id) {
						this.$scope.show("./" + id);
						var item = this.getItem(id);
						webix.$$("title").parse({
							title : item.value,
							details : item.details
						});
					}
				},
				data : [ {
					id : "forms",
					value : "form元素",
					icon : "list-alt",
					details : "form元素"
				},{
					id : "products",
					value : "表格元素",
					icon : "table",
					details : "表格元素"
				}
				]
			} ]
		}
	};

});
