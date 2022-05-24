<template>
    <div>
      <el-row>
        <el-col :span="24">
          <el-col :span="4" :offset="20">
            <el-button type="primary"
                       plain
                       icon="el-icon-edit"
                       @click="addDialog"
                       style="float: right">添加话题</el-button>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-col>
            <el-empty description="暂无话题"></el-empty>
          </el-col>

        </el-col>
      </el-row>
<!--      <el-empty description="暂无话题，请添加" v-if="isempty" ></el-empty>-->

      <add-discuss-dialog ref="showDialog"></add-discuss-dialog>
    </div>
</template>

<script>
  import {mapState} from 'vuex';
  import addDiscussDialog from "@/pages/PersonalCenter/Courses/ManagementCourses/CoursesDiscuss/addDiscussDialog";
    export default {
        name: "CoursesDiscuss",
        components:{
          addDiscussDialog
        },
        data(){
            return{
                isempty:'true',
            }
        },
        methods:{
            addDialog(){
                this.$refs.showDialog.dialogVisible=true
            }
        },
        computed:{
            ...mapState('CoursesDiscuss',['DiscussInfo'])
        }
    }
</script>

<style scoped>

</style>