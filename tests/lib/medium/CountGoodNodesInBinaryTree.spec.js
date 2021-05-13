'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

describe('Count Good Nodes In Binary Tree', () => {
  const sandbox = sinon.createSandbox();
  let CountGoodNodesInBinaryTree;
  let goodNodes;

  before(() => { });
  beforeEach(() => {
    CountGoodNodesInBinaryTree = rewire('../../../lib/medium/CountGoodNodesInBinaryTree');
    goodNodes = CountGoodNodesInBinaryTree.__get__('goodNodes');
  });
  after(() => { });
  afterEach(() => {
    sandbox.reset();
  });

  it('input [3,1,4,3,null,1,5] -> output 4', () => {
    let nums = {
      val: 3,
      left: {
        val: 1,
        left: {
          val: 3
        }
      },
      right: {
        val: 4,
        left: {
          val: 1
        },
        right: {
          val: 5
        }
      },
    };
    expect(goodNodes(nums)).to.eql(4);
  });

  it('input [3,3,null,4,2] -> output 3', () => {
    let nums = {
      val: 3,
      left: {
        val: 3,
        left: {
          val: 4
        },
        right: {
          val: 2
        }
      }
    };
    expect(goodNodes(nums)).to.eql(3);
  });

  it('input [1] -> output 1', () => {
    let nums = {
      val: 1,
    };
    expect(goodNodes(nums)).to.eql(1);
  });
});