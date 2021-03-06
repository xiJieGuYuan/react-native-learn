/**
 * Created by SLPower on 2016/10/14.
 */
'use strict'

const config = {
    api:{
        base:'http://rap.taobao.org/mockjsdata/8647/',
        list:'api/list',
        handle:'api/handle',
        comments:'api/comments',//评论数量
        comment:'api/comment', //
        signup:'api/user/signup',//发送验证码
        verify:'api/user/verify',// 登录验证
    },
    map:{
        method:'POST',
        header:{
            'Accept-Encoding':'gzip, deflate',
            'Content-Type':'application/json',
            'User-Agent':'11',
            'X-Device-ID':'111',
            'X-Ip':'111',

        },
        // body:JSON.stringify(body),
        follow:20,
        timeout:8000,
        size:0
    },

};

module.exports = config;
