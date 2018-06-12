const usr=require('./discoverusr');
//var serial = require('./serialio');
usr.discoverDevices(500,(input)=>{
	if (input.length>0){
		console.log("Found these devices:")
		for (var i = input.length - 1; i >= 0; i--) {
			console.log(input[0]);
		}
	}
	else {console.log("No devices found")}
});