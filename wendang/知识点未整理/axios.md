import axios from 'axios';
// 超时时间
axios.defaults.timeout = 5000; //设置默认时间
axios.defaults.baseURL = api.device; //设置baseurl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';   //在发post 请求的时候 需要设置
// http请求拦截器   使用中间件来拦截发出的请求 可以集中处理一些loading 的功能
axios.interceptors.request.use(config => {
 return config;
}, error => {
 return Promise.reject(error);
});
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  if (data.status === 200) {
    return data.data;
  };
}, error => {
 return Promise.reject(error);
});
export default axios;

1.在发送post请求的时候 需要设置请求头，在后端需要确认能不能接收json 格式内容，如果不可以的话使用 qs 插件的 stringfy 的功能将对象参数序列化为 kkk=dd&jj=kk的格式

Http Header里的Content-Type一般有这三种：
application/x-www-form-urlencoded：数据被编码为名称/值对。这是标准的编码格式。
multipart/form-data： 数据被编码为一条消息，页上的每个控件对应消息中的一个部分。
text/plain： 数据以纯文本形式(text/json/xml/html)进行编码，其中不含任何控件或格式字符


// `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

