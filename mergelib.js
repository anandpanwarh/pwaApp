const merge = require('concat');

const files = [
    './dist/pwa-app/runtime.js',
    './dist/pwa-app/polyfills.js',
    './dist/pwa-app/scripts.js',
    './dist/pwa-app/main.js'
]

merge(files, './dist/pwa-app/pwa-app.js');
console.info('file generated');