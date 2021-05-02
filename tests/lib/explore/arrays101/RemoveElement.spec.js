'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Remove Element', () => {
  const sandbox = sinon.createSandbox();
  let RemoveElement;
  let removeElement;

  before(() => {});
  beforeEach(() => {
    RemoveElement = rewire('../../../../lib/explore/arrays101/RemoveElement');
    removeElement = RemoveElement.__get__('removeElement');
  });
  after(() => {});
  afterEach(() => {
    sandbox.reset();
  });
  
  it('input [3,2,2,3] -> output [2,2]', ()=> {
    let nums = [3,2,2,3];
    let val = 3;
    let numsLength = removeElement(nums, val);
    expect(numsLength).to.eql(2);
    expect(nums).to.eql([2, 2]);
  });
  
  it('input [0,1,2,2,3,0,4,2] -> output [0,1,4,0,3]', ()=> {
    let nums = [0,1,2,2,3,0,4,2];
    let val = 2;
    let numsLength = removeElement(nums, val);
    expect(numsLength).to.eql(5);
    expect(nums).to.eql([0,1,3,0,4]);
  });
});