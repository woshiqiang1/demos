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

