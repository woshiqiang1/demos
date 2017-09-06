var gulp = require('gulp');

//引入组件
var minifycss = require('gulp-minify-css'),//css压缩
    jshint = require('gulp-jshint'),//js代码规范性检查
    uglify = require('gulp-uglify'),//js压缩
    imagemin = require('gulp-imagemin'),//图片压缩
    concat = require('gulp-concat'),//合并文件
    rename = require('gulp-rename');//重命名

    gulp.task('css',function(){
      gulp.src('src/css/*.css')
          .pipe(concat('merge.css'))
          .pipe(rename({
            suffix: '.min'
          }))
          .pipe(minifycss())
          .pipe(gulp.dest('dist/css/'))
    });

    gulp.task('img',function(){
      gulp.src('src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/imgs'))
    });

    gulp.task('js', function() {
      gulp.src('src/js/*.js')
          .pipe(jshint())
          .pipe(jshint.reporter('default'))
          .pipe(concat('merge.js'))
          .pipe(rename({
              suffix: '.min'//以min为后缀，意思是压缩后的文件
          }))
          .pipe(uglify())
          .pipe(gulp.dest('dist/js/'));
  });

    gulp.task('build',['css','img','js']);
