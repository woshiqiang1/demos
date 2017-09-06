//AMD定义模块
define(['jquery'],function($){
    function ActiveCarousel($mainBox){
        this.mainBox = $mainBox;
        this.container = this.mainBox.find($('.container'));
        this.picItems = this.container.children($('li'))
        this.nextBtn = this.mainBox.find($('.next'));
        this.preBtn = this.mainBox.find($('.pre'));
        this.pageIndex = 0;
        this.imgCount = this.container.find($('li')).length;
        this.imgWidth = $(window).width();
        this.step = -this.imgWidth;
        this.bulletItems = this.mainBox.find($('.bullet li'));

        this.init();
        this.bind();
        this.selectMove()
    }
    ActiveCarousel.prototype = {
        init: function(){
            this.container.append(this.picItems.first().clone())
            this.container.prepend(this.picItems.last().clone())
            this.container.width((this.imgCount + 2)*this.imgWidth)
            this.picItems = this.container.children($('li'));
            this.picItems.width(this.imgWidth)
            this.container.css({left: -this.imgWidth})
        },
        playNext: function(n){
            if(this.pageIndex >= 3){
                this.container.css({left: '0'})
                this.pageIndex = -1;
                this.step = 0;
            }
            this.step += -this.imgWidth*n;
            this.pageIndex += n;
            this.container.animate({
                left: this.step
            },500)
            console.log(this.pageIndex)
        },
        playPre: function(n){
            if(this.pageIndex <= 0){
                this.container.css({left: -this.imgWidth*4})
                this.pageIndex = 4;
                this.step = -this.imgWidth*4;
            }
            this.step += this.imgWidth*n;
            this.pageIndex -= n;
            this.container.animate({
                left: this.step
            },500)
            console.log(this.pageIndex)
        },
        bind: function(){
            var _this = this;
            this.nextBtn.on('click',function(){
                _this.playNext(1);
                _this.bulletMove();
            })
            this.preBtn.on('click',function(){
                _this.playPre(1);
                _this.bulletMove();
            })
        },
        bulletMove: function(){
            this.bulletItems.removeClass('active')
            this.bulletItems.eq(this.pageIndex).addClass('active')
        },
        selectMove: function(){
            var _this = this;
            this.mainBox.find($('.bullet')).on('click','li',function() {
                var index = $(this).index();
                var n = index - _this.pageIndex;
                if (n > 0) {
                    _this.playNext(n)
                } else {
                    _this.playPre(-n)
                }
                _this.bulletMove()
            })
        },
        autoPlay: function(){
            var _this = this;
            setInterval(function(){
                _this.playNext(1);
                _this.bulletMove();
            },3000)
        }
    }
    return ActiveCarousel;
})
// var carsousel = new ActiveCarousel($('.carousel-box').eq(0))
// var carsouse2 = new ActiveCarousel($('.carousel-box').eq(1))
// carsousel.autoPlay();
