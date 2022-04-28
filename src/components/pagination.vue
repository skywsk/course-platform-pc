<template>
  <div style="text-align: center;margin: 20px">
  <el-pagination
    small
    layout="prev, pager, next,total,jumper"
    :total="total"
    :page-size="pageSize">
  </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "pagination",
        props:{
            total:{
                type:Number,
                default:100
            },
            pageSize:{
                type: Number,
                default: 100
            }
        },
        data(){
            return{}
        }
    }
</script>

<style scoped>

</style>