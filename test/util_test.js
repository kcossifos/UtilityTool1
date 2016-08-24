const expect = require('chai').expect;
const util = require('../lib/util');
const sinon = require('sinon');
require('mocha-sinon');

describe('TestUtilDebug', () => {
  it('Should be able to console.log', (done) => {
    const logfunc = sinon.spy();
    logfunc(util.log('Logged stuff.'));
    expect(logfunc.callCount).to.equal(1);
    done();
  });

  it('Should be able to console.warn', (done) => {
    const warnfunc = sinon.spy();
    warnfunc(util.warn('Logging'));
    expect(warnfunc.callCount).to.equal(1);
    done();
  });

  it('Should be able to console.error', (done) => {
    const errfunc = sinon.spy();
    errfunc(util.error('Logging'));
    expect(errfunc.callCount).to.equal(1);
    done();
  });
});
