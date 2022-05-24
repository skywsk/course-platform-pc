<template>
  <div>
    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      width="60%">
      <el-col>
        <el-col>
          <el-col :span="2" :offset="4" style="line-height: 40px">标题：</el-col>
          <el-col :span="10">
            <el-input
              placeholder="请输入内容"
              v-model="DiscussObj.title"
              clearable>
            </el-input>
          </el-col>
        </el-col>
        <el-col style="margin-top: 20px;margin-bottom: 50px">
          <el-col :span="2" :offset="4" style="line-height: 40px">内容：</el-col>
          <el-col :span="15">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="DiscussObj.textarea"
              maxlength="150"
              show-word-limit
            ></el-input>
          </el-col>

        </el-col>
      </el-col>

      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addDiscuss">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
      let test=[]
    export default {
        name: "addDiscussDialog",
        data() {
            return {
                dialogVisible: false,
                DiscussObj: {
                    title:'',
                    textarea:''
                },
            };
        },
        methods:{
            addDiscuss(){

                this.dialogVisible = false
                test.push(this.DiscussObj)
                this.$store.commit('CoursesDiscuss/addDiscussInfo',this.DiscussObj)
                console.log(test)
            }
        }
    }
</script>

<style scoped>

</style>