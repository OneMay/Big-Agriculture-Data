<template>
    <div id="beam" :style="{width:'1200px',height:'400px'}"></div>
</template>

<script>
    import echarts from 'echarts'
    import AXIOS from './../../axios/axios'
    const Axios = new AXIOS();
    const url = '';
    export default {
        name: 'beam',
        data() {
            return {
                option: {
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                            //formatter: '{a}\n{b}: {c}m/s'
                    },
                    legend: {
                        data: [],
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
                            magicType: {
                                type: ['line', 'bar']
                            },
                            restore: {}
                            //saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} lx'
                        }
                    },
                    series: []
                },
                today: {
                    year: '',
                    month: '',
                    day: ''
                }

            }
        },
        props: ['getenvir'],
        watch: {
            getenvir: {
                //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
                handler(curVal, oldVal) {

                    this.setData(curVal.year, curVal.month, curVal.day, curVal.num);
                    //setTimeout(this.setDate(curVal.year, curVal.month),0);
                },
                deep: true
            }

        },
        methods: {
            setData(year, month, day, num) {
                var n = num;
                this.option.xAxis.data = [];
                var hour = this.getenvir.hours;
                if (num == 0) {
                    if (year != this.today.year || month != this.today.month || day != this.today.day) {
                        hour = 23
                    }
                    while (hour >= 0) {
                        // this.option.xAxis.data.push(hour+':00');
                        hour--;
                    }
                    //this.option.xAxis.data=this.option.xAxis.data.reverse();
                    var date = year + '-' + month + '-' + day;
                    this.getData(date, 1);
                }
                if (num == 7) {
                    while (num > 0) {
                        day = day - 1;
                        if (day <= 0) {
                            month = month - 1;
                            if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) != -1) {
                                day = 31;
                            }
                            if ([4, 6, 9, 11].indexOf(month) != -1) {
                                day = 30;
                            }
                            if (month == 2) {
                                if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
                                    day = 29;
                                } else {
                                    day = 28;
                                }
                            }
                        }
                        if (month <= 0) {
                            month = 12;
                            year = year - 1;
                            if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) != -1) {
                                day = 31;
                            }
                            if ([4, 6, 9, 11].indexOf(month) != -1) {
                                day = 30;
                            }
                            if (month == 2) {
                                if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
                                    day = 29;
                                } else {
                                    day = 28;
                                }
                            }
                        }
                        if (day < 10) {
                            day = parseInt(day);
                            day = '0' + day;
                        }
                        if (month < 10) {
                            month = parseInt(month);
                            month = '0' + month;
                        }
                        this.option.xAxis.data.push((year + '-' + month + '-' + day));
                        num--;
                    }
                    this.option.xAxis.data = this.option.xAxis.data.reverse();
                    var date = this.option.xAxis.data;
                    this.getData(date, 7);
                }
                if (num == 30) {
                    while (num > 0) {
                        day = day - 1;
                        if (day <= 0) {
                            month = month - 1;
                            if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) != -1) {
                                day = 31;
                            }
                            if ([4, 6, 9, 11].indexOf(month) != -1) {
                                day = 30;
                            }
                            if (month == 2) {
                                if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
                                    day = 29;
                                } else {
                                    day = 28;
                                }
                            }
                        }
                        if (month <= 0) {
                            month = 12;
                            year = year - 1;
                            if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) != -1) {
                                day = 31;
                            }
                            if ([4, 6, 9, 11].indexOf(month) != -1) {
                                day = 30;
                            }
                            if (month == 2) {
                                if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
                                    day = 29;
                                } else {
                                    day = 28;
                                }
                            }
                        }
                        if (day < 10) {
                            day = parseInt(day);
                            day = '0' + day;
                        }
                        if (month < 10) {
                            month = parseInt(month);
                            month = '0' + month;
                        }
                        this.option.xAxis.data.push((year + '-' + month + '-' + day));
                        num--;
                    }
                    this.option.xAxis.data = this.option.xAxis.data.reverse();
                    var date = this.option.xAxis.data;
                    this.getData(date, 30);
                }
                if (n == 0) {
                    this.option.title.text = (year + '-' + month + '-' + day + '光照强度变化');
                } else {
                    this.option.title.text = '最近' + n + '天光照强度变化';
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
                this.today.day = day;
                this.today.year = year;
                this.today.month = month;
                this.myecharts = echarts.init(document.getElementById(id));
                this.getenvir.year = year;
                this.getenvir.month = month;
                this.getenvir.day = day;
                this.setData(year, month, day, 7);
            },
            getData(date, n) {
                if (n == 1) {
                    var time = [date]
                    let params = {
                        api: url + '/api/find/staticLight',
                        param: {
                            date: time
                        }
                    }
                    Axios.post(params)
                        .then(res => {
                            //console.log(res.data);
                            var data;
                            if (typeof(res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length) {
                                data = res.data;
                            } else {
                                data = JSON.parse(res.data)
                            }

                            if (data.lightInfo) {
                                this.myecharts.showLoading();
                                //数组去重
                                var newData = [data.lightInfo[0].staticLightInfo.datas[0]];
                                for (var i = 1; i < data.lightInfo[0].staticLightInfo.datas.length; i++) {
                                    var repeat = false;
                                    for (var j = 0; j < newData.length; j++) {
                                        if (data.lightInfo[0].staticLightInfo.datas[i].hour === newData[j].hour) {
                                            repeat = true;
                                            break;
                                        }
                                    }
                                    if (!repeat) {
                                        newData.push(data.lightInfo[0].staticLightInfo.datas[i])
                                    }
                                }
                                for (var i = 0; i < newData.length; i++) {
                                    for (var j = i + 1; j < newData.length; j++) {
                                        if (parseInt(newData[i].hour) > parseInt(newData[j].hour)) {
                                            var tmp = newData[i];
                                            newData[i] = newData[j];
                                            newData[j] = tmp;
                                        }
                                    }
                                }
                                //console.log(data.temparatureInfo[0].staticTemperatureInfo.datas)
                                var datas = [],
                                    _this = this;
                                newData.forEach(function(val, index) {
                                    datas.push(val.data);
                                    _this.option.xAxis.data.push(val.hour)
                                })

                                this.option.legend.data = ['光照强度'];
                                this.option.series = [];
                                this.option.series = [{
                                    name: '光照强度',
                                    type: 'line',
                                    data: datas,
                                    markPoint: {
                                        data: [{
                                            type: 'max',
                                            name: '最大值'
                                        }, {
                                            type: 'min',
                                            name: '最小值'
                                        }]
                                    },
                                    markLine: {
                                        silent: false,
                                        label: {
                                            emphasis: {
                                                show: true,
                                                formatter: '{a}\n{b}: {c}lx'
                                            }
                                        },
                                        data: [{
                                            type: 'average',
                                            name: '平均值',
                                        }],
                                        animation: true
                                    }
                                }]
                                this.myecharts.hideLoading();
                                this.myecharts.setOption(this.option, true);
                            } else {
                                this.option.legend.data = [];
                                this.option.series = [];
                                this.myecharts.showLoading({
                                    text: '暂无24小时光照强度数据',
                                    effect: 'bubble',
                                    textStyle: {
                                        fontSize: 30
                                    }
                                });
                                //this.myecharts.hideLoading();
                                this.myecharts.setOption(this.option, true);
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
                if (n == 7 || n == 30) {
                    var time = [date]
                    let params = {
                        api: url + '/api/find/staticLight',
                        param: {
                            date: date
                        }
                    }
                    Axios.post(params)
                        .then(res => {
                            //console.log(res.data);
                            var data;
                            if (typeof(res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length) {
                                data = res.data;
                            } else {
                                data = JSON.parse(res.data)
                            }
                            this.myecharts.showLoading();
                            for (var i = 0; i < data.lightInfo.length; i++) {
                                for (var j = i + 1; j < data.lightInfo.length; j++) {
                                    if (data.lightInfo[i].date > data.lightInfo[j].date) {
                                        var tmp = data.lightInfo[i];
                                        data.lightInfo[i] = data.lightInfo[j];
                                        data.lightInfo[j] = tmp;
                                    }
                                }
                            }
                            var MaxDatas = [],
                                MinDatas = [],
                                averageDatas = [];
                            data.lightInfo.forEach(function(val, index) {
                                MaxDatas.push(val.MaxData);
                                MinDatas.push(val.MinData);
                                averageDatas.push(val.average);
                            });

                            this.option.legend.data = ['最大光照强度', '平均光照强度', '最小光照强度']
                            this.option.series = [{
                                name: '最大光照强度',
                                type: 'line',
                                data: MaxDatas,
                                markPoint: {
                                    data: [{
                                        type: 'max',
                                        name: '最大值'
                                    }, {
                                        type: 'min',
                                        name: '最小值'
                                    }]
                                },
                                markLine: {
                                    silent: false,
                                    label: {
                                        normal: {
                                            show: true,
                                            formatter: '{a}\n{b}: {c}'
                                        }
                                    },
                                    data: [{
                                        type: 'average',
                                        name: '平均值',
                                    }],
                                    animation: true
                                }
                            }, {
                                name: '平均光照强度',
                                type: 'line',
                                data: averageDatas,
                                itemStyle: {
                                    normal: {
                                        color: '#4bce56',
                                    }
                                },
                                markPoint: {
                                    data: [{
                                        type: 'max',
                                        name: '最大值'
                                    }, {
                                        type: 'min',
                                        name: '最小值'
                                    }]
                                },
                                markLine: {
                                    silent: false,
                                    label: {
                                        normal: {
                                            show: true,
                                            formatter: '{a}\n{b}: {c}'
                                        }
                                    },
                                    data: [{
                                        type: 'average',
                                        name: '平均值'
                                    }]
                                }
                            }, {
                                name: '最小光照强度',
                                type: 'line',
                                data: MinDatas,
                                itemStyle: {
                                    normal: {
                                        color: '#57c4de'
                                    }
                                },
                                markPoint: {
                                    data: [{
                                        type: 'max',
                                        name: '最大值'
                                    }, {
                                        type: 'min',
                                        name: '最小值'
                                    }]
                                },
                                markLine: {
                                    legend: ['平均值'],
                                    silent: false,
                                    label: {
                                        normal: {
                                            show: true,
                                            formatter: '{a}\n{b}: {c}'
                                        }
                                    },
                                    data: [{
                                        type: 'average',
                                        name: '平均值'
                                    }]
                                }
                            }]

                            this.myecharts.hideLoading();
                            this.myecharts.setOption(this.option, true);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            }
        },
        mounted() {
            this.$nextTick(function() {
                this.drawGraph('beam');
            })
        }
    }
</script>
<style>
    span {
        margin-bottom: 0px !important;
    }
</style>