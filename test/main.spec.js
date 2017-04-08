const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {expect} = chai;

chai.use(chaiAsPromised);

describe('http-reject-empty', () => {
  const empty = require('../lib');

  describe('exports', () => {
    it('should expose a function', () => {
      expect(empty).to.be.a('function');
    });
  });

  describe('with empty input', () => {
    it('should return a rejected promise', () => {
      expect(empty()).to.eventually.be.rejectedWith(Error);
    });
  });

  describe('with valid input', () => {
    it('should return given value', () => {
      const x = Math.random();

      expect(empty(x)).to.equal(x);
    });
  });
});