var gulp = require('gulp');
var phantomcss = require('gulp-phantomcss');
var PSD = require('psd');


gulp.task('compare', function (){
  gulp.src('compare/testsuite.js')
    .pipe(phantomcss());
});

gulp.task('psd_to_png', function (){
	PSD.open("compare/psd/baseimage.psd").then(function (psd) {
		return psd.image.saveAsPng('compare/screenshots/baseimage_0.png');
	}).then(function () {
		console.log("Finished!");
	});
});