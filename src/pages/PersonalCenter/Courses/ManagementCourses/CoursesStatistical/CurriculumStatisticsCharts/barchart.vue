<template>
  <div id="bar" style="height: 40px;width: 400px"></div>
</template>

<script>
    export default {
        name: "bar",
        mounted() {
            let bar=this.$echarts.init(document.getElementById('bar'))
            bar.setOption(
                {
                xAxis: {
                    type: 'category',
                    data: ['第一章', '第二章', '第三章', '第四章', '第五章']
                },
                yAxis: {
                    type: 'value',
                    show:false
                },
                tooltip: {},
                series: [
                    {
                        data: [8, 20, 20, 14, 10],
                        type: 'bar'
                    }
                ]

            })
        }
    }
</script>

<style scoped>

</style>