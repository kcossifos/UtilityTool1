const util = require('../lib/util');

describe('Test Util Debug', () => {
  /* eslint-disable */
  before(() => {
  /* eslint-enable */
    if (!process.env.NODE_ENV) {
      process.env.NODE_ENV = 'dev';
    }
  });

  it('Should be able to append to log file when status is not defined', (done) => {
    util.debug({ methods: '"Hello without status"' }, 30);
    done();
  });

  it('Should be able to append to log file when status is defined', (done) => {
    util.debug({ methods: '"Hello with status"' }, 35, 2);
    done();
  });

  it('Should not be able to append to log file when NODE_ENV is not defined', (done) => {
    process.env.NODE_ENV = '';
    util.debug({ methods: '"Hello with process.env.NODE_ENV not defined" ' }, 43, 2);
    done();
  });
});
