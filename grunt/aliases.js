module.exports = {
  default: [
    'dev'
  ],

  build: [
    'babel',
    'umd',
    'uglify'
  ],

  dev: [
    'build',
    'test',
    'watch'
  ],

  dist: [
    'build',
    'docs'
  ],

  docs: [
    'clean:docs',
    'groc'
  ],

  test: [
    'mocha:test'
  ]
}
