<template>
  <div id="pie" style="width:800px;height: 400px">

  </div>
</template>

<script>
    export default {
        name: "piechart",
        mounted() {
            let pie=this.$echarts.init(document.getElementById('pie'))
            pie.setOption({
                title: {
                    text: '各资源类型分布及占比情况',
                    subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: '音频' },
                            { value: 735, name: '视频' },
                            { value: 580, name: '文档' },
                            { value: 484, name: '图片' },
                            { value: 300, name: '其他' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]

            })
        }
    }
</script>

<style scoped>

</style>