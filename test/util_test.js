const expect = require('chai').expect;
const util = require('../lib/util');
const sinon = require('sinon');
require('mocha-sinon');

describe('TestUtilDebug', () => {
  it('Should be able to console.log', (done) => {
    const logfunc = sinon.spy();
    logfunc(util.log('I have just console logged.'));
    expect(logfunc.callCount).to.equal(1);
    done();
  });

  it('Should be able to console.warn', (done) => {
    const warnfunc = sinon.spy();
    warnfunc(util.warn('I have just console warned'));
    expect(warnfunc.callCount).to.equal(1);
    done();
  });

  it('Should be able to console.error', (done) => {
    const errfunc = sinon.spy();
    errfunc(util.error('I have just console errored'));
    expect(errfunc.callCount).to.equal(1);
    done();
  });
});

describe('Version bumping', () => {
  const num = '1.4.6';
  let actualNum;

  it('Should be able to increment the major version number', (done) => {
    actualNum = util.bumper(num, 'major');
    expect(actualNum).to.be.equal('2.0.0');
    done();
  });

  it('Should be able to increment the major version number', (done) => {
    actualNum = util.bumper(num, 'minor');
    expect(actualNum).to.be.equal('1.5.0');
    done();
  });

  it('Should be able to increment the major version number', (done) => {
    actualNum = util.bumper(num, 'patch');
    expect(actualNum).to.be.equal('1.4.7');
    done();
  });
});
