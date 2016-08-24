const colors = require('colors');
const dateFormat = require('dateformat');
const fs = require('fs');
const format = require('format');

const space = '\n--------------\n';

// formats the time to day, month, date, year, hours, minutes, seconds, and am or pm
const date = dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');

exports.log = (method, obj, status) => {
  // sets the colors for these variables
  colors.setTheme({
    dates: 'green',
    methods: 'cyan',
    forms: 'cyan',
  });

  // assigns variables to specific colors and formats it
  const allInfo = date.dates + ' ' + method.methods + ' '
  + colors.green.underline(status) + space;

  const noStatus = date.dates + ' ' + method.methods + ' '
  + (format.format('%d', obj)).forms + space;

  const noStat = date + ' ' + format.format('%d', obj) + space;

  const info = date + ' ' + method + ' ' + status + space;

// Node_ENV = true this if statement will run
  if (process.env.NODE_ENV) {
    // fs.appendFile synchronously writes data to the log file
    // with the option of allowing integers and strings
    if (status === undefined) {
      console.log(noStatus);
      fs.appendFileSync('logs/log.log', noStat, { mode: 0o666, flag: 'a' });
    } else {
      console.log(allInfo);
      fs.appendFileSync('logs/log.log', info, { mode: 0o666, flag: 'a' });
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
  + colors.green.underline(status) + space;

  const noStatus = date.dates + ' ' + method.methods + ' '
  + (format.format('%d', obj)).forms + space;

  const noStat = date + ' ' + format.format('%d', obj) + space;

  const info = date + ' ' + method + ' ' + status + space;

// Node_ENV = true this if statement will run
  if (process.env.NODE_ENV) {
    // fs.appendFile synchronously writes data to the log file
    // with the option of allowing integers and strings
    if (status === undefined) {
      console.warn(noStatus);
      fs.appendFileSync('logs/log.log', noStat, { mode: 0o666, flag: 'a' });
    } else {
      console.log(allInfo);
      fs.appendFileSync('logs/log.log', info, { mode: 0o666, flag: 'a' });
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
  + colors.cyan.underline(status) + space;

  const noStatus = date.dates + ' ' + method.methods + ' '
  + (format.format('%d', obj)).forms + space;

  const noStat = date + ' ' + format.format('%d', obj) + space;

  const info = date + ' ' + method + ' ' + status + space;

// Node_ENV = true this if statement will run
  if (process.env.NODE_ENV) {
    // fs.appendFile synchronously writes data to the log file
    // with the option of allowing integers and strings
    if (status === undefined) {
      console.error(noStatus);
      fs.appendFileSync('logs/log.log', noStat, { mode: 0o666, flag: 'a' });
    } else {
      console.log(allInfo);
      fs.appendFileSync('logs/log.log', info, { mode: 0o666, flag: 'a' });
    }
  }
};
