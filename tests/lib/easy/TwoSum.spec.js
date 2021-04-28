'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Two Sum', () => {
  const sandbox = sinon.createSandbox();
  let TwoSum;
  let twoSum;

  before(() => {});
  beforeEach(() => {
    TwoSum = rewire('../../../lib/easy/TwoSum');
    twoSum = TwoSum.__get__('twoSum');
  });
  after(() => {});
  afterEach(() => {
    sandbox.reset();
  });
  
  it('input [2, 7, 11, 15], 9 -> output [0, 1]', ()=> {
    let nums = [2, 7, 11, 15];
    let target = 9;
    expect(twoSum(nums, target)).to.eql([0, 1]);
  });
});