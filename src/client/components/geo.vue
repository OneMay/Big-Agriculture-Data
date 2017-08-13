<template>
    <div class="map">
       <div id="echarts" :style="{width:'1000px',height:'800px',margin:'20px auto'}">
       
    </div> 
     <button class="md-close btn-sm btn-primary" @click="returnClick">返回</button>
    </div>
    
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/province/anhui.js'
import 'echarts/map/js/province/aomen.js'
import 'echarts/map/js/province/beijing.js'
import 'echarts/map/js/province/chongqing.js'
import 'echarts/map/js/province/fujian.js'
import 'echarts/map/js/province/gansu.js'
import 'echarts/map/js/province/guangdong.js'
import 'echarts/map/js/province/guangxi.js'
import 'echarts/map/js/province/guizhou.js'
import 'echarts/map/js/province/hainan.js'
import 'echarts/map/js/province/hebei.js'
import 'echarts/map/js/province/heilongjiang.js'
import 'echarts/map/js/province/henan.js'
import 'echarts/map/js/province/hubei.js'
import 'echarts/map/js/province/hunan.js'
import 'echarts/map/js/province/jiangsu.js'
import 'echarts/map/js/province/jiangxi.js'
import 'echarts/map/js/province/jilin.js'
import 'echarts/map/js/province/liaoning.js'
import 'echarts/map/js/province/neimenggu.js'
import 'echarts/map/js/province/ningxia.js'
import 'echarts/map/js/province/qinghai.js'
import 'echarts/map/js/province/shandong.js'
import 'echarts/map/js/province/shanghai.js'
import 'echarts/map/js/province/shanxi.js'
import 'echarts/map/js/province/shanxi1.js'
import 'echarts/map/js/province/sichuan.js'
import 'echarts/map/js/province/taiwan.js'
import 'echarts/map/js/province/tianjin.js'
import 'echarts/map/js/province/xianggang.js'
import 'echarts/map/js/province/xinjiang.js'
import 'echarts/map/js/province/xizang.js'
import 'echarts/map/js/province/yunnan.js'
import 'echarts/map/js/province/zhejiang.js'
import 'echarts/map/js/china.js'
import 'echarts/map/js/china-contour.js'
import './../../static/js/page/index.js'
export default {
    name: 'geo',
    data() {
        return {
            getName:'',
            msg:{
                show:'',
                name:'',
                arr:[]
            },
            geoCoordMap: {

            },
            name: [],
            mapName:[],
            provinceList: ["河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "北京", "天津", "上海", "重庆", "香港", "澳门", "台湾",],
            cityList: ["恩施土家族苗族自治州", "恩施市", "鹤峰县"],
            option: {
                title: {
                    text: '全国分布图',
                    left: 'left'
                },
                tooltip: {
                    trigger: 'item'
                },
                visualMap: {
                    min: 0,
                    max: 1500,
                    show: false,
                    left: 'left',
                    top: 'bottom',
                    text: ['High', 'Low'],
                    //seriesIndex: [0],
                    calculable: true
                },
                geo: {
                    map: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: '16px'
                            }
                        }
                    },
                    roam: false,
                    width: '100%',
                    height:'100%',
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#da750d'
                        }
                    },
                    regions: [],
                },
                series: [{
                    name: '',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'fill',
                        scale: 8
                    },
                    symbol: 'circle',
                    symbolSize: 10,
                    hoverAnimation: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}',
                            textStyle: {
                                color: 'aqua'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color:'red',
                            borderWidth: 10,
                            borderColor: 'red'
                        },
                        emphasis: {
                            color: '#da750d'
                        }
                    },
                    data: [{
                        name: '湖北',
                        value: [113.5329, 29.5820]
                    }]
                }]
            },
            myChart: '',
            count: 1,
            num:1,
        }
    },
    props:['setName'],
    methods: {
        randomValue() {
            return Math.round(Math.random() * 255);
        },
        //为每个省市虚构数据
        setData() {
        },
        chartClick(param) {
            this.myChart.setOption(this.option, true);
            
            //this.myChart.showLoading();
            var count;
            var that=this;
            //alert(++this.count);
             
            //防止地图继续下钻，若需要继续下钻可以注释掉，敲黑板，此处是同一个元素，不是冒泡，
            // 
            /*if (this.count >= 3) {
                if (this.cityList.indexOf(param.name) == -1) {
                    return
                }
            }*/
            //alert(param.name);
            if (this.option.geo.map&&this.option.geo.map!=param.name&&param.name!='设备1') {
                ++this.count;
                //alert(this.count);
                
                this.name.push(this.option.geo.map);
                
            }
            count=this.count+1;
            if (count >4) {
                //alert(count);
                if (param.name == "设备1") {
                    this.getName=param.name;
                    this.$emit('tellToName',this.getName);
                    $('#click')[0].click();
                    return
                }
                if(count>=5){
                    this.num++;
                    if(this.num>2&&param.name!='设备1'){
                        this.msg.show='bmap';
                        this.msg.name=param.name;
                        this.msg.arr=this.name;
                        //alert(param.name)
                       this.$emit('tellToGeo',this.msg); 
                    }
                }
            }
            else{
                this.num=1;
                this.getMapName(param.name);
                
            }
            this.myChart.showLoading();
            this.option.title.text = param.name + "分布图"
            this.option.geo.map = param.name;
            this.option.geo.width = '70%';
            this.option.geo.height = '70%';
            //this.getMapName(param.name);
            if (param.name == '湖北') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '恩施土家族苗族自治州',
                        value: [109.4521, 29.7824]
                    }]
                })
            }
            if (param.name == '恩施土家族苗族自治州') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '鹤峰县',
                        value: [110.1721, 29.84]
                    }]
                })
            }
            if (param.name == '鹤峰县') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '设备1',
                        value: [110.1721, 29.84]
                    }, {
                        name: '设备2',
                        value: [110.3721, 29.94]
                    },
                    {
                        name: '设备3',
                        value: [110.3021, 30.04]
                    }]
                })
            }
            this.myChart.hideLoading();
            // this.option.series[0].data.push({tooltip:{formatter:'{b}'}})
            this.myChart.setOption(this.option, true);
        },
        returnClick() {
            this.myChart.showLoading();
            var n=this.count;
            this.count--;
            this.num=1;
            //alert(5);
            //alert(this.name.length);
            if (this.name.length > 0 ) {
                var i = this.name.length - 1;
                var path = this.name[i];
                this.option.title.text = path + "分布图"
                this.option.geo.map = path;
                this.option.geo.width = '70%';
                this.option.geo.height = '70%';
                this.name.length--;
                this.getMapName(path);
            }
            if (this.name.length <= 0) {
                this.name.length = 0;
                this.count = 1;
                this.option.title.text = "china分布图"
                this.option.geo.map = 'china';
                this.option.geo.width = '100%';
                this.option.geo.height = '100%';
                this.getMapName('china')
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '湖北',
                        value: [113.5329, 29.5820]
                    }]
                })
            }
            if (this.option.geo.map == '湖北') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '恩施土家族苗族自治州',
                        value: [109.4521, 29.7824]
                    }]
                })
            }
            if (this.option.geo.map == '恩施土家族苗族自治州') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '鹤峰县',
                        value: [110.1721, 29.84]
                    }]
                })
            }
            if (this.option.geo.map == '鹤峰县') {
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '设备1',
                        value: [110.1721, 29.84]
                    }, {
                        name: '设备2',
                        value: [110.3721, 29.94]
                    },
                    {
                        name: '设备3',
                        value: [110.3021, 30.04]
                    }]
                })
            }

            this.myChart.hideLoading();
            this.myChart.setOption(this.option);
        },
        getMapName(name) {
           this.mapName=[];
           var that = this;
           var mapNameObj=echarts.getMap(name).geoJson.features;
           mapNameObj.forEach(function(val,index){
               that.mapName.push(val.properties.name)
           })
           this.setMapColor(); 
        },
        setMapColor(){
            this.option.geo.regions=[];
            var that = this;
            this.mapName.forEach(function(val,index){
                that.option.geo.regions.push({
                    name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                            color: 'red'
                        }
                    }
                })
            })
        },
        drawGraph(id) {
            this.myChart = echarts.init(document.getElementById('echarts'));
            this.myChart.showLoading();
            
            //this.myChart.setOption(this.option);
            this.myChart.on("click", this.chartClick);
            var node = document.getElementById('returnGeo');
            var node2 = document.getElementById('echarts');
            var that = this;
        //     node.removeEventListener("dblclick",function(){
        //     //that.returnClick();
        // })
        //     node2.addEventListener("dblclick", function () {
        //         that.returnClick();
        //     });

            if(this.setName.name){     
                this.getMapName(this.setName.name);
                this.count=4;
                this.name=this.setName.map;
                this.option.geo.map = this.setName.name;
                 this.chartClick(this.setName) 
                
            }else{
                this.getMapName('china');
                this.myChart.hideLoading();
                this.myChart.setOption(this.option);
            }
            
            

        }
    },
    mounted() {
        this.$nextTick(function () {
            this.drawGraph('echarts');
        })
    }

}
</script>
<style scoped>
.map{
    position: relative;
}
button.md-close.btn-sm.btn-primary {
    position: absolute;
    top: 0%;
    right: 50%;
    /* margin: auto; */
    /* display: inline; */
    /* text-align: center; */
}
</style>
