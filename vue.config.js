const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/interview-calculator/'
        : '/',
    /*pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [path.resolve(__dirname, './src/styles/scss/main.scss')],
        },
    }*/
    /*css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "@/styles/scss/main.scss";

                `
            }
        }
    }*/
};
