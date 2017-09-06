//this file is used for r.js to pack
({
    baseUrl: "../../js",//由build.js找到js文件夹
    paths:{
    'jquery': "lib/jquery2.1.4"
    },
    name: "app/main",//由baseUrl 找到main.js
    out: "../../dist/js/index.merge.min.js"//输出文件路径
});