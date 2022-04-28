<template>
  <div>
  <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

  <el-dialog
    title="添加新课程"
    :visible.sync="dialogVisible"
    width="70%">
    <div class="courseline"></div>

<div class="courseDetailed">
    <el-row>
      <el-col :span="24" style="margin-top: 10px">
        <el-col :span="3" :offset="1"><h3>课程名称</h3></el-col>
        <el-col :span="10">
          <el-input placeholder="请输入内容"  v-model="courseName" clearable></el-input>
        </el-col>
      </el-col>
      <el-col :span="24" style="margin-top: 30px">
        <el-col :span="3" :offset="1"><h3>课程教师</h3></el-col>
        <el-col :span="10">
          <el-input placeholder="请输入内容"  v-model="courseTeacher" clearable></el-input>
        </el-col>
      </el-col>
      <el-col :span="24" style="margin-top: 30px">
        <el-col :span="3" :offset="1"><h3>课程介绍</h3></el-col>
        <el-col :span="10">
          <el-input placeholder="请输入内容"  v-model="courseintroduce" clearable></el-input>
        </el-col>
      </el-col>
      <el-col :span="24" style="margin-top: 30px">
        <el-col :span="3" :offset="1"><h3>课程封面</h3></el-col>
        <el-col :span="5">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-col>
    </el-row>

</div>



    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>

  </span>
  </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "addCreateCourseDialog",
        data() {
            return {
                dialogVisible: false,
                courseName:'',
                courseTeacher:'',
                courseintroduce:'',
                imageUrl: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped>
.courseline{
  border-bottom: 1px solid #eeeeee;
}
  .courseDetailed{
    margin-top: 30px;
    line-height: 40px;
  }

.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader :hover {
  border-color: #409EFF;
}
.el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>