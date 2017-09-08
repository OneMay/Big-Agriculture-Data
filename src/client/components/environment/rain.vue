<template>
    <div id="rain" :style="{width:'1200px',height:'400px'}"></div>
</template>

<script>
    import echarts from 'echarts'
    import AXIOS from './../../axios/axios'
    const Axios = new AXIOS();
const url = 'http://localhost:8080';
    export default {
        name:'rain',
        data(){
            return {
                option : {
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                        //formatter: '{a}\n{b}: {c}m/s'
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
                            formatter: '{value} mm/h'
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
                if(num==7){
                    while(num>0){
                        day=day-1;
                        if(day<=0){
                            month=month-1;
                            if([1,3,5,7,8,10,12].indexOf(month)!=-1)
                            {
                                day=31;
                            } 
                            if([4,6,9,11].indexOf(month)!=-1){
                                day=30;
                            }
                            if(month==2){
                                if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
                                    day=29;
                                }else{
                                    day=28;
                                }
                            }
                        }
                        if(month<=0){
                            month=12;
                            year=year-1;
                            if([1,3,5,7,8,10,12].indexOf(month)!=-1)
                            {
                                day=31;
                            } 
                            if([4,6,9,11].indexOf(month)!=-1){
                                day=30;
                            }
                            if(month==2){
                                if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
                                    day=29;
                                }else{
                                    day=28;
                                }
                            }
                        }
                        if (day < 10) {
                            day=parseInt(day);
                            day = '0' + day;
                        }
                        if (month < 10) {
                            month=parseInt(month);
                            month = '0' + month;
                        }
                        this.option.xAxis.data.push((year+'-'+month+'-'+day));
                        num--;
                    }
                    this.option.xAxis.data=this.option.xAxis.data.reverse();
                    var date = this.option.xAxis.data;
                    this.getData(date,7);
                }
                if(num==30){
                    while(num>0){
                        day=day-1;
                        if(day<=0){
                            month=month-1;
                            if([1,3,5,7,8,10,12].indexOf(month)!=-1)
                            {
                                day=31;
                            } 
                            if([4,6,9,11].indexOf(month)!=-1){
                                day=30;
                            }
                            if(month==2){
                                if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
                                    day=29;
                                }else{
                                    day=28;
                                }
                            }
                        }
                        if(month<=0){
                            month=12;
                            year=year-1;
                            if([1,3,5,7,8,10,12].indexOf(month)!=-1)
                            {
                                day=31;
                            } 
                            if([4,6,9,11].indexOf(month)!=-1){
                                day=30;
                            }
                            if(month==2){
                                if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
                                    day=29;
                                }else{
                                    day=28;
                                }
                            }
                        }
                        if (day < 10) {
                            day=parseInt(day);
                            day = '0' + day;
                        }
                        if (month < 10) {
                            month=parseInt(month);
                            month = '0' + month;
                        }
                        this.option.xAxis.data.push((year+'-'+month+'-'+day));
                        num--;
                    }
                    this.option.xAxis.data=this.option.xAxis.data.reverse();
                    var date = this.option.xAxis.data;
                    this.getData(date,30);
                }
                if(n==0){
                    this.option.title.text=(year+'-'+month+'-'+day+'降雨量变化');
                }else{
                    this.option.title.text='最近'+n+'天降雨量变化';
                }
                this.myecharts.showLoading();
                this.myecharts.hideLoading();
                this.myecharts.setOption(this.option, true);  
            },
            drawGraph(id) { 
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                this.today.day=day;
                this.today.year=year;
                this.today.month=month;
                this.myecharts = echarts.init(document.getElementById(id));
                this.getenvir.year=year;
                this.getenvir.month=month;
                this.getenvir.day=day;
                this.setData(year,month,day,7);
            },
        getData(date,n){
            if(n==1){
                var time =[date]
                let params={
                    api:url+'/api/find/staticRainfall',
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
                    if(data.rainfallInfo){
                         this.myecharts.showLoading();
                        for(var i=0;i<data.rainfallInfo[0].staticRainfallInfo.datas.length;i++){
                            for(var j = i + 1;j<data.rainfallInfo[0].staticRainfallInfo.datas.length;j++){
                                if(parseInt(data.rainfallInfo[0].staticRainfallInfo.datas[i].hour)>parseInt(data.rainfallInfo[0].staticRainfallInfo.datas[j].hour)){
                                    var tmp = data.rainfallInfo[0].staticRainfallInfo.datas[i];
                                    data.rainfallInfo[0].staticRainfallInfo.datas[i] = data.rainfallInfo[0].staticRainfallInfo.datas[j];
                                    data.rainfallInfo[0].staticRainfallInfo.datas[j] = tmp;
                                }
                            }
                    }
                        var datas=[];
                        data.rainfallInfo[0].staticRainfallInfo.datas.forEach(function(val,index){
                            datas.push(val.data);
                        })
                        this.option.legend.data=['降雨量'];
                        this.option.series=[];
                        this.option.series=[{
                            name:'降雨量',
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
                                        formatter: '{a}\n{b}: {c}mm/h'
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
                            text : '暂无24小时降雨量数据',
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
            if(n==7||n==30){
                var time =[date]
                let params={
                    api:url+'/api/find/staticRainfall',
                    param:{
                        date:date
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
                     this.myecharts.showLoading();
                    for(var i=0;i<data.rainfallInfo.length;i++){
                        for(var j = i + 1;j<data.rainfallInfo.length;j++){
                            if(data.rainfallInfo[i].date>data.rainfallInfo[j].date){
                                var tmp = data.rainfallInfo[i];
                                data.rainfallInfo[i] = data.rainfallInfo[j];
                                data.rainfallInfo[j] = tmp;
                            }
                        }
                    }
                    var MaxDatas=[],MinDatas=[],averageDatas=[];
                    data.rainfallInfo.forEach(function(val,index) {
                        MaxDatas.push(val.MaxData);
                        MinDatas.push(val.MinData);
                        averageDatas.push(val.average);
                    });
                    
                    this.option.legend.data=['最大降雨量','平均降雨量','最小降雨量']
                    this.option.series=[ {
                            name:'最大降雨量',
                            type:'line',
                            data:MaxDatas,
                            markPoint:{
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                             },
                            markLine: {
                                silent:false,
                                label:{
                                    normal:{
                                        show:true,
                                        formatter: '{a}\n{b}: {c}'
                                    }
                                },
                                data: [
                                    {type: 'average', name: '平均值',}
                                 ],
                                 animation:true
                            }
                        },
                        {
                            name:'平均降雨量',
                            type:'line',
                            data:averageDatas,
                             itemStyle:{
                                normal:{
                                    color:'#4bce56',
                                }
                            },
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                silent:false,
                                label:{
                                    normal:{
                                        show:true,
                                        formatter: '{a}\n{b}: {c}'
                                    }
                                },
                                data: [
                                    {type: 'average', name: '平均值'}
                                 ]
                            }
                        },
                        {
                            name:'最小降雨量',
                            type:'line',
                            data:MinDatas,
                            itemStyle:{
                                normal:{
                                    color:'#57c4de'
                                }
                            },
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                legend:['平均值'],
                                silent:false,
                                label:{
                                    normal:{
                                        show:true,
                                        formatter: '{a}\n{b}: {c}'
                                    }
                                },
                                data: [
                                    {type: 'average', name: '平均值'}
                                 ]
                            }
                        }]
                        
                        this.myecharts.hideLoading();
                         this.myecharts.setOption(this.option, true);  
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
        },
        mounted() {  
            this.$nextTick(function() {  
                this.drawGraph('rain'); 
            })  
        }
    }
</script>
<style>
span{
    margin-bottom: 0px !important;
}
</style>
