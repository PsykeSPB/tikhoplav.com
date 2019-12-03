const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

const buildConfig = merge(baseConfig, {
  mode: "production",
  plugins: [],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildConfig);
});
