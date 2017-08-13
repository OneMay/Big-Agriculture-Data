/**
 * Created by hideyoshi on 2017/3/23.
 */
import axios from 'axios'
import config from './config'
import Qs from 'qs'
// axios(config);
export class AXIOS {
    constructor() {

        }
        //获取已授权列表
    get(param) {
        config.data.strSQL = param.param;
        config.data.page = param.param.page;
        return axios.get(param.api, {}, config);
    }
    post(param) {
        config.data.username = param.param.username;
        config.data.password = param.param.password;
        config.data.name = param.param.name;
        config.data.quality = param.param.quality;
        config.data.technology = param.param.technology;
        config.data.specifications = param.param.specifications;
        config.data.packing = param.param.packing;
        config.data.selenium = param.param.selenium;
        config.data.describe = param.param.describe;
        config.data.date = param.param.date;
        config.data.hour = param.param.hour;
        config.data.data = param.param.data;
        config.data.companyNo = param.param.companyNo;
        config.data.traceCode = param.param.traceCode;
        config.data.itemName = param.param.itemName;
        config.data.measureTime = param.param.measureTime;
        config.data.baseNo = param.param.baseNo;
        config.data.year = param.param.year;
        config.data.month = param.param.month;
        config.data.salesVolume = param.param.salesVolume;
        config.data.monthList = param.param.monthList;
        config.data.uploadPoster = param.param.uploadPoster;
        config.data = Qs.parse(config.data);
        //console.log(config)
        return axios.post(param.api, {}, config);
    }
    reqSuccess(obj, msg) {

    }
    reqFail(obj, msg) {

    }
}
export default AXIOS;