<template>
    <div class="map">
       <div id="echarts" :style="{width:'1000px',height:'800px',margin:'20px auto'}">
       
    </div> 
     <button class="md-close btn-sm btn-primary" @click="returnClick">返回</button>
    </div>
    
</template>

<script>

//import './../../static/js/page/index.js'
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
                    roam: true,
                    // width: '100%',
                    // height:'100%',
                    itemStyle: {
                        normal: {
                             areaColor:'rgba(0,0,0,0.3)',
                            color: 'red',
                            "borderColor": "#fff",
                            "borderWidth": 0.5
                        },
                        emphasis: {
                            areaColor: 'rgba(143,188,143,0.8)'
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
                        value: [114.31,	30.52]
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
            if (param.name== '南海诸岛') {
                    return ;
                }
            var nameList=['设备1','设备2','设备3','设备4']
            // if(this.count>=2&&nameList.indexOf(param.name)<0){
            //     var geopath=`./../../static/map/js/${ param.name}.js`;
            //     if(require(`./../../static/map/js/${ param.name}.js`)){
            //         // console.log(geopath);
            //     　　require(`./../../static/map/js/${ param.name}.js`);
            //     }        
            // }
            if (this.option.geo.map&&this.option.geo.map!=param.name&&nameList.indexOf(param.name)<0) {
                ++this.count;
                //alert(this.count);
                
                this.name.push(this.option.geo.map);
                
            }
            count=this.count+1;
            if (count >4) {
                //alert(count);
                var nameList=['设备1','设备2','设备3','设备4']
                if (nameList.indexOf(param.name)>=0) {
                    this.getName=param.name;
                    this.$emit('tellToName',this.getName);
                    $('#click')[0].click();
                    return
                }
                if(count>=5){
                    this.num++;
                    var nameList=['设备1','设备2','设备3','设备4']
                    // if(this.num>2&&nameList.indexOf(param.name)<0){
                    //     this.msg.show='bmap';
                    //     this.msg.name=param.name;
                    //     this.msg.arr=this.name;
                    //     //alert(param.name)
                    //    this.$emit('tellToGeo',this.msg); 
                    // }
                }
            }
            else{
                this.num=1;
                this.getMapName(param.name);
                
            }
            this.myChart.showLoading();
            this.option.title.text = param.name + "分布图"
            this.option.geo.map = param.name;
            // this.option.geo.width = '100%';
            // this.option.geo.height = '100%';
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
                    },
                    {
                        name: '设备4',
                        value: [110.3021, 30.00]
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
                // this.option.geo.width = '100%';
                // this.option.geo.height = '100%';
                this.name.length--;
                this.getMapName(path);
            }
            if (this.name.length <= 0) {
                this.name.length = 0;
                this.count = 1;
                this.option.title.text = "china分布图"
                this.option.geo.map = 'china';
                // this.option.geo.width = '100%';
                // this.option.geo.height = '100%';
                this.getMapName('china')
                Object.assign(this.option.series[0], {
                    data: [{
                        name: '湖北',
                        value: [114.31,	30.52]
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
                    },
                    {
                        name: '设备4',
                        value: [110.3021, 30.00]
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
                if(that.count>=2){
                    var head= document.getElementsByTagName('head')[0]; 
                    var script= document.createElement('script'); 
                    script.type= 'text/javascript'; 
                    script.src= `/static/map/js/${val.properties.name}.js`; 
                    head.appendChild(script); 
                }

                that.mapName.push(val.properties.name)
           })
           this.setMapColor(this.mapColor);  
        },
        setMapColor(){
            this.option.geo.regions=[];
            var that = this;
           /* this.mapName.forEach(function(val,index){
                that.option.geo.regions.push({
                    name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                            color: 'red'
                        }
                    }
                })
            })*/
             this.option.geo.itemStyle.normal.areaColor='rgba(3,169,244,0.8)';
                this.mapName.forEach(function(val,index){
                //console.log(val)
                if(val=="湖北"||val=="恩施土家族苗族自治州"){
                    
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(243,66,53,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })  
                }
                else if(val=="重庆"||val=="武汉市"||val=="洪山区"){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(255,152,0,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else if(val=="湖南"){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(255,235,59,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else if(val=="贵州" ||val=='丹东市'||val=='宽甸满族自治县'){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(255,193,7,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else if(val=="辽宁"||val=="鹤峰县"||val=="咸丰县"){
                  that.option.geo.regions.push({
                       name:val,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(255,87,34,0.8)',
                            color: 'red',
                            "borderColor": "#fff",
                             "borderWidth": 0.5
                        }
                    }
                  })   
                }
                else{
                    that.option.geo.regions.push({
                        name:val,
                        itemStyle: {
                            normal: {
                               // areaColor: 'rgba('+that.randomValue()+','+ that.randomValue()+','+that.randomValue()+','+ Math.random().toFixed(2)+')',
                                areaColor:'rgba(3,169,244,0.8)',
                                color: 'red',
                                "borderColor": "#fff",
                                "borderWidth": 0.5
                            }
                        }
                    })
                }
            })
        },
        drawGraph(id) {
            this.myChart = echarts.init(document.getElementById('echarts'));
            this.myChart.showLoading();
            
            //this.myChart.setOption(this.option);
            this.myChart.on("dblclick", this.chartClick);
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
