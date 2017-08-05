<template>
    <div class="admin">
        <div class="container">
            <div class="row" v-if="logined=='no'">
                <h1>农业大数据后台管理系统</h1>
                <div class="col-md-6">
                    <small>Big agricultural data</small>
                </div>
                <div @click="toLogin" id="ampHasNoLogin" class="amp-has-nologin-btn  amp-animated amp-animate-move-bottom-in amp-hover-slow-motion">
                    <!--中文标题-->
                    <span data-i18n="login">Login</span>
                </div>
            </div>
            <login v-if="isLogined"></login>
            <div class="charts" v-if="logined=='login'">
                    <h2 class="tea-Data">农业大数据后台管理系统</h2>
                    <ul class="nav nav-tabs" id="chartOne" role="tablist">
                        <li role="presentation">
                            <button class="btn product" :class="classObj" @click="chartOne(1)">产品</button>
                        </li>
                        <li role="presentation">
                            <button class="btn list" :class="classObj2" @click="chartOne(2)">产品列表</button>
                        </li>
                        <li role="presentation">
                            <button class="btn data" :class="classObj3" @click="chartOne(3)">环境数据</button>
                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="Temperature">
                            <transition name="bounce" mode="out-in">
                                 <add :updateProduct="update" v-if="show=='addProduct'" key="addProduct"></add> 
                                 <productList v-on:choseUpdate="updateName" v-if="show=='productList'" key="productList"></productList>
                                 <addStaticEvironment v-if="show=='addStaticEvironment'" key="addStaticEvironment"></addStaticEvironment>
                            </transition>
                        </div>
                    </div>
                </div>
        <div class="navbar navbar-default navbar-fixed-bottom">
            <div class="container">
                <div class="navbar-header">
                    <a href="/" target="_blank" class="navbar-brand">农业大数据</a>
                </div>
                <p class="navbar-text navbar-right" id="true" v-if="logined=='login'">
                    <span v-text="name"></span>
                    <span> &nbsp;|&nbsp;</span>
                    <span class="navbar-link" @click="postData('logout')">退出</span>
                </p>
                <p class="navbar-text navbar-right" id="false" v-if="logined=='no'">
                    <!-- <span class="navbar-link" data-toggle="modal" data-target="#signupModal">注册</span> -->
                    <!-- <span>&nbsp;|&nbsp;</span> -->
                    <span  class="navbar-link" id="toLogin" data-toggle="modal" data-target="#signinModal">登录</span>
                </p>
            </div>
        </div>
        </div>
        <!-- <div id="signupModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div id="registerBox">
                        <div class="modal-header">注册</div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="signupName">用户名</label>
                                <input type="text" id="signupModal" v-model="signupname" class="form-control" name="username">
                                <label for="signupPassword">密码</label>
                                <input type="text" name="password" id="signupModal" v-model="signuppassword" class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="message" v-text="message2"></div>
                            <button class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button class="btn btn-success" @click="postData('register')">提交</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div id="signinModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div id="loginBox">
                        <div class="modal-header">登录</div>
                        <div class="modal-body">
                            <div class="form-group" style="margin-bottom:0">
                                <label for="signinName">用户名</label>
                                <input type="text" id="signinModal" class="form-control" v-model="loginusername" name="username">
                                <label for="signinPassword">密码</label>
                                <input type="password" name="password" id="signinModal" v-model="loginpassword" class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="message" v-text="message"></div>
                            <button class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button class="btn btn-success" @click="postData('login')">提交</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>
<script>
import './../../../static/libs/jquery/dist/jquery.min.js'
import AXIOS from './../../axios/axios'
import login from './login'
import add from './product'
import productList from './productList'
import addStaticEvironment from './addStaticEvironment'
const Axios = new AXIOS();
const url = 'http://localhost:8080';
export default {
    name: 'app',
    data() {
        return {
            loginpassword: '',
            loginusername: '',
            signupname:'',
            signuppassword:'',
            message: '',
            message2: '',
            logined: 'no',
            name: '',
            isLogined:true,
             classObj: {
                'btn-danger': false,
                'btn-success': true
            },
            classObj2: {
                'btn-danger': true,
                'btn-success': true
            },
             classObj3: {
                'btn-danger': true,
                'btn-success': true
            },
            show:'addProduct',
            update:null
        }
    },
    methods: {
        updateName(msg){
            this.update=msg;
        },
        chartOne(num){
            if(num==1){
                this.show = 'addProduct';
                this.classObj['btn-danger'] = false;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = true;
            }
            if(num==2){
               this.show = 'productList';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = false;
                this.classObj3['btn-danger'] = true; 
            }
            if(num==3){
               this.show = 'addStaticEvironment';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = false; 
            }
        },
        toLogin(){
            $('#toLogin').click();
        },
        postData(path) {
            var $loginBox = $('#loginBox');
            var $registerBox = $('#registerBox');
            //登录
            if (path == 'login') {
                let params = {
                    api: url + '/api/user/login',
                    param: {
                        username: this.loginusername,
                        password: this.loginpassword
                    }
                };
                Axios.post(params)
                    .then(res => {
                        //console.log(res.data);
                        var data;
                        if(typeof (res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length){
                            data=res.data;
                        }else{
                            data=JSON.parse(res.data)
                        }
                        //var data = JSON.parse(res.data);
                        this.message = data.message;
                        if (!data.code) {
                            this.logined = 'login';
                            this.isLogined=false;                 
                            this.name = '欢迎您，' + data.userInfo.username;
                            setTimeout(function () {                         
                                $loginBox.find('.btn-default').click();
                                //window.location.reload()
                            }, 1000)
                        }
                        //this.start('box');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
            //注册
            if(path=='register'){
                let params = {
                    api: url + '/api/user/register',
                    param: {
                        username: this.signupname,
                        password: this.signuppassword
                    }
                };
                Axios.post(params)
                    .then(res => {
                        //console.log(res.data);
                        var data;
                        if(typeof (res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length){
                            data=res.data;
                        }else{
                            data=JSON.parse(res.data)
                        }
                        this.message2 = data.message;
                        if (!data.code) {
                            setTimeout(function () {
                                $registerBox.find('.btn-default').click();
                                 $('#toLogin').click();
                            }, 1000)
                        }
                        //this.start('box');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
            //退出
            if(path=='logout'){
                let params = {
                    api: url + '/api/user/logout',
                    param: {
                    }
                };
                Axios.get(params)
                    .then(res => {
                        console.log(res.data);
                        var data;
                        if(typeof (res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length){
                            data=res.data;
                        }else{
                            data=JSON.parse(res.data)
                        }
                        if (!data.code) {
                            window.location.reload();
                        }
                        //this.start('box');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        login() {
            var getName = document.getElementById('name').textContent;
            if (getName.length > 1) {
                this.logined = 'login';
                this.name = '欢迎您，' + getName;
                this.isLogined=false;
            } else {
                this.logined = 'no'
            }
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.login();
        })
    },
    components:{
        login,
        add,
        productList,
        addStaticEvironment
    }
}
</script>
<style >
.row{
    position: absolute;
    z-index: 10;
}

.bounce-enter-active {
    animation: bounce-in .5s;
}

.bounce-leave-active {
    animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
.tea-Data{
    text-align:center;
    border-bottom:1px solid #ddd;
    margin: 0;
    padding:10px;
}
.charts {
    border: 1px solid #ddd;
}
.row{
     margin-right: 0 !important;
}
.container{
    max-width: 1140px !important;
}
.amp-has-nologin-btn {
    color: #FFF;
    border-radius: 4px;
    background: rgba(0,187,217,.3);
    border: 2px solid #FFF;
}
.amp-has-nologin-btn {
    position: fixed;
    cursor: pointer;
    width: 240px;
    height: 48px;
    line-height: 38px;
    text-align: center;
    top: 45%;
    left: 50%;
    margin-left: -120px;
}
.amp-has-nologin-btn:hover {
    background: rgba(0,187,211,.6);
}
.amp-animate-move-bottom-in {
    -webkit-animation-name: amp-animate-move-bottom-in;
    animation-name: amp-animate-move-bottom-in;
}
.amp-animated {
    -webkit-animation-duration: .45s;
    animation-duration: .45s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.amp-has-nologin-btn>span {
    font-size: 22px;
    letter-spacing: 11px;
    line-height: 45px;
    margin-left: 8px;
}
</style>


