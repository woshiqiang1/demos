var carouse = require('./carousel-module.js'),
    gotop = require('./gotop-module.js'),
    waterfall = require('./waterfall-module.js');
var carouse1 = new carouse($('#carousel'))
carouse1.autoPlay()
var waterfall1 = new waterfall($('#layout .container'))
var gotop1 = new gotop($('.main'))

