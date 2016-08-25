const colors = require('colors');
const dateFormat = require('dateformat');
const format = require('format');

const space = '\n----------------------------------------\n';

// formats the time to day, month, date, year, hours, minutes, seconds, and am or pm
const date = dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');

exports.log = (method, obj, status) => {
  // sets the colors for these variables
  colors.setTheme({
    dates: 'green',
    methods: 'green',
    forms: 'green',
  });

  // assigns variables to specific colors and formats it
  const allInfo = date.dates + ' ' + method.methods + ' '
  + colors.green.underline(status) + space.green;

  const noStatus = date.dates + ' ' + method.methods + ' '
  + (format.format('%d', obj)).forms + space.green;

  if (process.env.NODE_DEBUG) {
    if (status === undefined) {
      console.log(noStatus);
    } else {
      console.log(allInfo);
    }
  }
};

exports.warn = (method, obj, status) => {
  // sets the colors for these variables
  colors.setTheme({
    dates: 'yellow',
    methods: 'yellow',
    forms: 'yellow',
  });

  // assigns variables to specific colors and formats it
  const allInfo = date.green + ' ' + method.green + ' '
  + colors.green.underline(status) + space.yellow;

  const noStatus = date.dates + ' ' + method.methods + ' '
  + (format.format('%d', obj)).forms + space.yellow;

  if (process.env.NODE_DEBUG) {
    if (status === undefined) {
      console.warn(noStatus);
    } else {
      console.warn(allInfo);
    }
  }
};

exports.error = (method, obj, status) => {
  // sets the colors for these variables
  colors.setTheme({
    dates: 'red',
    methods: 'red',
    forms: 'red',
  });

  // assigns variables to specific colors and formats it
  const allInfo = date.green + ' ' + method.green + ' '
  + colors.cyan.underline(status) + space.red;

  const noStatus = date.dates + ' ' + method.methods + ' '
  + (format.format('%d', obj)).forms + space.red;

  if (process.env.NODE_DEBUG) {
    if (status === undefined) {
      console.error(noStatus);
    } else {
      console.error(allInfo);
    }
  }
};

// Version bumper
exports.bumper = (version, tag) => {
  // Turns the tag to lowercase letters
  const lowerVersion = tag.toLowerCase();
  // Splitting up the version number
  const splitVerNum = version.split('.');
  // Turns the split version number into numbers
  splitVerNum.map(Number);
  // Checks the tag to figure out which number to increment
  if (lowerVersion === 'major') {
    splitVerNum[0]++;
    splitVerNum[1] = 0;
    splitVerNum[2] = 0;
  } else if (lowerVersion === 'minor') {
    splitVerNum[1]++;
    splitVerNum[2] = 0;
  } else if (lowerVersion === 'patch') {
    splitVerNum[2]++;
  }
  return splitVerNum.join('.');
};
