const { expect } = require('chai');
const Songhua = require('./index.js');

describe('class inspection', () => {
    it ('init the class as Songhua', () => {
        expect(new Songhua(null, null, null, { isObjectMode: false })).instanceOf(Songhua);
    });
});
