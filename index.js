var gulp = require('gulp');
var opine = require('gulp-opine');

var Spritesheet = require('gamesprites');

var module = opine.module('sprites');
var sources = module.getSources();
var dest = module.getDest();

// TODO update gamesprites to allow for wildpaths
var sourceDir = sources[0].replace(/\/\*.*/, '');

module.addBuild();
module.addWatch(sources);

module.task(function(done) {
    console.log(sourceDir, dest);
    var sheet = new Spritesheet(sourceDir, dest);
    sheet.compile().then(out => {
        done();
    }).catch(e => {
        // TODO better error reporting
        console.log(e);
        done();
    });
});
