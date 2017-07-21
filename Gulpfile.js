let gulp = require('gulp');
var minify = require('gulp-minify');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');

gulp.task('compress', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish')) 
    .pipe(jshint.reporter('fail')) 
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist')) 
});

gulp.task('default', ['compress'],);