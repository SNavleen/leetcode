'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Duplicate Zeros', () => {
  const sandbox = sinon.createSandbox();
  let DuplicateZeros;
  let duplicateZeros;

  before(() => { });
  beforeEach(() => {
    DuplicateZeros = rewire('../../../../../lib/explore/arrays101/inserting/DuplicateZeros');
    duplicateZeros = DuplicateZeros.__get__('duplicateZeros');
  });
  after(() => { });
  afterEach(() => {
    sandbox.reset();
  });

  it('input [1,0,2,3,0,4,5,0] -> output [1,0,0,2,3,0,0,4]', () => {
    let nums = [1, 0, 2, 3, 0, 4, 5, 0];
    expect(duplicateZeros(nums)).to.eql([1, 0, 0, 2, 3, 0, 0, 4]);
  });
});