'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./serialtv');

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
  .addButtonHandler(controller.onButtonPressed);

module.exports = serialdevice;
