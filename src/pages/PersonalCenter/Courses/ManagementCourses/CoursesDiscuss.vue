<template>
    <div>
      <el-row>
        <el-col :span="24">
          <el-col :span="4" :offset="18">
            <el-button type="primary" plain icon="el-icon-edit" style="float: right">添加话题</el-button>
          </el-col>
        </el-col>
        <el-col :span="24">
          
        </el-col>
      </el-row>
      <el-empty description="暂无话题，请添加" v-if="isempty" ></el-empty>
    </div>
</template>

<script>
    export default {
        name: "CoursesDiscuss",
        data(){
            return{
                isempty:'true',
            }
        }
    }
</script>

<style scoped>

</style>