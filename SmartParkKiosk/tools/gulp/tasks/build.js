module.exports = function(gulp, plugins, config) {
    gulp.task('build-development', ['clean-rev', 'scripts', 'styles', 'server'], function () {
        return gulp.src(config.paths.build.templates.index)
            .pipe(gulp.dest(config.paths.build.dest));
    });

    gulp.task('build-only', ['clean-rev', 'scripts', 'styles'], function () {
        return gulp.src(config.paths.build.templates.index)
            .pipe(gulp.dest(config.paths.build.dest));
    });
};
