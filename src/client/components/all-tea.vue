<template>
    <div id="main" :style="{width: '600px',height:'400px'}">
    </div>
</template>

<script>
    import echarts from 'echarts'
    import AXIOS from './../axios/axios'
    const Axios = new AXIOS();
    const url = '';
    export default {
        name: 'all-tea',
        data() {

            return {
                option: {
                    title: {
                        text: '恩施茶叶销售量',
                        textStyle: {
                            color: '#31614e',
                            fontSize: '16px'
                        }
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} kg'
                        }

                    },
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [],
                        itemStyle: {
                            normal: {
                                color: 'yellow',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                }
            }
        },
        props: ['getItem'],
        watch: {
            getItem: {
                //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
                handler(curVal, oldVal) {
                    this.setDate(curVal.year, curVal.month)
                        //setTimeout(this.setDate(curVal.year, curVal.month),0);
                },
                deep: true
            }

        },
        methods: {
            setDate(year, month) {
                var part;
                var monthList = [];
                if (month <= 6) {
                    this.option.xAxis.data = ["1月", "2月", "3月", "4月", "5月", "6月"]
                    var part = '上半年'
                } else {
                    this.option.xAxis.data = ["7月", "8月", "9月", "10月", "11月", "12月"]
                    var part = '下半年'
                }
                this.option.title.text = year + part + '恩施茶叶销售量';
                this.option.xAxis.data.forEach(function(val, index) {
                    monthList.push(parseInt(val));
                });
                this.getTeaData(year, monthList);
                // 皮肤添加同一般使用方式  
                this.charts.showLoading();


                this.charts.hideLoading();
                this.charts.setOption(this.option, true);
            },
            randomValue() {
                return Math.round(Math.random() * 6);
            },
            getTeaData(year, month) {
                var that = this;
                let params = {
                    api: url + '/api/find/teaCategory',
                    param: {
                        year: year,
                        monthList: month
                    }
                }
                Axios.post(params)
                    .then(res => {
                        var data;
                        if (typeof(res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length) {
                            data = res.data;
                        } else {
                            data = JSON.parse(res.data)
                        }
                        if (data.saleInfo) {
                            this.charts.showLoading();
                            var data1 = [];
                            data.saleInfo.forEach(function(val, index) {
                                data1.push(Number(val.data[0].salesVolume) + Number(val.data[1].salesVolume) + Number(val.data[2].salesVolume) + Number(val.data[3].salesVolume));

                            })
                            this.option.series.data = [];
                            var teaData = [];
                            var color = ['#d43f3a', '#65e29d', '#097339', '#afaa0e', '#ea5353', '#67a3d6']
                            data1.forEach(function(val, index) {
                                teaData.push({
                                    value: val,
                                    itemStyle: {
                                        normal: {
                                            color: color[that.randomValue()],
                                            shadowBlur: 200
                                        }
                                    }
                                })
                            })

                            this.option.series[0].data = teaData;


                            this.charts.hideLoading();
                            this.charts.setOption(this.option, true);
                        } else {
                            this.option.series.data = [];
                            this.charts.showLoading({
                                text: '暂无数据',
                                effect: 'bubble',
                                textStyle: {
                                    fontSize: 30
                                }
                            });

                            // this.charts.hideLoading();
                            this.charts.setOption(this.option, true);
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            drawGraph(id) {
                // 绘图方法 
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var teamonth = month - 1;
                if (teamonth == 0) {
                    teamonth = 12;
                    year = year - 1;
                }
                this.charts = echarts.init(document.getElementById(id));
                this.setDate(year, teamonth);

                //}
                //var bmap = this.chart.getModel().getComponent('bmap').getBMap();
                //bmap.addControl(new BMap.MapTypeControl());
            }
        },
        mounted() {
            this.$nextTick(function() {
                this.drawGraph('main');
            })
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #main {
        float: left;
    }
</style>