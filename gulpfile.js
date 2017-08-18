var gulp = require('gulp')
var auth = require('./_private/settings');
var spsave = require('gulp-spsave');
var replace = require('gulp-replace');

gulp.task('changeBase', function() {
    gulp.src(['./dist/index.aspx'])
        .pipe(replace('<base href="/">', '<base href="/sites/ESB2/DBFISNUC/EmployeeApp/">'))
        .pipe(gulp.dest('./dist'));
});

gulp.task("spsave", ['changeBase'], function() {
    return gulp.src(["./dist/**/*.*"])
        .pipe(spsave({
            siteUrl: auth.siteUrl,
            folder: "SitePages/EmployeeApp",
            flatten: false
        }, auth));
});