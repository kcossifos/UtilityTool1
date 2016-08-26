const gulp = require('gulp');
const util = require('./lib/util');
const yargs = require('yargs').argv;
const git = require('gulp-git');
const pjson = require('./package.json');
const fs = require('fs');

let vNum;
let newNum;
gulp.task('number', () => {
  const num = yargs.num;
  if (num === 'major' || num === 'minor' || num === 'patch') {
    newNum = util.bumper(pjson.version, num);
    pjson.version = newNum;
    const jString = JSON.stringify(pjson, null, 2);
    fs.writeFile('./package.json', jString, { mode: 0o666 }, (err) => {
      if (err) throw err;
    });
  }
});

gulp.task('gitAdd', () => {
  return gulp.src('./package.json').pipe(git.add());
});

gulp.task('gitCommit', () => {
  return gulp.src('./package.json').pipe(git.commit('New Version Number'));
});

gulp.task('gitPush', () => {
  git.push('origin', 'release', (err) => {
    if (err) throw err;
  });
});

gulp.task('gitTag', () => {
  git.tag('v' + newNum, 'New Tag Number is ' + newNum);
});

gulp.task('default', ['number', 'gitAdd', 'gitCommit', 'gitPush', 'gitTag']);
