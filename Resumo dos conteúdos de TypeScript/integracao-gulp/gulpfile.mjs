import gulp from 'gulp'
const { series, parallel, src, dest } = gulp;
import {deleteAsync as del} from 'del'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import tsify from 'tsify'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'

function clearDist() { 
    return del(['dist'])
}

function copyHTML() { 
    console.log('Copying HTML files...');
    return src('public/**/*')
    .pipe(dest('dist'))
    .on('end', () => {
        console.log('HTML files copied successfully!');
    });
}

function buildJS() {
    return browserify({
        basedir:'.',
        entries:['src/main.ts']
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(dest('dist'))
}

function gerarJSProducao() {
    return src('dist/app.js')
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'))
}

const _default = series(
    clearDist,
    parallel(buildJS, copyHTML),
    gerarJSProducao
)
export default _default;