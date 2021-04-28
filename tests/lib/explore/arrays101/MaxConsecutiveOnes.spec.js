'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Max Consecutive Ones', () => {
  const sandbox = sinon.createSandbox();
  let MaxConsecutiveOnes;
  let findMaxConsecutiveOnes;

  before(() => {});
  beforeEach(() => {
    MaxConsecutiveOnes = rewire('../../../../lib/explore/arrays101/MaxConsecutiveOnes');
    findMaxConsecutiveOnes = MaxConsecutiveOnes.__get__('findMaxConsecutiveOnes');
  });
  after(() => {});
  afterEach(() => {
    sandbox.reset();
  });
  
  it('input [1,1,0,1,1,1] -> output 3', ()=> {
    let nums = [1,1,0,1,1,1];
    expect(findMaxConsecutiveOnes(nums)).to.eql(3);
  });
});