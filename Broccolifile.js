module.exports = function (factory, broccoli) {
  var pkg = factory.makePackage()
    .map({
      'app': '/appkit'
    })
  pkg.setTransformer(new broccoli.transformers.preprocessors.PreprocessorPipeline([
    new broccoli.transformers.preprocessors.ES6TemplatePreprocessor({
      extensions: ['hbs', 'handlebars'],
      compileFunction: 'Ember.Handlebars.compile'
    })
  ]))
  return [pkg]
}
