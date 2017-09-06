//requirejs的配置文件
//配置文件，可以有data-main属性加载
requirejs.config({
    baseUrl: "src/js",//以html文件为初始路径
    paths:{
        'jquery': "lib/jquery2.1.4"
    }
});
//加载入口模块,执行index.js
requirejs(['app/index'])