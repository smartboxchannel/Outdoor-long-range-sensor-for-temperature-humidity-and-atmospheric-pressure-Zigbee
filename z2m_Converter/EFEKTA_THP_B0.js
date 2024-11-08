const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const e = exposes.presets;
const ea = exposes.access;


const definition = {
        zigbeeModel: ['EFEKTA_THP_B0'],
        model: 'EFEKTA_THP_B0',
        vendor: 'EfektaLab',
        description: 'DIY temperature, humidity and atmospheric pressure sensor, long battery life',
        fromZigbee: [fz.pressure, fz.temperature, fz.humidity, fz.battery],
        toZigbee: [tz.factory_reset],
        exposes: [e.pressure(), e.temperature(), e.humidity(), e.battery(), e.battery_voltage()],
};

module.exports = definition;