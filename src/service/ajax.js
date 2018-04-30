import Qs from 'qs';
import axios  from "axios";
export default {
    config:{
  //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
  //url: '/user',

  // 请求方法同上
  //method: 'post', // default
  // 基础url前缀
  baseURL: 'http://127.0.0.1:8888/api/',
　　
　　　　
  transformRequest: [function (data) {
    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
　　data = Qs.stringify({});
    return data;
  }],

  transformResponse: [function (data) {
    // 这里提前处理返回的数据

    return data;
  }],

  // 请求头信息
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  //parameter参数
  params: {
   // ID: 12345
  },

  //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
  /*data: {
    
  },*/

  //设置超时时间
  timeout: 10000,
  //返回数据类型
  responseType: 'json', // default

 
},
  get(url,urlparams,suc,err){

    axios.get(url, {params:urlparams}).then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
     console.log(error);
    });

  },
  post(url,data,suc,err){
    
       axios.post(url,data,this.config).then(function (response) {
           if(response.body&&response.data.status == 200){ //响应状态码200代表成功
                succ&&succ(response.data);
            }else if(response.body&&response.data.status == 503){//响应状态码503代表token失效
                router.replace({path:'/login'});
            }else{
                err&&err(response.data); //其他响应服务器错误信息
            }
    })
    .catch(function (error) {
    console.log(error);
    });
  },
  all(array){
      for(i in array){
        var get=axios.get(i);
        var requestList;
    requestList.push(get);
    }
    axios.all(get)
      .then(axios.spread(function (res1, res2) {
    // 两个请求现在都执行完成
  }));
  }

  


};