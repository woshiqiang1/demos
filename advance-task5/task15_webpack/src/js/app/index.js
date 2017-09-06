var carouse = require()


function($,ActiveCarousel,WaterfallLayout,GoTop){
    var carouse = new ActiveCarousel($('#carousel'))
    carouse.autoPlay()
    var waterfall = new WaterfallLayout($('#layout .container'))
    var gotop = new GoTop($('.main'))
}