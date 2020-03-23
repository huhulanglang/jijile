//测试环境
var base_domain= process.env.NODE_ENV === 'development'
    ? `http://`
    : `https://`;
var domain=process.env.NODE_ENV === 'development'
    ? `${base_domain}test.jijile.net`
    : `${base_domain}api.jijile.net`;
var websocketUrl=process.env.NODE_ENV === 'development'
    ? `ws:/test.jijile.net`
    : `wss:/api.jijile.net`;
var pcUrl=process.env.NODE_ENV === 'development'?'http://wxtest.jijile.net/dist/index.html':'https://saas.jijile.net/dist/index.html';
function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

}

function uuid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function parseURL(url) {
    function getQuery() {
        var start = url.indexOf("?");
        if (start == -1)
            return "";
        return url.substr(start + 1);
    }

    return {
        source: url,
        host: (function () {
            var start = url.indexOf("//");
            var end = url.indexOf("/", start + 2);
            return url.substr(start + 2, end - start - 2);
        }),
        page: (function () {
            var start = url.indexOf("//");
            var start1 = url.indexOf("/", start + 2);
            if (url.indexOf("?") == -1) {
                return url.substr(start1)
            }
            else {
                var end1 = url.indexOf("?");
                return url.substr(start1, end1 - start1);
            }
        }),
        params: (function () {
            var ret = {},
                seg = getQuery(url).split('&'),
                len = seg.length, i = 0, s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })
    }
}

function ajax(url,method,data) {
    url=domain+url;
    var openId=sessionStorage.getItem('openId');
    var newUrl;
    var session=JSON.parse(localStorage.getItem('userInfo'));
    if(data==''||data==null||data==undefined){
        if (url.indexOf("?")>0){
            newUrl=url+'&timestamp='+new Date().getTime()+'&nonce='+uuid();
        }
        else{
            newUrl=url+'?timestamp='+new Date().getTime()+'&nonce='+uuid();
        }
    }
    else {
        var bodysign;
        if(session){
            bodysign = this.sha256(data+session.secretKey);
        } else {
            bodysign = this.sha256(JSON.stringify(data));
        }
        if (url.indexOf("?")>0) {
            newUrl = url + '&timestamp=' + new Date().getTime() + '&nonce=' + uuid() + "&bodySign=" + bodysign;
        }else{
            newUrl = url + '?timestamp=' + new Date().getTime() + '&nonce=' + uuid() + "&bodySign=" + bodysign;
        }
    }
    var params=parseURL(newUrl).params();
    var api=parseURL(newUrl).host()+parseURL(newUrl).page();
    var keys = new Array();
    for (var key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            keys.push(key)
        }
    }
    keys.sort();
    newUrl = api + "?";
    for (var i = 0; i < keys.length; i++) {
        if (i < keys.length - 1)
            newUrl = newUrl + keys[i] + "=" + params[keys[i]] + "&";
        else
            newUrl = newUrl + keys[i] + "=" + params[keys[i]];
    }
    var sign;
    if(session){
        sign =this.sha256(newUrl+session.secretKey);
    }else{
        sign =this.sha256(newUrl)
    }
    newUrl =base_domain+ newUrl+"&sign="+sign;
    return this.$axios({
        url:newUrl,
        data:data,
        method:method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            'openId':openId
        }
    });
}
export {
    ajax,
    websocketUrl,
    domain,
    pcUrl
}
