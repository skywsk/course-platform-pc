<template>
  <div id="classStatistical" style="width: 1000px;height:400px;"></div>
</template>

<script>
    export default {
        name: "classStatistical",
        mounted() {
          this.testChart()
        },
        methods:{
            testChart(){
                let test=this.$echarts.init(document.getElementById('classStatistical'))
                test.setOption(
                    {
                        title: {
                            text: 'ECharts 入门示例'
                        },
                        tooltip: {},
                        legend: {
                            data: ['销量']
                        },
                        xAxis: {
                            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                        },
                        yAxis: {},
                        series: [
                            {
                                name: '销量',
                                type: 'bar',
                                data: [5, 20, 36, 10, 10, 20]
                            }
                        ]
                    })
            }
        }
    }

</script>

<style scoped>

</style>