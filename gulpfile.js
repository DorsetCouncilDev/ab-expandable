var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassGlob = require('gulp-sass-glob');
var bootstrap = 'node_modules/bootstrap/scss';

var browserSync = require('browser-sync').create();

const { watch } = require('gulp');

    function startServer(){
    browserSync.init({
        server:{},
        open:false
    })
}

    function reloadBroweserSync(cb){
        browserSync.reload();
    }
    
    function compileSCSS(){
        gulp.src("scss/**/*.scss")
        // .pipe(sassGlob())
        .pipe(sass())
        // .pipe(sass({includePaths: [bootstrap],outputStyle: 'compressed'}))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("sourcemaps"))
        .pipe(gulp.dest("css"))
        
    }

    function defaultTask(){
        compileSCSS();
        startServer();
        watch('scss/*.scss',gulp.series(compileSCSS));
        watch('*.html').on("change",reloadBroweserSync);
    }

    exports.default = defaultTask;