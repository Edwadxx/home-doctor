import axios from "axios";
let env = process.env.NODE_ENV
import { Message } from 'element-ui'
console.log('env',env);
const http = axios.create({
  baseURL: env != 'development' ? env : '',
  timeout: 20000,
});

const ErrorMessageList = {
  403: 'Resource Not Forbidden 用户验证失败',
  404: 'Not Found 无法找到指定位置的资源',
  405: 'Method Not Allowed 请求方法不适用',
  500: 'Internal Server Error 服务器遇到了意料不到的情况',
}

// 拦截请求
http.interceptors.request.use((config)=>{
  console.log('config',config);
  return config
},(error)=>{
  console.log('请求的error',error);
  return Promise.reject(error)
})

// 拦截响应报文
http.interceptors.response.use((result)=>{
  // code = 1正常状态 0异常状态
  if(result.code){
    return result
  } else {
    Message.warning(result.data.msg)
    return
  }
},(error)=>{
  Message.error(ErrorMessageList[error.response.status])
  return Promise.reject(error)
})

export default http