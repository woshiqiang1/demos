define(['jquery','com/carousel-module','com/waterfall-module','com/gotop-module'],function($,ActiveCarousel,WaterfallLayout,GoTop){
    var carouse = new ActiveCarousel($('#carousel'))
    carouse.autoPlay()
    var waterfall = new WaterfallLayout($('#layout .container'))
    var gotop = new GoTop($('.main'))
})