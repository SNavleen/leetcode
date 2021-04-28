'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Find Numbers With Even Number Of Digits', () => {
  const sandbox = sinon.createSandbox();
  let FindNumbersWithEvenNumberOfDigits;
  let findNumbers;

  before(() => {});
  beforeEach(() => {
    FindNumbersWithEvenNumberOfDigits = rewire('../../../../lib/explore/arrays101/FindNumbersWithEvenNumberOfDigits');
    findNumbers = FindNumbersWithEvenNumberOfDigits.__get__('findNumbers');
  });
  after(() => {});
  afterEach(() => {
    sandbox.reset();
  });
  
  it('input [12,345,2,6,7896] -> output 2', ()=> {
    let nums = [12,345,2,6,7896];
    expect(findNumbers(nums)).to.eql(2);
  });
});