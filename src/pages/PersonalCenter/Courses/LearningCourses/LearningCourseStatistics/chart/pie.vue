<template>
  <div id="pie">

  </div>
</template>

<script>
    export default {
        name: "pie",
        mounted() {
            let pie=this.$echarts.init(document.getElementById('pie'))
            pie.setOption({
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        title:'各章完成进度',
                        name: '离散数学',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 15, name: '第一章' },
                            { value: 10, name: '第二章' },
                            { value: 10, name: '第三章' },
                            { value: 4, name: '第四章' },
                            { value: 3, name: '第五章' },
                            { value: 2, name: '第六章' },
                            { value: 1, name: '第七章' }
                        ]
                    }
                ]
            })
        }
    }
</script>

<style scoped>
#pie{
  width: 400px;
  height: 400px;
}
</style>