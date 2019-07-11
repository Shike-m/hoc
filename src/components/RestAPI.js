import axios from 'axios';
const baseUrl = 'https://api.douban.com';
const apiKey = "0b2bdeda43b5688921839c8ecb20399b";

const RestAPI = {
    getJSON: function (method, url, callback) {
        let url = baseUrl + url + apiKey;
        axios({
            method: method,
            url:url
        }).then(res => {
            callback(res.data);
        })
    }
}
export default RestAPI;