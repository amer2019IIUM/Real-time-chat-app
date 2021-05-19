const path = require('path');
const webpack = require('webpack')
module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
};

mix.webpackConfig ({
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
})