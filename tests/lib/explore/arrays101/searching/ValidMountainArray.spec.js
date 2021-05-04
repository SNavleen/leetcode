'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Valid Mountain Array', () => {
  const sandbox = sinon.createSandbox();
  let ValidMountainArray;
  let validMountainArray;

  before(() => { });
  beforeEach(() => {
    ValidMountainArray = rewire('../../../../../lib/explore/arrays101/searching/ValidMountainArray');
    validMountainArray = ValidMountainArray.__get__('validMountainArray');
  });
  after(() => { });
  afterEach(() => {
    sandbox.reset();
  });

  it('input [2,1] -> output false', () => {
    const nums = [2, 1];
    expect(validMountainArray(nums)).to.eql(false);
  });

  it('input [3,5,5] -> output false', () => {
    const nums = [3, 5, 5];
    expect(validMountainArray(nums)).to.eql(false);
  });

  it('input [0,3,2,1] -> output true', () => {
    const nums = [0, 3, 2, 1];
    expect(validMountainArray(nums)).to.eql(true);
  });
});