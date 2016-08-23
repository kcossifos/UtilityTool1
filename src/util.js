exports.debug = (method, obj, status) => {
  const colors = require('colors');
  const dateFormat = require('dateformat');
  const format = require('format');

  const space = '\n--------------\n';

  // formats the time to day, month, date, year, hours, minutes, seconds, and am or pm
  const date = dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');

// sets the colors for these variables
  colors.setTheme({
    dates: 'magenta',
    methods: 'green',
    forms: 'cyan',
  });

  // assigns variables to specific colors and formats it
  const allInfo = date.dates + ' ' + method.methods + ' '
  + colors.red.underline(status) + space;

  const noStatus = date.dates + ' ' + method.methods + ' '
  + (format.format('%d', obj)).forms + space;

  // const noStat = date + ' ' + format.format('%d', obj) + space;

  // const info = date + ' ' + method + ' ' + status + space;

// Node_ENV = true this if statement will run
  if (process.env.NODE_ENV) {
    // with the option of allowing integers and strings
    if (status === undefined) {
      console.log(noStatus);
    } else {
      console.log(allInfo);
    }
  }
};
