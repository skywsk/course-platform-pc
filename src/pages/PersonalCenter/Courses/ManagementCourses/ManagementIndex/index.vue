<template>
  <div class="managementindex">
    <h1>目录</h1><br>
    <router-link to="/editChapter">
      <el-button
        type="primary"
        icon="el-icon-edit"
        size="small"
        style="float: right;margin-right: 30px"
      >
        进入编辑
      </el-button>
    </router-link>
    <br><br>
    <div class="catalog">
      <el-tree :data="chapter"
               :props="defaultProps"
               @node-click="handleNodeClick"></el-tree>
    </div>
  </div>

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "ManagementIndex",
        data() {
            return {
                node: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                keyword: ''
            };
        },
        methods: {
            handleNodeClick(data) {
                this.node = data
                console.log(data);
                this.$router.push({name: 'courseShow', params: {node: this.node}, query: {k: this.node}})
            }
        },
        computed:{
            ...mapState('CourseIndex',['chapter'])
        }
    }


</script>

<style scoped>
  .catalog {
    width: 1000px;
    height: 700px;
    margin: 0 auto;
    /*border: #409EFF 1px solid;*/
    /*box-shadow: #409EFF 0 0 1px 0;*/
    /*border-radius: 30px;*/
  }

  >>> .el-tree-node > .el-tree-node__content {
    /*background-color: #5daaf0;*/
    height: 50px;
  }
</style>