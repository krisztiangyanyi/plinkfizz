const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

//compile scss into css
function dev() {
    return (
        gulp
            .src("./src/scss/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("./src/css"))
            //stream changes to all browsers
            .pipe(browserSync.stream())
    );
}

//watch function
function watch() {
    browserSync.init({
        server: {
            baseDir: "./src/",
        },
    });

    gulp.watch("src/scss/**/*.scss", dev);
    gulp.watch("./**/*.html").on("change", browserSync.reload);
    gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
}

exports.dev = dev;
exports.watch = watch;
