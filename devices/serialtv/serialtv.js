'use strict';

const neeoapi = require('neeo-sdk');
const serial = require('./serialio');


/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */
module.exports.onButtonPressed = function onButtonPressed(name, deviceId) {
  console.log(`[CONTROLLER] ${name} button pressed for device ${deviceId}`);
  // TODO implement the actions for your device here
	switch(name){
		case 'DIGIT 0': 	serial.write('DIGIT 0\n\r');
							break;
		case 'DIGIT 1': 	serial.write('DIGIT 1\n\r');
							break;
		case 'DIGIT 2': 	serial.write('DIGIT 2\n\r');
							break;
		case 'DIGIT 3': 	serial.write('DIGIT 3\n\r');
							break;
		case 'DIGIT 4': 	serial.write('DIGIT 4\n\r');
							break;
		case 'DIGIT 5': 	serial.write('DIGIT 5\n\r');
							break;
		case 'DIGIT 6': 	serial.write('DIGIT 6\n\r');
							break;
		case 'DIGIT 7': 	serial.write('DIGIT 7\n\r');
							break;
		case 'DIGIT 8': 	serial.write('DIGIT 7\n\r');
							break;
		case 'DIGIT 9': 	serial.write('DIGIT 7\n\r');
							break;
		case 'VOLUME UP': 	serial.write('V+\n\r');
							break;
		case 'VOLUME DOWN': serial.write('V-\n\r');
							break;
		case 'CHANNEL UP': 	serial.write('C+\n\r');
							break;
		case 'CHANNEL DOWN': serial.write('C-\n\r');
							break;
		case 'POWER ON': 	serial.write('ON\n\r');
							break;
		case 'POWER OFF': 	serial.write('OFF\n\r');
							break;
		case 'MUTE TOGGLE': serial.write('MUTE\n\r');
							break;

	}
};
