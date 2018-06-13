'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./serialtv');


var discoveredDevices;

// first we set the device info, used to identify it on the Brain
const serialdevice = neeoapi.buildDevice('Serial TV Controller')
  .setManufacturer('NEEO')
  .addAdditionalSearchToken('USR')
  .addAdditionalSearchToken('W610')
  .setType('TV')

  // Then we add the capabilities of the device
  .addButton({ name: 'INPUT HDMI 1', label: 'HDMI 1'})
  .addButtonGroup('POWER')
  .addButtonGroup('VOLUME')
  .addButtonGroup('Numpad')
  .addButtonGroup('Channel Zapper')
 // .addButtonGroup('Color Buttons')
  .addButtonHandler(controller.onButtonPressed)

  .enableDiscovery(
  {
    headerText: 'Find your converter!',
    description: 'Make sure the Serial converter is powered and the WORK LED is blinking'
  },
  controller.getDevices
/*   function() {
    console.log("start");
    controller.getDevices();
    console.log("stop");
  return [
     {
       id: 'unique-device-id-001',
       name: 'first device',
     },
     {
       id: 'unique-device-id-002',
       name: 'second device, but not reachable',
       reachable: false
     }
   ];
  }*/
);

module.exports = serialdevice;
