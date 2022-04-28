<template>
  <div class="register">
    <br>
    <h2>注册，开启您的学习之旅</h2><br><br>
    <el-form :model="registerForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item
        prop="username"
        label="邮箱"
        :rules="[
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'username', message: '请输入正确的邮箱', trigger: ['blur', 'change'] }
    ]"
      >
        <el-input v-model="registerForm.username" placeholder="请输入注册邮箱" style="width: 80%"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="用户昵称" prop="userName">
        <el-input type="text" v-model="registerForm.nickname" placeholder="请输入用户昵称" style="width: 80%"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerForm.password" autocomplete="off" placeholder="请输入密码"
                  style="width: 80%" show-password></el-input>
      </el-form-item>
      <br>
      <el-form-item label="重复密码" prop="checkPass">
        <el-input type="password" v-model="registerForm.checkPass" autocomplete="off" placeholder="请再次输入密码"
                  style="width: 80%" show-password></el-input>
      </el-form-item>
      <br>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="returnHome">返回首页</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var validateUserName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户昵称'));
                } else {
                    callback();
                }
            };
            return {
                registerForm: {
                    nickname: '', //用户名称
                    username: '', //用户账号
                    password: '', //用户密码
                    checkPass: '', //用户校验密码
                },
                rules: {
                    password: [
                        {validator: validatePass, trigger: 'blur', required: true,}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur', required: true,}
                    ],
                    userName: [
                        {validator: validateUserName, trigger: 'blur', required: true}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            returnHome(){
                this.$router.push('/')
            }
        }
    }

</script>

<style scoped>
  .register {
    margin: 0 auto;
    width: 600px;
    box-shadow: #409EFF 0px 0px 10px 0px;
    margin-top: 100px;
    height: 500px;
    border-radius: 30px;
  }

  .register h2 {
    text-align: center;
  }
</style>