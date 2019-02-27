
// 因为微信小程序没有url，所以写相对路径需要把域名写出来
import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()
const ENV = process.env;

let BASE_URL = {
    WX: '',   //线上域名
    QA: ''    //测试域名
}
fly.interceptors.request.use((request) => {
    request.timeout = 10000;
    //设置请求头
    request.headers = {
        "content-type": "application/json"
    }
    let baseURL = ENV.IS_TEST ? BASE_URL.QA : BASE_URL.WX;
    if (ENV.IS_MOCK) {
        let path = request.url.indexOf('https://') > -1 
            ? request.url.split('.com')[1]
            : request.url;
        return Promise.resolve(require(`@/mock/${request.method}${path}/index`));
    }
    if (request.url.indexOf('https://') > -1) {
        request.url = request.url;
    } else {
        request.url = baseURL + request.url;
    }
    
    return request;
    
})

fly.interceptors.response.use(res => {
        if (res.status === 200 && res.data.status === 0) {
            //请求成功之后将返回值返回
            return res;
        } else {
            //错误码判断 res.data.status
        }
    }, err => {
        //请求出错，根据返回状态码判断出错原因
        if (err.status == 0) {
            return "网络连接异常"
        }
        // Do something with response error
    }
)
export default fly;