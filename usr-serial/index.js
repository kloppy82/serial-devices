'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./usrserial');

// first we set the device info, used to identify it on the Brain
const serialdevice = neeoapi.buildDevice('USR-W610')
  .setManufacturer('NEEO')
  .addAdditionalSearchToken('USR')
  .addAdditionalSearchToken('W610')
  .setType('ACCESSORY')

  // Then we add the capabilities of the device
  .addButton({ name: 'HWB', label: 'Send Hello World' })
 // .addButtonGroup('Color Buttons')
  .addButtonHandler(controller.onButtonPressed);

module.exports = serialdevice;
