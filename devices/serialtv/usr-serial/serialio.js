const net=require('net');
const debug = require('debug')('neeo:serialtv');

//var HOST = '192.168.1.153';
const PORT = 8899;
var connected=false
const tcp_client=net.Socket();

module.exports.connect=function(ipaddress){
	tcp_client.connect(PORT, ipaddress, function() {
    	debug('tcp_client connected to: ' + ipaddress + ':' + PORT);
  		console.log('tcp_client connected');
  		connected=true;
	});
}
	 
tcp_client.on('data', function(data) {
	    debug('%s',data);
});
	 
tcp_client.on('close', function() {
    debug('tcp_client closed');
    connected=false;
});
	 
tcp_client.on('error', function(err) {
    console.error(err);
    connected=false;
});

module.exports.isconnected=function(){
	return connected;
}

module.exports.write=function(msg){
	tcp_client.write(msg);
}

