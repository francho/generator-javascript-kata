'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var JavascriptKataGenerator = module.exports = function JavascriptKataGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(JavascriptKataGenerator, yeoman.generators.Base);


JavascriptKataGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/src');
  this.mkdir('test/spec');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_karma.conf.js', 'karma.conf.js');
};

JavascriptKataGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
