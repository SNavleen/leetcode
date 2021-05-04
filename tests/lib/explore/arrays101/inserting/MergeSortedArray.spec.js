'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Merge Sorted Array', () => {
  const sandbox = sinon.createSandbox();
  let MergeSortedArray;
  let merge;

  before(() => { });
  beforeEach(() => {
    MergeSortedArray = rewire('../../../../../lib/explore/arrays101/inserting/MergeSortedArray');
    merge = MergeSortedArray.__get__('merge');
  });
  after(() => { });
  afterEach(() => {
    sandbox.reset();
  });

  it('merge [1,2,3,0,0,0] & [2,5,6] -> output [1,2,2,3,5,6]', () => {
    let num1 = [1, 2, 3, 0, 0, 0];
    let m = 3;
    let num2 = [2, 5, 6];
    let n = 3;
    expect(merge(num1, m, num2, n)).to.eql([1, 2, 2, 3, 5, 6]);
  });
});