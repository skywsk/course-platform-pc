
<template>
  <LearnCourses>
    <div class="managementindex">
      <el-col :offset="11" style="margin-top: 30px;margin-bottom: 30px;"><h1>目录</h1></el-col>
      <el-col><div class="headerLine"></div></el-col>
      <br><br><br><br>
      <el-col>
      <div class="catalog">
        <el-tree :data="chapter"
                 :props="defaultProps"
                 @node-click="handleNodeClick"></el-tree>
      </div>
      </el-col>
    </div>
  </LearnCourses>
</template>

<script>
  import {mapState} from 'vuex'
  import LearnCourses from "@/components/LearnCourses";
    export default {
        name: "ManagementIndex",
        components:{LearnCourses},
        data() {
            return {
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        },
        computed:{
            ...mapState('CourseIndex',['chapter'])
        }
    }
</script>

<style scoped>
  .headerLine{
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 30px;
  }
  .catalog{
    width: 1000px;
    height: 700px;
    margin:0 auto;
    /*border: #409EFF 1px solid;*/
    /*box-shadow: #409EFF 0 0 1px 0;*/
    /*border-radius: 30px;*/
  }
  >>> .el-tree-node>.el-tree-node__content {
    /*background-color: #5daaf0;*/
    height: 50px;
  }
</style>