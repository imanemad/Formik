import axios from "axios"
import config from "./config.json"

// const httpService=(url,method,params=null)=>{
//     const tokenInfo=JSON.parse(localStorage.getItem('loginToken'))
//     return axios({
//         url:config.onlineApi+url,
//         method,
//         params,
//         headers:{
//             "Authorization":tokenInfo && `bearer ${tokenInfo.token}`,
//             "Content-Type":"application/json"
//         }
//     })
// }

const httpService = (url, method,params=null) => {
    const tokenInfo = JSON.parse(localStorage.getItem('loginToken'));
    const headers = {
        "Content-Type": "application/json",
    };

    // تنظیم هدر Authorization فقط در صورتی که توکن موجود باشد
    if (tokenInfo && tokenInfo.token) {
        headers["Authorization"] = `Bearer ${tokenInfo.token}`;
    }

    return axios({
        url: config.onlineApi + url,
        method,
        params,
        headers,
    });
};
export default httpService