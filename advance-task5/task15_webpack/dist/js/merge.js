/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var carouse = __webpack_require__(1),
    gotop = __webpack_require__(2),
    waterfall = __webpack_require__(3);
var carouse1 = new carouse($('#carousel'))
carouse1.autoPlay()
var waterfall1 = new waterfall($('#layout .container'))
var gotop1 = new gotop($('.main'))



/***/ }),
/* 1 */
/***/ (function(module, exports) {

//commonjs定义模块
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
    module.exports = ActiveCarousel;

// var carsousel = new ActiveCarousel($('.carousel-box').eq(0))
// var carsouse2 = new ActiveCarousel($('.carousel-box').eq(1))
// carsousel.autoPlay();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

 function GoTop($container) {
        this.$container = $container;
        this.init();
        this.bind();
    }
    GoTop.prototype = {
        init: function(){
            this.$gotopButton = $('<a></a>');//创建用标签，选择用tagname
            console.log(this.$gotopButton)
            this.$gotopButton.attr('class','gotop');
            this.$container.append(this.$gotopButton);
            this.$gotopButton.css({top: $(window).height()-60, left: $(window).width()-80});
        },
        bind: function(){
            this.$gotopButton.on('click',()=>{
                $(window).scrollTop(0);
            })
        }
    };
    module.exports = GoTop;



/***/ }),
/* 3 */
/***/ (function(module, exports) {

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
    module.exports =  WaterfallLayout;



/***/ })
/******/ ]);