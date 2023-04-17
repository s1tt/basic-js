const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push('(  )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
