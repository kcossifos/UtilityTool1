const expect = require('chai').expect;
const util = require('../lib/util');
const fs = require('fs');

describe('TestUtilDebug', () => {
  let totalChar = 0;
  let path;
  /* eslint-disable */
  before(() => {
  /* eslint-enable */
    const dirName = 'logs';
    if (!process.env.NODE_ENV) {
      process.env.NODE_ENV = 'dev';
    }
    // if dirName does not exist make file dirName
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName);
    }
    path = dirName + '/log.log';
    // if path does not exist append it to the file log.log
    if (!fs.existsSync(path)) {
      fs.appendFileSync(path, '', { mode: 0o666, flag: 'a' });
    }
    totalChar = fs.readFileSync(path).length;
  });

  it('Should be able to append to log file when status is not defined', (done) => {
    util.debug({ methods: '"Hello without status"' }, 30);
    const newCharlength = fs.readFileSync(path).length;
    expect(newCharlength).to.be.above(totalChar);
    totalChar = newCharlength;
    done();
  });

  it('Should be able to append to log file when status is defined', (done) => {
    util.debug({ methods: '"Hello with status"' }, 35, 2);
    const newCharlength = fs.readFileSync(path).length;
    expect(newCharlength).to.be.above(totalChar);
    totalChar = newCharlength;
    done();
  });

  it('Should not be able to append to log file when NODE_ENV is not defined', (done) => {
    process.env.NODE_ENV = '';
    util.debug({ methods: '"Hello with process.env.NODE_ENV not defined" ' }, 43, 2);
    const newCharlength = fs.readFileSync(path).length;
    expect(newCharlength).to.be.equal(totalChar);
    done();
  });
});
