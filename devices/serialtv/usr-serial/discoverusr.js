const net=require('net');
const dgram = require('dgram');
const debug = require('debug')('neeo:usr');

const PORT = 48899;
const HOST = '255.255.255.255';
//const TIMEOUT = 3000;
const message = new Buffer('www.usr.cn');
const upd_client = dgram.createSocket('udp4');

var device={
	id: "MAC address",
	name: "IP Address"
}
var answers = [];   

//module.exports.discoverDevices = function(timeout,callback) {
setInterval(sendBroadcast, 5000);

upd_client.bind(()=>{upd_client.setBroadcast(true);});

upd_client.on('message',(msg,info)=>{
	device.id=msg.toString().split(",")[0];
	device.name=msg.toString().split(",")[1];	//swapped MAC&IP due to simpler connection
	answers.push(device);
	debug('Discovered '+ device.name +" at "+ device.id);
});

function sendBroadcast(){
	answers=[];	//TODO: instead of deleting the awswers array, check if newly discovered devices are already in the array and update accordingly
	upd_client.send(message, 0, message.length, PORT, HOST, (err, bytes) => {
		if (err) throw err;
		debug("Sent Broadcast");
	});
}

	/*function process_message(){
		//console.log('Received %d bytes from %s:%d Message: "%s"\n',msg.length, info.address, info.port,msg.toString());
		if(msg!=undefined && info!=undefined){
			console.log(info.address);
		}
		else{
			console.log('Serial Converter unreachable')
		}
		//upd_client.close();
		callback(answers);
	}*/
//}

module.exports.getDevices=function(){
	debug("Request Devices List" + answers);
	return answers;
}