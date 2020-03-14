// export default  instance(){}    假如导入 只有一个 

import axios from 'axios'

/* 我们对  axios 进行二次封装 原因是 ,尽可能的 减少我们 个个请求依赖 axios , 
而集中控制我们的请求 都来自与这个js 的这个 request 方法,这样 ,我们 需要换其他请求库,就不用每个页面都改 ,
而只要 把  request 方法改一下就行了,    上层代码 不过于依赖底层,减少耦合 ---> 依赖倒置   
现在这个 文件,就相当于 抽象接口,所有 请求都要集成它
*/
export function request(config) {
    //1 创建axios 实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    });

    // 3 对请求进行拦截,这个自己有需要 就可以写
    instance.interceptors.request.use(config => {
        //拦截成功请求 ,比如
        //1 加载动画
        //2 检查url 增加 token

        // 假如不返回,就会出错,记住我们还需要返回过去
        console.log("axios  成功拦截",config);        
        return config
    }, err => {
        //拦截失败请求
        console.log("axios  失败拦截",err);
        return err;
    });
    //3 对响应进行拦截
    instance.interceptors.response.use(result=>{

        console.log(" axios  响应成功拦截",result);
        //这里 对所需要的数据进行返回
        return result;
    },errlesult=>{
        console.log(" axios 响应失败拦截",errlesult);
        // 比如  返回 401 无权限, 404 页面找不到, 500 服务器错误 就在这里

        return errlesult;
    });

    // 2 调用 axios 实例,并且返回  
    return instance(config); //axios 本身就用了 promise 
}













//封装3
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 配置 axios 的总参数
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         });
//         ///调用
//         instance(config).
//             then(res => {
//                 resolve(res);
//             }).catch(err => {
//                 reject(err);
//             })
//     })
// }
// 调用 3
// request({
//     url: '/home/multidata'
// }).then(res => {

// }).catch(err => {

// })





//  封装一
// export function request(config, success, failue) {

//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     instance(config).then(res => {
//         success(res);
//     }).catch(err => {
//         failue(err);
//     })
// }
 // 调用方法1
    // return request({
    //     url: '/home/multidata'
    // }, res => {
    //     console.log(res);
    //     return res;

    // }, err => {
    //     console.log(err);

    // })




// //封装2
// export function request2(config) {
//     // 配置 axios 的总参数
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     });
//     ///调用
//     instance(config.baseconfig).
//     then(res => {
//         config.success(res);
//     }).catch(err => {
//         config.failue(err);
//     })
// }

//调用2
// request2({
//     baseconfig: {},
//     success: (res) => {

//     },
//     error: (err) => {

//     }
// })