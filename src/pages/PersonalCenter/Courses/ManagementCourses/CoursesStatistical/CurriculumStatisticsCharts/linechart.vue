<template>
  <div id="lineStatistical" style="width: 400px;height:40px;">

  </div>
</template>

<script>
    export default {
        name: "linechart",
        mounted() {
            let linechart=this.$echarts.init(document.getElementById('lineStatistical'))
            linechart.setOption({
                xAxis: {
                    type: 'category',
                    show:false
                },
                yAxis: {
                    show:false
                },
                series: [
                    {
                        data: [20, 32, 10, 14, 10, 10, 20],
                        type: 'line',
                        smooth: true,
                        itemStyle:{
                            opacity:0
                        },
                        areaStyle:{
                            color:"blue",
                            opacity:0.1
                        }
                    }
                ],
                grid:{
                    left:10,
                    top:10,
                    right:10,
                    bottom:10
                }
            })
        }
    }
</script>

<style scoped>

</style>