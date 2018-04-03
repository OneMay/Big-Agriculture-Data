<template>
    <div id="tea-category" :style="{width: '600px',height:'400px',float:'left'}">
    </div>
</template>

<script>
    import echarts from 'echarts'
    import AXIOS from './../axios/axios'
    const Axios = new AXIOS();
    const url = '';
    export default {
        name: 'tea-category',
        data() {

            return {
                option: {
                    baseOption: {
                        title: {
                            text: '',
                            textStyle: {
                                color: '#31614e',
                                fontSize: '16px'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        legend: {
                            data: []
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [{
                            type: 'category',
                            data: []
                        }],
                        yAxis: [{
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} kg'

                            }
                        }],
                        series: []
                            // series: [ {
                            //         name: '绿茶',
                            //         type: 'bar',
                            //         data: [320, 332, 301, 334, 390, 330]
                            //     },
                            //     {
                            //         name: '红茶',
                            //         type: 'bar',
                            //         data: [862, 1018, 964, 1026, 1679, 1600]
                            //         /*markLine: {
                            //             lineStyle: {
                            //                 normal: {
                            //                     type: 'dashed'
                            //                 }
                            //             },
                            //             data: [
                            //                 [{ type: 'min' }, { type: 'max' }]
                            //             ]
                            //         }*/
                            //     },
                            //     {
                            //         name: '竹叶青',
                            //         type: 'bar',
                            //         data: [620, 732, 701, 734, 1090, 1130]
                            //     },
                            //      {
                            //         name: '竹叶青',
                            //         type: 'bar',
                            //         data: [620, 732, 701, 734, 1090, 1130]
                            //     }]
                    },
                    media: [{
                        option: {
                            legend: {
                                right: 'center',
                                bottom: 0,
                                orient: 'horizontal'
                            },
                            series: [{
                                radius: [30, '20%'],
                                center: ['5%', '50%']
                            }, {
                                radius: [30, '50%'],
                                center: ['75%', '50%']
                            }]
                        }
                    }, {
                        query: {
                            minAspectRatio: 1
                        },
                        option: {
                            legend: {
                                right: 'center',
                                top: 5,
                                orient: 'horizontal'
                            },
                            series: [{
                                radius: [20, '50%'],
                                center: ['25%', '50%']
                            }, {
                                radius: [30, '50%'],
                                center: ['75%', '50%']
                            }]
                        }
                    }, {
                        query: {
                            maxAspectRatio: 1
                        },
                        option: {
                            legend: {
                                right: 'center',
                                bottom: 0,
                                orient: 'horizontal'
                            },
                            series: [{
                                radius: [20, '50%'],
                                center: ['50%', '30%']
                            }, {
                                radius: [30, '50%'],
                                center: ['50%', '70%']
                            }]
                        }
                    }, {
                        query: {
                            maxWidth: 500
                        },
                        option: {
                            legend: {
                                right: 10,
                                top: '15%',
                                orient: 'vertical'
                            },
                            series: [{
                                radius: [20, '50%'],
                                center: ['50%', '30%']
                            }, {
                                radius: [30, '50%'],
                                center: ['50%', '75%']
                            }]
                        }
                    }]

                },
                charts: null
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
                    this.option.baseOption.xAxis[0].data = ["1月", "2月", "3月", "4月", "5月", "6月"]
                    var part = '上半年'
                } else {
                    this.option.baseOption.xAxis[0].data = ["7月", "8月", "9月", "10月", "11月", "12月"]
                    var part = '下半年'
                }
                this.option.baseOption.title.text = year + part + '茶叶详细销售量';
                // 皮肤添加同一般使用方式
                this.option.baseOption.xAxis[0].data.forEach(function(val, index) {
                    monthList.push(parseInt(val));
                });
                this.getTeaData(year, monthList);
                // this.charts.showLoading();

                // this.charts.hideLoading();
                //setTimeout(this.charts.setOption(this.option, true),0)
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
                            var data1 = [],
                                data2 = [],
                                data3 = [],
                                data4 = [];
                            data.saleInfo.forEach(function(val, index) {
                                    data1.push(Number(val.data[0].salesVolume));
                                    data2.push(Number(val.data[1].salesVolume));
                                    data3.push(Number(val.data[2].salesVolume));
                                    data4.push(Number(val.data[3].salesVolume));
                                })
                                // console.log(data.saleInfo[0].data[0].name)
                            this.option.baseOption.legend.data = [];

                            this.option.baseOption.legend.data = [data.saleInfo[0].data[0].name, data.saleInfo[0].data[1].name, data.saleInfo[0].data[2].name, data.saleInfo[0].data[3].name]
                            this.option.baseOption.series = [];
                            //alert(this.option.baseOption.legend.data)
                            this.option.baseOption.series = [{
                                name: data.saleInfo[0].data[0].name,
                                type: 'bar',
                                data: data1
                            }, {
                                name: data.saleInfo[0].data[1].name,
                                type: 'bar',
                                data: data2
                                    /*markLine: {
                                        lineStyle: {
                                            normal: {
                                                type: 'dashed'
                                            }
                                        },
                                        data: [
                                            [{ type: 'min' }, { type: 'max' }]
                                        ]
                                    }*/
                            }, {
                                name: data.saleInfo[0].data[2].name,
                                type: 'bar',
                                data: data3
                            }, {
                                name: data.saleInfo[0].data[3].name,
                                type: 'bar',
                                data: data4
                            }]

                            this.charts.hideLoading();
                            this.charts.setOption(this.option, true);
                        } else {

                            this.option.baseOption.legend.data = []
                            this.option.baseOption.series = [{
                                name: '',
                                type: 'bar',
                                data: []
                            }, {
                                name: '',
                                type: 'bar',
                                data: []
                            }]
                            this.option.baseOption.series.type = 'bar'
                                //console.log(this.option.baseOption.series)
                                // this.option.baseOption.series.type='bar';

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
                        console.log(err);
                    })
            },
            drawGraph(id) {
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
            }
        },
        mounted() {
            this.$nextTick(function() {
                this.drawGraph('tea-category');
            })
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>