<template>
  <div>
    <el-row>
      <el-col style="background-color: #3A4357;" :span="24" >
        <el-col :span="2" :offset="10"><span style="line-height: 40px;color: #eee">作业详细</span></el-col>

      </el-col>
    </el-row>
    <el-row style="margin-top: 50px;">
      <el-col :span="24">
        <el-col :span="15" class="detailed" :offset="2">
          <el-col :span="24" >
            <el-col :span="5" :offset="10" style="margin-top: 20px">
              <h3>{{title}}</h3>
            </el-col>
            <div class="titleLine"></div>
          </el-col>
          <el-col :span="24" style="border-bottom: #eeeeee 1px solid; margin-top: 20px">
            <el-col :span="3" :offset="3" style="margin-bottom: 20px">题数：1</el-col>
            <el-col :span="3" :offset="3">总分：100分</el-col>
            <el-col :span="3" :offset="3" v-if="cardShow" style="color: red">得分：{{sum}}分</el-col>
          </el-col>
          <el-col :span="24">
            <el-col :span="4" style="margin-top: 20px;margin-left: 20px;"><h4>一、选择题</h4></el-col>
            <el-col :span="24" style="margin-top: 20px;margin-left: 20px;margin-bottom: 20px"><p>1.由n 个命题变元组成不等值的命题公式的个数为</p></el-col>
            <el-col :span="24" style="margin-left: 20px;margin-bottom: 20px" >
              <el-radio-group v-model="radio" >
                <el-col :span="24"  style="margin-bottom: 20px" ><el-radio :label="1">
                  A.2n
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="2">
                  B.n²
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="3">
                  C.2的2n次方
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="4">
                  D.2的n次方
                </el-radio></el-col>
              </el-radio-group>
            </el-col>
            <el-col><el-button
              style="margin-left: 20px;margin-bottom: 20px"
              v-if="!cardShow"
              @click="submit" >提交</el-button></el-col>
            <el-col :span="20" :offset="2" v-if="cardShow">
              <el-card shadow="always">
                <el-col :span="24" style="margin-bottom: 20px">
                  <el-col :span="1" :offset="1"  style="color: #86ff73;" v-if="iconShow"><i class="el-icon-check"></i></el-col>
                  <el-col :span="1" :offset="1"  style="color: #F56C6C;" v-if="!iconShow"><i class="el-icon-close"></i></el-col>
                  <el-col :span="3" :offset="1" ><p>我的答案：{{myOption}}</p></el-col>
                  <el-col :span="3" :offset="2" style="color: #86ff73"><p>正确答案：C</p></el-col>
                </el-col>
                <el-col :span="24"  v-if="!iconShow"  >
                  <el-col :span="23" :offset="1" style="margin-bottom: 20px">
                    <p>解析：命题公式不是命题，只有当公式中的每一个命题变元都被赋以确定的真值时，公式的真值才能被确定，从而成为一个命题。由命题变元、联结词和圆括号组成的字符串可构成命题公式。但并不是由这三类符号组成的每一个符号串都可成为命题公式。</p>
                  </el-col>
                  <el-col :span="24" style="margin-bottom: 20px">
                    <el-col :span="2" :offset="1">推荐</el-col>
                    <el-col :span="3">
                      <router-link to="/prefaceExercises"><el-link type="primary" >前序习题</el-link></router-link>
                    </el-col>
                    <el-col :span="3" >
                      <router-link to="/peerExercises"><el-link type="primary" >同序习题</el-link></router-link>
                    </el-col>
                    <el-col :span="4" >
                      <el-link type="primary">相关知识点视频</el-link>
                    </el-col>
                  </el-col>
                </el-col>
              </el-card>
            </el-col>
          </el-col>


          <!--          <el-col :span="24" v-for="(item,index) in titleDetailed" :key="index" style="margin-top: 20px">-->
          <!--            <el-col :span="24">{{item.problem}}</el-col>-->
          <!--            <el-col :span="24" v-for="(a,b) in item.options" :key="b">-->
          <!--              <el-radio v-model="radio" label="a.id">{{a.content}}</el-radio>-->
          <!--            </el-col>-->
          <!--          </el-col>-->
        </el-col>
        <el-col :span="5" class="num" :offset="1">
          <el-col style="margin-left: 20px;margin-top: 20px">
            <el-col ><h4>一、选择题</h4></el-col>
            <el-col style="margin-top: 20px">  <el-button>1</el-button></el-col>
          </el-col>
        </el-col>
      </el-col>
    </el-row>

  </div>

</template>

<script>
    export default {
        name: "CourseWork",
        data(){
            return{
                sum:0,
                radio:'',
                title:'命题',
                myOption:'A',
                iconShow:false,
                cardShow:false,
                // titleDetailed:[
                //     {problem:'关于永真式错误的是( )',
                //         radio: "radio",
                //         options:[
                //               {id:1,content:'一个永真式，对同一分量都用任何公式置换，其结果仍为一永真式'
                //               },
                //               {id:2,content:'任何两个永真式的合取或析取后不再是一个永真式'},
                //               { id:3,content:'设A,B,C为合式公式，若A蕴含B且A是永真式，则B也是永真式'},
                //               {id:4,content:'永真式与永假式互为否定式'}
                //           ]},
                //     {problem:'关于永真式错误的是( )',
                //         options:[
                //             {id:1,content:'一个永真式，对同一分量都用任何公式置换，其结果仍为一永真式'},
                //             {id:2,content:'任何两个永真式的合取或析取后不再是一个永真式'},
                //             { id:3,content:'设A,B,C为合式公式，若A蕴含B且A是永真式，则B也是永真式'},
                //             {id:4,content:'永真式与永假式互为否定式'}
                //         ]},
                //     ],
            }
        },
        methods:{
            submit(){
                this.cardShow=true
                if(this.radio===1)this.myOption='A'
                else if(this.radio===2)this.myOption='B'
                else if(this.radio===3)this.myOption='C',this.iconShow=true,this.sum+=100
                else if(this.radio===4)this.myOption='D'
            }
        }
    }
</script>

<style scoped>
  .detailed{

    height: 600px;
    background-color: white;
    border-radius: 10px;
  }
  .num{
    height: 500px;
    background-color: white;
    border-radius: 10px;
  }
  .titleLine{

  }
</style>