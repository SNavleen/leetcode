'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Check If N and Its Double Exist', () => {
  const sandbox = sinon.createSandbox();
  let CheckIfNandItsDoubleExist;
  let checkIfExist;

  before(() => { });
  beforeEach(() => {
    CheckIfNandItsDoubleExist = rewire('../../../../../lib/explore/arrays101/searching/CheckIfNandItsDoubleExist');
    checkIfExist = CheckIfNandItsDoubleExist.__get__('checkIfExist');
  });
  after(() => { });
  afterEach(() => {
    sandbox.reset();
  });

  it('input [10,2,5,3] -> output true', () => {
    const nums = [10, 2, 5, 3];
    expect(checkIfExist(nums)).to.eql(true);
  });

  it('input [3,1,7,11] -> output false', () => {
    const nums = [3, 1, 7, 11];
    expect(checkIfExist(nums)).to.eql(false);
  });

  it('input [7,1,14,11] -> output true', () => {
    const nums = [7, 1, 14, 11];
    expect(checkIfExist(nums)).to.eql(true);
  });
});