const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  addWebpackPlugin,
} = require("customize-cra");
const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = override(
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      React: "react",
    }),
    addWebpackPlugin(new BundleAnalyzerPlugin()),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
    }),
  ),
);
