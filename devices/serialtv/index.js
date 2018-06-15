'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./serialtv');
const usr=require('./usr-serial/discoverusr');
const serialio=require('./usr-serial/serialio');
const debug = require('debug')('neeo:serialtv');


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
  .addButtonGroup('Menu and Back')
  .addButtonGroup('Controlpad')

 // .addButtonGroup('Color Buttons')
  .addButtonHandler(controller.onButtonPressed)
 //.registerInitialiseFunction(serialio.connect)
  .defineTiming({ powerOnDelayMs: 2000, sourceSwitchDelayMs: 500, shutdownDelayMs: 1000 })
  .enableDiscovery(
  {
    headerText: 'Find your converter!',
    description: 'Make sure the Serial converter is powered and the WORK LED is blinking'
  },
  controller.getDevices
);

module.exports = serialdevice;
