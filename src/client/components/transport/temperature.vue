<template>
    <div id="temperature" :style="{width:'1200px',height:'400px'}"></div>
</template>

<script>
    import echarts from 'echarts'
    import AXIOS from './../../axios/axios'
    const Axios = new AXIOS();
const url = 'http://localhost:8080';
    export default {
        name:'temperature',
        data(){
            return {
                option : {
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                        
                    },
                    legend: {
                        data:[],
                        tooltip: {
                            show: false
                        }
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            /*dataZoom: {
                                yAxisIndex: 'none'
                            },*/
                            //dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {}
                            //saveAsImage: {}
                        }
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    },
                    series: []
                },
                today:{
                    year:'',
                    month:'',
                    day:''
                }

            }
        },
        props:['getenvir'],
        watch: {
            getenvir: {
                //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
                handler(curVal, oldVal) {
                    
                     this.setData(curVal.year, curVal.month,curVal.day,curVal.num);
                    //this.setData('2017', '08','01',7);
                    //setTimeout(this.setDate(curVal.year, curVal.month),0);
                },
                deep: true
            }

        },
        methods:{
            setData(year,month,day,num){
                var n=num;
                
                this.option.xAxis.data=[];
                var hour = this.getenvir.hours;
                if(n==0){
                    this.option.title.text=(year+'-'+month+'-'+day+'气温变化');
                }
                if(num==0){
                    if(year!=this.today.year||month!=this.today.month||day!=this.today.day)
                    {
                        hour=23
                    }
                    while(hour>=0){
                        this.option.xAxis.data.push(hour+':00');
                        hour--;
                    }
                    this.option.xAxis.data=this.option.xAxis.data.reverse();
                    var date=year+'-'+month+'-'+day;
                    this.getData(date,1);
                }
                
                // this.myecharts.showLoading();
                // this.myecharts.hideLoading();
                // this.myecharts.setOption(this.option, true);  
            },
            drawGraph(id) { 
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hour = date.getHours();
                if (month < 10) {
                    month = '0' + month;
                }
                if (day < 10) {
                    day = '0' + day;
                }
                this.today.day=day;
                this.today.year=year;
                this.today.month=month;
                this.myecharts = echarts.init(document.getElementById(id));
                this.getenvir.year=year;
                this.getenvir.month=month;
                this.getenvir.day=day;
                
                this.setData(year,month,day,0);
            },
        getData(date,n){
            if(n==1){
                var time =[date]
                let params={
                    api:url+'/api/find/staticTemperature',
                    param:{
                        date:time
                    }
                }
                Axios.post(params)
                .then(res=>{
                    //console.log(res.data);
                    var data;
                    if(typeof (res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length){
                        data=res.data;
                    }else{
                        data=JSON.parse(res.data)
                    }
                    if(data.temparatureInfo){
                         this.myecharts.showLoading();
                        for(var i=0;i<data.temparatureInfo[0].staticTemperatureInfo.datas.length;i++){
                            for(var j = i + 1;j<data.temparatureInfo[0].staticTemperatureInfo.datas.length;j++){
                                if(parseInt(data.temparatureInfo[0].staticTemperatureInfo.datas[i].hour)>parseInt(data.temparatureInfo[0].staticTemperatureInfo.datas[j].hour)){
                                    var tmp = data.temparatureInfo[0].staticTemperatureInfo.datas[i];
                                    data.temparatureInfo[0].staticTemperatureInfo.datas[i] = data.temparatureInfo[0].staticTemperatureInfo.datas[j];
                                    data.temparatureInfo[0].staticTemperatureInfo.datas[j] = tmp;
                                }
                            }
                    }
                    //console.log(data.temparatureInfo[0].staticTemperatureInfo.datas)
                        var datas=[];
                        data.temparatureInfo[0].staticTemperatureInfo.datas.forEach(function(val,index){
                            datas.push(val.data);
                        })
                        this.option.legend.data=['气温'];
                        this.option.series=[];
                        this.option.series=[{
                            name:'气温',
                            type:'line',
                            data:datas,
                            markPoint:{
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                             },
                            markLine: {
                                silent:false,
                                label:{
                                    emphasis:{
                                        show:true,
                                        formatter: '{a}\n{b}: {c}'
                                    }
                                },
                                data: [
                                    {type: 'average', name: '平均值',}
                                 ],
                                 animation:true
                            }
                        }]
                        this.myecharts.hideLoading();
                         this.myecharts.setOption(this.option, true);
                    }else{
                        this.option.legend.data=[];
                        this.option.series=[];
                        this.myecharts.showLoading({
                            text : '暂无24小时气温数据',
                            effect : 'bubble',
                            textStyle : {
                                fontSize : 30
                            }
                        });
                        //this.myecharts.hideLoading();
                         this.myecharts.setOption(this.option, true);
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
        },
        mounted() {  
            this.$nextTick(function() {  
                this.drawGraph('temperature'); 
            })  
        }
    }
</script>
<style>
span{
    margin-bottom: 0px !important;
}
</style>
