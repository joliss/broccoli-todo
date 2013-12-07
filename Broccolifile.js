module.exports = function (pkg, broccoli) {
  pkg.setAssetDirectory('app')
  pkg.setTargetDirectory('appkit')
  pkg.setTransformer(new broccoli.transformers.preprocessors.PreprocessorPipeline([
    new broccoli.transformers.preprocessors.ES6TemplatePreprocessor({
      extensions: ['hbs', 'handlebars'],
      compileFunction: 'Ember.Handlebars.compile'
    })
  ]))
}
