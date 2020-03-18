const { execSync } = require('child_process');
const BundleTracker = require("webpack-bundle-tracker");


/*
* Returns all the static directories of all the plugins
*/
var getPluginConfigs = function(){
  let result = execSync('python ../manage.py getPluginJsConfigs').toString();
  return JSON.parse(result);
}

module.exports = {
    baseUrl: "http://0.0.0.0:8080/",
    outputDir: './dist/',
    chainWebpack: config => {
        config.optimization
            .splitChunks(false)
        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{filename: '../frontend/webpack-stats.json'}])

        config.resolve.alias.set(
          "OurModule", "/Users/fredkingham/Scripts/ohcdev/django-vue/opal_example_app/opal_example_app/static/js"
        )

        let entry = config.entry('app');
        // let entries = getPluginConfigs();

        // entries.forEach(entryPoint => {
        //   entry.add(entryPoint);
        // });

        entry.add('./src/main.js')

        entry.end()

        config.devServer
            .public('http://0.0.0.0:8080')
            .host('0.0.0.0')
            .port(8080)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .headers({"Access-Control-Allow-Origin": ["\*"]})
            }
        };
