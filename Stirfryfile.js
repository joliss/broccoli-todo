module.exports = function (broccoli) {
  var mainPackages = broccoli.readers.Package.fromDirectory('.') // improve API
  var bowerPackages = broccoli.readers.bowerPackages('vendor')

  var packages = mainPackages.concat(bowerPackages)
  var packageReader = new broccoli.readers.PackageReader(packages)

  var compilerCollection = new broccoli.transformers.compilers.CompilerCollection({
    staticFiles: ['appkit/index.html'],
    compilers: [
      new broccoli.transformers.compilers.ES6ConcatenatorCompiler({
        loaderFile: 'loader.js', // make this a default
        ignoredModules: [
          'resolver'
        ],
        inputFiles: [
          'appkit/**/*.js'
        ],
        legacyFilesToAppend: [
          'jquery.js',
          'handlebars.js',
          'ember.js',
          'ember-data.js',
          'ember-resolver.js'
        ],
        outputFile: '/assets/app.js'
      })
    ]
  })
  var builder = new broccoli.Builder({
    reader: packageReader,
    transformer: compilerCollection
  })

  return builder
}
