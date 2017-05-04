define(function(){

	var tasks = {
		gravity: 2,
		"type": "clean",
		"rows":[
			{
				view:"tree",
			    select:true,
			    heigth:"180",
			    data: [
			        {id:"root", value:"Cars", open:true, data:[
			            { id:"1", open:true, value:"Toyota", data:[
			                { id:"1.1", value:"Avalon" },
			                { id:"1.2", value:"Corolla" },
			                { id:"1.3", value:"Camry" }
			            ]},
			            { id:"2", value:"Skoda", open:true, data:[
			                { id:"2.1", value:"Octavia" },
			                { id:"2.2", value:"Superb" }
			            ]},
			            { id:"3", value:"Skoda", open:true, data:[
			                { id:"3.1", value:"Octavia" },
			                { id:"3.2", value:"Superb" }
			            ]},
			            { id:"4", value:"Skoda", open:true, data:[
			                { id:"4.1", value:"Octavia" },
			                { id:"4.2", value:"Superb" }
			            ]},
			            { id:"5", value:"Skoda", open:true, data:[
			                { id:"5.1", value:"Octavia" },
			                { id:"5.2", value:"Superb" }
			            ]},
			            { id:"6", value:"Skoda", open:true, data:[
			                { id:"6.1", value:"Octavia" },
			                { id:"6.2", value:"Superb" }
			            ]},
			            { id:"7", value:"Skoda", open:true, data:[
			                { id:"7.1", value:"Octavia" },
			                { id:"7.2", value:"Superb" }
			            ]},
			            { id:"8", value:"Skoda", open:true, data:[
			                { id:"8.1", value:"Octavia" },
			                { id:"8.2", value:"Superb" }
			            ]},
			            { id:"9", value:"Skoda", open:true, data:[
			                { id:"9.1", value:"Octavia" },
			                { id:"9.2", value:"Superb" }
			            ]}
			        ]}
			    ]
			}
		]
	};

	return {
		$ui:tasks
	};

});



