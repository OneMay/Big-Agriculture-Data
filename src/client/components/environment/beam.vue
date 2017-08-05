<template>
    <div id="beam" :style="{width:'1200px',height:'400px'}">
    </div>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'beam',
    data() {
        return {
            setDate: '',
            teaDate: '',
            option: {
                title: {
                    text: '',
                    subtext: '纯属虚构'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['最大光照强度', '平均光照强度', '最小光照强度']
                },
                toolbox: {
                    show: true,
                    feature: {
                        /*dataZoom: {
                            yAxisIndex: 'none'
                        },*/
                        //dataView: {readOnly: false},
                        magicType: { type: ['line', 'bar'] },
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
                series: [
                    {
                        name: '最大光照强度',
                        type: 'line',
                        data: [20, 50, 60, 80, 85, 90, 85],
                        markPoint: {
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        },
                        markLine: {
                            silent: false,
                            label: {
                                normal: {
                                    show: true,
                                    formatter: '{a}\n{b}: {c}'
                                }
                            },
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    },
                    {
                        name: '平均光照强度',
                        type: 'line',
                        data: [42, 50, 40, 80, 85, 85, 70],
                        itemStyle: {
                            normal: {
                                color: '#4bce56',
                            }
                        },
                        markPoint: {
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        },
                        markLine: {
                            silent: false,
                            label: {
                                normal: {
                                    show: true,
                                    formatter: '{a}\n{b}: {c}'
                                }
                            },
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    },
                    {
                        name: '最小光照强度',
                        type: 'line',
                        data: [45, 50, 35, 65, 75, 82, 90],
                        itemStyle: {
                            normal: {
                                color: '#57c4de'
                            }
                        },
                        markPoint: {
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        },
                        markLine: {
                            silent: false,
                            label: {
                                normal: {
                                    show: true,
                                    formatter: '{a}\n{b}: {c}'
                                }
                            },
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    }
                ]
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
                    this.option.xAxis.data.push(hour + ':00');
                    hour--;
                }
                this.option.xAxis.data = this.option.xAxis.data.reverse();
            }
            if (num == 7) {
                while (num > 0) {
                    day = day - 1;
                    if (day <= 0) {
                        month = month - 1;
                        if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) != -1) {
                            day = 31;
                        }
                        if ([4, 6, 8, 10].indexOf(month) != -1) {
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
                        if ([4, 6, 8, 10].indexOf(month) != -1) {
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
            }
            if (num == 30) {
                while (num > 0) {
                    day = day - 1;
                    if (day <= 0) {
                        month = month - 1;
                        if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) != -1) {
                            day = 31;
                        }
                        if ([4, 6, 8, 10].indexOf(month) != -1) {
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
                        if ([4, 6, 8, 10].indexOf(month) != -1) {
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
            this.today.day=day;
            this.today.year=year;
            this.today.month=month;
            this.myecharts = echarts.init(document.getElementById(id));
            this.getenvir.year = year;
            this.getenvir.month = month;
            this.getenvir.day = day;
            this.setData(year, month, day, 7);
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.drawGraph('beam');
        })
    }
}
</script>

