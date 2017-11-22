var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var imageMin = require('gulp-imagemin');

gulp.task("default1", function() {
    var jsFilter = filter("**/*.js",{restore:true});
    var cssFilter = filter("**/*.css",{restore:true});
    var indexHtmlFilter=filter(['**/*','!**/index.html'],{restore:true})
    return gulp.src("src/index.html")
        .pipe(useref())      // Concatenate with gulp-useref
        .pipe(jsFilter)
        .pipe(uglify())             // Minify any javascript sources
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())               // Minify any CSS sources
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)                // Rename the concatenated files
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())         // Substitute in new filenames
        .pipe(gulp.dest('dist'));
});

gulp.task("default2",function(){
    return gulp.src("src/img/*.*").pipe(imageMin()).pipe(gulp.dest("dist/img"))
})

gulp.task("default",['default1','default2'])
