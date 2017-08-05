<template>
    <div id="main" :style="{width: '600px',height:'400px'}">
    </div>
</template>

<script>
import echarts from 'echarts'
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
                    data: [{
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'blue'
                            }
                        }
                    },
                    {
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: "#4fbd92"
                            }
                        }
                    },
                    {
                        value: 36,
                        itemStyle: {
                            normal: {
                                color: "#61d44d"
                            }
                        }
                    },
                    {
                        value: 10,
                        itemStyle: {
                            normal: {
                                color: "#b0ce3b"
                            }
                        }
                    },
                    {
                        value: 10,
                        itemStyle: {
                            normal: {
                                color: "#696eab"
                            }
                        }
                    },
                    {
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: "#ce8517"
                            }
                        }
                    }],
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
            if (month <= 6) {
                this.option.xAxis.data = ["1月", "2月", "3月", "4月", "5月", "6月"]
                var part = '上半年'
            } else {
                this.option.xAxis.data = ["7月", "8月", "9月", "10月", "11月", "12月"]
                var part = '下半年'
            }
            this.option.title.text = year + part + '恩施茶叶销售量';
            // 皮肤添加同一般使用方式  
            this.charts.showLoading();


            this.charts.hideLoading();
            this.charts.setOption(this.option, true);
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
        this.$nextTick(function () {
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
