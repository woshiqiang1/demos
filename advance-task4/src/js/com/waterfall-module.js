define(['jquery'],function($){
    function WaterfallLayout($container) {
        this.$container = $container;
        this.$button = this.$container.siblings($('.button'))
        this.init();
        this.bind();
        let _this = this;
        window.onload =function(){_this.waterfallPlace();}
    }
    WaterfallLayout.prototype = {
        init: function(){
            this.hightCountArray = [];
            var _this = this;
            this.$container.find($('img')).eq(0).load(
                function(){
                    _this.picWidth = _this.$container.find($('img'))[0].width
                    _this.picColumn = Math.floor(_this.$container.width()/_this.picWidth)
                    for (let i = 0;i < _this.picColumn; i++){
                        _this.hightCountArray[i] = 0;
                    }
                    console.log(_this.hightCountArray)
                }
            )
        },
        waterfallPlace: function(){
            let _this = this;
            this.$container.find($('li')).each(function () {
                _this.minHeight = Math.min.apply(null,_this.hightCountArray);
                console.log(_this.hightCountArray)
                _this.index = _this.hightCountArray.indexOf(_this.minHeight);
                $(this).css({left: $(this).outerWidth(true)*_this.index , top: _this.minHeight});
                _this.hightCountArray[_this.index] += $(this).outerHeight(true);
                _this.$container.css({height: _this.hightCountArray[_this.index] + 150});
                _this.$button.css({left: 575, top: _this.hightCountArray[_this.index] + 850})
            })
            for (let i = 0;i < _this.picColumn; i++){
                _this.hightCountArray[i] = 0;
            }
        },
        bind: function(){
            let _this = this;
            this.$button.on('click',function(){
                _this.getPic();
                _this.$imgs = _this.$container.find($('img'));
                console.log(_this.$imgs)
                _this.$imgs.load(()=>{_this.waterfallPlace()})
            })
        },
        getPic: function(){
            this.htmls = '';
            this.picArray = [];
            for(var i = 0;i < 8; i++){
                this.picArray[i] = 'http://lorempixel.com/200/' + (Math.floor(Math.random()*10)*25 + 100)
            }
            //注意$.each()和$nodes.each()的区别，后者只能遍历jqueryDOM类数组
            var _this = this;
            $.each(this.picArray,function (index,item) {
                _this.htmls += '<li> <img src= ' + item + '></li>'
            })
            console.log(_this.htmls)
            this.$container.append($(_this.htmls))
            console.log($('.container li').length)
        }
    }
    return WaterfallLayout;
})
