import gulp from 'gulp';
import utils from '../utils';
import config from '../config';
import help from 'gulp-help';
import conventionalChangelog from 'gulp-conventional-changelog'

// provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
help(gulp);

let options = utils.mergeOptions(config.folders, gulp.options.changelogMD);

gulp.task('changelog', function () {

  return gulp.src(config.files.changelogMD, { buffer: false })
    .pipe(conventionalChangelog({ preset: 'angular' }))
    .pipe(gulp.dest(options.folders.changelogMD));
});
