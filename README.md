# generator-javascript-kata [![Build Status](https://secure.travis-ci.org/francho/generator-javascript-kata.png?branch=master)](https://travis-ci.org/francho/generator-javascript-kata)

A \([Yeoman](http://yeoman.io)\) scaffold generator for TDD javascript katas.

## Usage

Install `generator-javascript-kata` \(if it isn't installed yet\):
```
npm install -g generator-javascript-kata
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Generate the scaffold:
```
yo javascript-kata
```

Start the tests runner (when you write new code, it rerun the tests automatically):
```
./node_modules/.bin/karma start
```

Now it's your turn... it's time to code :)

Note: You must put your code into `./app/src` folder and your tests under `./test/spec` folder

## Libraries and tools included by default

* [chaijs](http://chaijs.com/)
* [underscore](http://underscorejs.org/)

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

