var is = require('aimee-is')
var extend = require('aimee-extend')
var Config = require('vpm-config')

var i = 0;

setInterval(function(){
    console.log(++i + ' deploy is work!')
}, 1000)
