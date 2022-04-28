<template>
  <PersonalCenter title="我的信息">
    <div class="informationBox">
    <el-descriptions :column="2" border>
      <el-descriptions-item label="用户名" >
        <el-input v-model="username" clearable placeholder=""/>
      </el-descriptions-item>
      <el-descriptions-item label="学校">
        <el-input v-model="school" clearable placeholder=""/>
      </el-descriptions-item>
      <el-descriptions-item label="性别">
        <input type="radio" name="gender" value="男" />男
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" name="gender" value="女" />女
      </el-descriptions-item>
      <el-descriptions-item label="邮箱">
        <el-input type="e-mail" v-model="Email"  clearable placeholder=""/>
      </el-descriptions-item>
      <el-descriptions-item label="联系方式">
        <el-input v-model="contact"  clearable placeholder=""/>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'left'}">
        <el-input v-model="contactAddress" clearable placeholder=""/>
      </el-descriptions-item>
      <el-descriptions-item label="个性签名">
        <el-input  type = "textarea" :rows="2"
                   clearable
                   maxlength="150"
                   show-word-limit
                   v-model="individualitysignature"
                   placeholder="请输入内容"/>
      </el-descriptions-item>
    </el-descriptions>
    </div>
  </PersonalCenter>
</template>

<script>
    import PersonalCenter from '@/components/PersonalCenter'

    export default {
        name: "MyInformation",
        components: {
            PersonalCenter
        },
        data() {
            return {
                username: '123',
                school: '',
                gender: '',
                Email: '',
                contact: '',
                contactAddress: '',
                individualitysignature: [],
            }
        }
    }
</script>

<style scoped>
  .informationBox{
    height: 500px;
    margin: 0 auto;

  }
</style>