'use strict';

const neeoapi = require('neeo-sdk');
const serial = require('./serialio');


/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */

module.exports.onButtonPressed = function onButtonPressed(name, deviceId) {
  console.log(`[USR SERIAL] ${name} button pressed for device ${deviceId}`);
  serial.write('Hello from Brain')
  // TODO implement the actions for your device here
};
