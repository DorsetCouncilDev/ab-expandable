var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


var browserSync = require('browser-sync').create();


var jest = require('gulp-jest').default;
 
function test(){
   gulp.src('tests/test.js').pipe(jest({
    "preprocessorIgnorePatterns": [
      "<rootDir>/dist/", "<rootDir>/node_modules/"
    ],
    "automock": false
  }));
}


const { watch } = require('gulp');

    function startServer(){
    browserSync.init({
        server:{},
        open:false
    });
}


    function reloadBroweserSync(){
        browserSync.reload();
    }
    
    function compileSCSS(){
        gulp.src("scss/**/*.scss")
        // .pipe(sassGlob())
        .pipe(sass())
        // .pipe(sass({includePaths: [bootstrap],outputStyle: 'compressed'}))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("sourcemaps"))
        .pipe(gulp.dest("css"));
        
    }

    function defaultTask(){
        compileSCSS();
        startServer();
        watch('scss/*.scss',gulp.series([compileSCSS,test]));
        watch('*.html').on("change",reloadBroweserSync);
        watch('js/*.js',gulp.series(test));
    }

    exports.default = defaultTask;