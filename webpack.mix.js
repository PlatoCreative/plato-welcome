/*-------------------------------------------------------------------
Required plugins
-------------------------------------------------------------------*/
const { mix } = require('laravel-mix');

mix.sass('scss/plato-welcome.scss', 'client/css/')
    .sourceMaps()
    .options({
        processCssUrls: false,
        purifyCss: false,
        clearConsole: true
    });
