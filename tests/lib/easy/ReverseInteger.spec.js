'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Reverse Integer', () => {
  const sandbox = sinon.createSandbox();
  let ReverseInteger;
  let reverse;

  before(() => {});
  beforeEach(() => {
    ReverseInteger = rewire('../../../lib/easy/ReverseInteger');
    reverse = ReverseInteger.__get__('reverse');
  });
  after(() => {});
  afterEach(() => {
    sandbox.reset();
  });

  it('input 123 -> output 321', ()=> {
    expect(reverse(123)).to.eql(321);
  });
  
  it('input 1534236469 -> output 0', ()=> {
    expect(reverse(1534236469)).to.eql(0);
  });
});