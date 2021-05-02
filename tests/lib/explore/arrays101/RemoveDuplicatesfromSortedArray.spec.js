'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Remove Duplicates from Sorted Array', () => {
  const sandbox = sinon.createSandbox();
  let RemoveDuplicatesfromSortedArray;
  let removeDuplicates;

  before(() => {});
  beforeEach(() => {
    RemoveDuplicatesfromSortedArray = rewire('../../../../lib/explore/arrays101/RemoveDuplicatesfromSortedArray');
    removeDuplicates = RemoveDuplicatesfromSortedArray.__get__('removeDuplicates');
  });
  after(() => {});
  afterEach(() => {
    sandbox.reset();
  });
  
  it('input [1,1,2] -> output [1,2]', ()=> {
    let nums = [1,1,2];
    let numsLength = removeDuplicates(nums);
    expect(numsLength).to.eql(2);
    expect(nums).to.eql([1, 2]);
  });
});