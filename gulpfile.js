var gulp = require("gulp");
const { src, dest } = require("gulp");
const minify = require("gulp-minify");
var browserSync = require("browser-sync").create();

gulp.task("default", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("*.html").on("change", browserSync.reload);
});

// function minifyjs() {
//   return src("main.js", "sass/main.scss", { allowEmpty: true })
//     .pipe(minify({ noSource: true }))
//     .pipe(dest("min", "css"));
// }

// exports.default = minifyjs;
