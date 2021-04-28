'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Squares Of A Sorted Array', () => {
  const sandbox = sinon.createSandbox();
  let SquaresOfASortedArray;
  let sortedSquares;

  before(() => {});
  beforeEach(() => {
    SquaresOfASortedArray = rewire('../../../../lib/explore/arrays101/SquaresOfASortedArray');
    sortedSquares = SquaresOfASortedArray.__get__('sortedSquares');
  });
  after(() => {});
  afterEach(() => {
    sandbox.reset();
  });
  
  it('input [-4,-1,0,3,10] -> output [0,1,9,16,100]', ()=> {
    let nums = [-4,-1,0,3,10];
    expect(sortedSquares(nums)).to.eql([0,1,9,16,100]);
  });
});