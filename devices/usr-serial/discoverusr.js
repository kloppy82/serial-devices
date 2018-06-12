const net=require('net');
const dgram = require('dgram');

const PORT = 48899;
const HOST = '255.255.255.255';
//const TIMEOUT = 3000;

const message = new Buffer('www.usr.cn');
const upd_client = dgram.createSocket('udp4');

//var deviceinfo={IP:0,MAC:0}
var answers = [];


module.exports.discoverDevices = function(timeout,callback) {
	const timeoutObj = setTimeout(process_message, timeout);
	upd_client.bind(()=>{upd_client.setBroadcast(true);});

	upd_client.on('message',(msg,info)=>{
		//clearTimeout(timeoutObj);
		answers.push(msg.toString().slice(0, -1).split(","));
	});

	upd_client.send(message, 0, message.length, PORT, HOST, (err, bytes) => {
		if (err) throw err;
		//console.log('UDP message sent to ' + HOST +':'+ PORT);

	});

	function process_message(){
		//console.log('Received %d bytes from %s:%d Message: "%s"\n',msg.length, info.address, info.port,msg.toString());
		/*if(msg!=undefined && info!=undefined){
			console.log(info.address);
		}
		else{
			console.log('Serial Converter unreachable')
		}*/
		upd_client.close();
		callback(answers);
	}
}


