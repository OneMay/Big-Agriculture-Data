<template>
    <div>
        <iframe src="http://map.baidu.com/" style="margin-top:69px;"width="100%" height="500px"></iframe>
        <div class="clearfix" :style="{width:'1203px',margin:'0 auto'}">
            <div class="environment">
                <div class="charts">
                    <h2 class="tea-Data">运输数据</h2>
                    <ul class="nav nav-tabs" id="chartOne" role="tablist">
                        <li role="presentation">
                            <button class="btn" :class="classObj" @click="chartOne(1)">温度</button>
                        </li>
                        <li role="presentation">
                            <button class="btn" :class="classObj2" @click="chartOne(2)">湿度</button>
                        </li>
                        <li role="presentation">
                            <button class="btn" :class="classObj3" @click="chartOne(3)">CO2浓度</button>
                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="Temperature">
                            <div class="form-horizontal horizon1">
                                <label class="control-label col-sm-2">查询时间</label>
                                <div class="col-sm-3">
                                    <!-- <input name="datel" type="date" value="2016-05-29"> -->
                                    <input type="date" name="datel" class="form-control" id="temperatureDom" :value="setDate" min="2017-04-01" :max="setDate">
                                </div>
                                <button type="button" class="btn btn-danger btn-xs horizon2"  @click="setItDay(0)">查询</button>
                            </div>
                            <div class="addbtn col-md-offset-9 horizon3">
                                <button type="button" class="btn btn-danger btn-xs" @click="setDay(0)">当天</button>
                            </div>
                            <transition name="bounce" mode="out-in">
                                <temperature v-if="show=='temperature'" key="temperature" :getenvir="envirDate"></temperature>
                                <humidity v-if="show=='humidity'" key="humidity" :getenvir="envirDate"></humidity>
                                <rain v-if="show=='rain'" key="rain" :getenvir="envirDate"></rain>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import changeImg from './changeImg'
import bmap from './bmap'
import './../../static/css/lib/bootstrap.css'
import temperature from './transport/temperature'
import humidity from './transport/humidity'
import rain from './transport/rain'
import echarts from 'echarts'
import 'echarts/map/js/china.js';


export default {
    name: 'database',
    data() {
        return {
            height: 300,
            Url: './../../static/axios/dataImg.json',
            width: document.body.clientWidth - 18,
            setDate: '',
            teaDate:'',
            itemDate:{
                year:'',
                month:''
            },
            envirDate:{
                year:'',
                month:'',
                day:'',
                num:null,
                hours:''
            },
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
            show: 'temperature',
            getDOM:null,
        }
    },
    methods: {
        setItDay(num){
            var getDom = document.getElementById('temperatureDom').value;
            var reg = /(\d{4})-(.{2})-(.+)/g;
            var partDate = getDom.split(reg);
            this.envirDate.year=partDate[1];
            this.envirDate.month=partDate[2];
            this.envirDate.day=partDate[3];
            this.envirDate.num=num;
        },
        chartOne(index) {
            this.setDay(0);
            if (index == 1) {
                this.show = 'temperature';
                this.classObj['btn-danger'] = false;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = true;
            }
            if (index == 2) {
                this.show = 'humidity';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = false;
                this.classObj3['btn-danger'] = true;
            }
            if (index == 3) {
                this.show = 'rain';
                this.classObj['btn-danger'] = true;
                this.classObj2['btn-danger'] = true;
                this.classObj3['btn-danger'] = false;
            }
        },
        setDay(num) {
            var date = new Date();
            var year=date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour = date.getHours();
            var teamonth=month-1;
            if (month < 10) {
                month = '0' + month;
            }
            if(teamonth==0){
                teamonth=12;
                year=year-1;
            }
            if (teamonth < 10) {
                teamonth = '0' + teamonth;
            }
            if (day < 10) {
                day = '0' + day;
            }
            var dateString = date.getFullYear() + "-" + month + "-" + day;
            var teaDay=date.getFullYear() + "-" + teamonth;
            var strTMonth=teamonth.toString();
            var strEMonth=month.toString();
            this.setDate = dateString;
            //this.teaDate=teaDay;
            //this.itemDate.year=year.toString();
           // this.itemDate.month=strTMonth;
            this.envirDate.year=year.toString();
            this.envirDate.month=strEMonth;
            this.envirDate.day=day.toString();
            this.envirDate.num=num;
            this.envirDate.hours=hour;
        },
        getDates() {
            //alert(window.location.hash);
            var date = new Date();
            var year=date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour=date.getHours();
            var teamonth=month-1;
            if (month < 10) {
                month = '0' + month;
            }
            if(teamonth==0){
                teamonth=12;
                year=year-1;
            }
            if (teamonth < 10) {
                teamonth = '0' + teamonth;
            }
            if (day < 10) {
                day = '0' + day;
            }
            var dateString = date.getFullYear() + "-" + month + "-" + day;
            var teaDay=date.getFullYear() + "-" + teamonth;
            var strTMonth=teamonth.toString();
            var strEMonth=month.toString();
            this.setDate = dateString;
            this.teaDate=teaDay;
            this.itemDate.year=year.toString();
            this.itemDate.month=strTMonth;
            this.envirDate.year=year.toString();
            this.envirDate.month=strEMonth;
            this.envirDate.day=day.toString();
            this.envirDate.num=0;
            this.envirDate.hours=hour;
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.getDates();
        })
    },
    components: {
        changeImg,
        temperature,
        humidity,
        rain,
        bmap
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/** 可以设置不同的进入和离开动画 */


/* 设置持续时间和动画函数 */

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

.environment {
    clear: both;
}

.form-horizontal.horizon1 {
    margin-top: 0.8em;
    margin-left: 20em;
}

.horizon3 {
    margin-top: -1.5rem;
}

button.btn.btn-danger.btn-xs.horizon2 {
    margin-top: 5px;
}

.charts {
    border: 1px solid #ddd;
}

.environment {
    margin: 20px auto;
}
.tea-Data{
    text-align:center;
    border-bottom:1px solid #ddd;
    margin: 0;
    padding:10px;
}
</style>
