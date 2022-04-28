<template>
  <div class="login_bg">
    <div class="login">
      <br>
      <h2 style="text-align:center;">用户登录</h2><br>
      <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="loginForm.username" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" style="width: 80%" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button  @click="resetForm('ruleForm')">重置</el-button>
          <el-button  @click="returnHome">首页</el-button>
          <br>
          <router-link to="/register">注册</router-link>&nbsp;<el-divider direction="vertical"></el-divider>
          <router-link to="">忘记密码</router-link>&nbsp;&nbsp;
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    import jwt from 'jwt-decode'
    export default {
        name: "index",
        data() {
            let validateUser = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else {
                    callback();
                }
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };

            return {
                loginForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    username: [
                        {validator: validateUser, trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            message:'登录成功!',
                            type:'success'
                        })
                        this.$api.getLogin({
                            user: this.loginForm.username,
                            pwd: this.loginForm.password,
                        }).then(res => {
                            console.log(res.data)
                            console.log(jwt(res.data.token))
                            let obj = {
                                token: res.data.token,
                                username: jwt(res.data.token).user
                            }
                            this.$store.commit('LoginModule/setUser', obj)
                            localStorage.setItem('userinfo',JSON.stringify(obj))
                            this.$router.push('/')
                        })
                    } else {
                        console.log('账号或密码错误!');
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
  .login {
    width: 400px;
    height: 300px;
    border-radius: 30px;
    margin: 0 auto;
    margin-top: 200px;
    background-color: rgba(250, 250, 250, .8);
    box-shadow: #409EFF 0px 0px 10px 0px;
    border: none;
  }

  .login_bg {
    /*background: url("../images/login.jpg");*/
    background-color: #f7f7f7;
  }

</style>