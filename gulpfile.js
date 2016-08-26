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
    // new verison number is set equal to bump of the old verison number
    newNum = util.bumper(pjson.version, num);
    // redeclares the old version number as the old one
    pjson.version = newNum;
    // declares the package.json into string
    const jString = JSON.stringify(pjson, null, 2);
    // writes the package.json file the new version number
    fs.writeFile('./package.json', jString, { mode: 0o666 }, (err) => {
      if (err) throw err;
    });
  }
});

// git add
gulp.task('gitAdd', () => {
  return gulp.src('./package.json').pipe(git.add());
});

// git commit
gulp.task('gitCommit', () => {
  return gulp.src('./package.json').pipe(git.commit('New Version Number'));
});

// pushes the commit to the release branch
gulp.task('gitPush', () => {
  git.push('origin', 'release', (err) => {
    if (err) throw err;
  });
});

// tags the new verison number
gulp.task('gitTag', () => {
  git.tag('v' + newNum, 'New Tag Number is ' + newNum);
});

gulp.task('default', ['number', 'gitAdd', 'gitCommit', 'gitPush', 'gitTag']);
