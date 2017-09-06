#!/usr/bin/env node

var axios = require('axios')
var city = process.argv[2];
var cityid ;
axios.get(`https://weixin.jirengu.com/weather/cityid?location=${city}`)
.then((response)=>{
  cityid = response.data.results[0].id;
  axios.get(`https://weixin.jirengu.com/weather/now?cityid=${cityid}`)
  .then((response)=>{
    console.log("城市：",response.data.weather[0].city_name)
    console.log("今天" +response.data.weather[0].future[7].date  + response.data.weather[0].future[7].day +'  ',"今日天气：",response.data.weather[0].future[7].text,"最高温度：",response.data.weather[0].future[7].high+'℃')
    console.log("明天" + response.data.weather[0].future[8].day + '  ' ,"天气：",response.data.weather[0].future[8].text,"最高温度：",response.data.weather[0].future[8].high+'℃')
    console.log("后天" + response.data.weather[0].future[9].day + '  ',"天气：",response.data.weather[0].future[9].text,"最高温度：",response.data.weather[0].future[9].high+'℃')
  })
  .catch((error)=>{
    console.log(error);
  })
})
.catch((error)=>{
  console.log(error);
});



