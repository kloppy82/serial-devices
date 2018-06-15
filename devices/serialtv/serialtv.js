'use strict';

const neeoapi = require('neeo-sdk');
const debug = require('debug')('neeo:serialtv');
const BluePromise = require('bluebird');
const serial = require('./usr-serial/serialio');
const usr=require('./usr-serial/discoverusr');
/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */


//TODO: switch id and name keys and search the corresponding IP address for the requested id (=MAC address)

/*function getIP(MACaddress){
	debug("Getting Devices");
	var  devices;
	devices=usr.getDevices();
	debug("Searching "+MACaddress+"in "+devices);
	for(var i=0; i<devices.length; i++) {
		for(key in devices[i]) {
		    if(devices[i][key].indexOf(MACaddress)!=-1) {
		    	debug("FOUND: "+ devices[i].name.toString());
		     	return devices[i].name.toString();
		    }
		}
	}
}*/

module.exports.getDevices=usr.getDevices;

module.exports.onButtonPressed = function onButtonPressed(name,deviceId) {
	console.log(`[CONTROLLER] ${name} button pressed for device ${deviceId}`);
  	if (!serial.isconnected()) {
  		/*debug("Not Connected");
  		var IPaddress="";
  		IPaddress=getIP(deviceId);
  		debug("IP Address: "+IPaddress);*/
  		serial.connect(deviceId);
  	}

	switch(name){
		case 'DIGIT 0': 	serial.write('ir 0 0 0 3\r\n'); //ir [system] [subsystem] [command] [status]
							break;
		case 'DIGIT 1': 	serial.write('ir 0 0 1 3\r\n');
							break;
		case 'DIGIT 2': 	serial.write('ir 0 0 2 3\r\n');
							break;
		case 'DIGIT 3': 	serial.write('ir 0 0 3 3\r\n');
							break;
		case 'DIGIT 4': 	serial.write('ir 0 0 4 3\r\n');
							break;
		case 'DIGIT 5': 	serial.write('ir 0 0 5 3\r\n');
							break;
		case 'DIGIT 6': 	serial.write('ir 0 0 6 3\r\n');
							break;
		case 'DIGIT 7': 	serial.write('ir 0 0 7 3\r\n');
							break;
		case 'DIGIT 8': 	serial.write('ir 0 0 8 3\r\n');
							break;
		case 'DIGIT 9': 	serial.write('ir 0 0 9 3\r\n');
							break;
		case 'VOLUME UP': 	serial.write('data volume +\r\n');
							break;
		case 'VOLUME DOWN': serial.write('data volume -\r\n');
							break;
		case 'CHANNEL UP': 	serial.write('ir 0 0 24 3\r\n');
							break;
		case 'CHANNEL DOWN': serial.write('ir 0 0 23 3\r\n');
							break;
		case 'POWER ON': 	serial.write('power tv\r\n');
							break;
		case 'POWER OFF': 	serial.write('power off\r\n');
							break;
		case 'MUTE TOGGLE': serial.write('ir 0 0 13 3\r\n');
							break;
		case 'CURSOR ENTER': serial.write('ir 0 0 38 3\r\n');
							break;
		case 'CURSOR UP': serial.write('ir 0 0 32 3\r\n');
							break;
		case 'CURSOR DOWN': serial.write('ir 0 0 33 3\r\n');
							break;
		case 'CURSOR LEFT': serial.write('ir 0 0 17 3\r\n');
							break;
		case 'CURSOR RIGHT': serial.write('ir 0 0 16 3\r\n');
							break;
		case 'MENU': serial.write('ir 0 0 11 3\r\n');
							break;
		case 'BACK': serial.write('ir 0 27 163 3\r\n');
							break;
	}
};

/*function(){
	
	return new BluePromise((resolve) => {
		//debug('discovery call', devices);
		usr.discoverDevices(3000,(devices)=>{
			debug('discovered devices:', devices);
    		resolve(devices);
    	});
	})
}*/
