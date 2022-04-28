//对于axios进行二次封装
import axios from "axios";

// 利用axios对象的方法create，去创建一个axios实例
// request就是axios，只不过配置一下
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    // 配置对象，对象里面有一个属性很重要，headers请求头
    return config;
})

// 相应拦截器
requests.interceptors.response.use((res) => {
        // 成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data;
},(error)=>{
    return Promise.reject(new Error('faile'))
    }
        // 响应失败的回调函数
)

axios.get(url,{params:{id:1}}).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})

export default requests;

