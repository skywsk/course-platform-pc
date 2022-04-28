<template>
  <el-card class="box-card">
      <div class="cardHeader">
        {{title}}
      </div>
      <div class="cardContent">
        {{count}}
      </div>
      <div class="cardChart">
        <slot name="chart"></slot>
      </div>
      <div class="cardFooter">
        <slot name="footer"></slot>
      </div>

  </el-card>
</template>

<script>
    export default {
        name: "StatisticalCard",
        props:[
            'title',
            'count'
        ]
    }
</script>

<style scoped>
  .box-card {
    width: 450px;
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 10px;
  }
  .cardHeader{
    display: flex;
    justify-content: space-between;
  }
  .cardContent{
    font-size: 30px;
    padding: 10px 0px;
  }
  .cardChart{
    height: 50px;
  }
  .cardFooter{
    border-top: 1px solid #eeee;
  }
</style>