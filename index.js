const discoverableLightDevice = require('./discoverableLightDevice');
const fileBrowser = require('./fileBrowser');
const lifxLocal = require('./lifx-local');
const multipleDevices = require('./multipleDevices');
const simpleAccessory = require('./simpleAccessory');
const usrserial = require('./usr-serial');
const serialtv = require('./serialtv');

// export the devices you want to make available to the Brain (see README for more information)
module.exports = {
  devices: [
    fileBrowser,
    lifxLocal,
    simpleAccessory,
    usrserial,
    serialtv,
    ...discoverableLightDevice,
    ...multipleDevices,
  ],
};
