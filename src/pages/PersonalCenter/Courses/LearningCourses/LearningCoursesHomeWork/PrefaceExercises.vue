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
            <el-col :span="3" :offset="3" style="margin-bottom: 20px">题数：2</el-col>
            <el-col :span="3" :offset="3">总分：100分</el-col>
            <el-col :span="3" :offset="3" v-if="cardShow" style="color: red">得分：{{sum}}分</el-col>
          </el-col>
          <el-col :span="24">
            <el-col :span="4" style="margin-top: 20px;margin-left: 20px;"><h4>一、选择题</h4></el-col>
            <el-col :span="24" style="margin-top: 20px;margin-left: 20px;margin-bottom: 20px"><p>1.设P：我将去镇上，Q：我有时间。命题“我将去镇上，仅当我有时间时”符号化为(   )</p></el-col>
            <el-col :span="24" style="margin-left: 20px;margin-bottom: 20px" >
              <el-radio-group v-model="radio" >
                <el-col :span="24"  style="margin-bottom: 20px" ><el-radio :label="1">
                  A.P → Q
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="2">
                  B.Q → P
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="3">
                  C.P ↔ Q
                </el-radio></el-col>
                <el-col :span="24"><el-radio :label="4">
                  D.¬Q∨¬ P
                </el-radio></el-col>
              </el-radio-group>
            </el-col>
            <el-col :span="20" :offset="2" v-if="cardShow">
              <el-card shadow="always" style="margin-bottom: 20px">
                <el-col :span="24" style="margin-bottom: 20px">
                  <el-col :span="1" :offset="1"  style="color: #86ff73;" v-if="iconShow"><i class="el-icon-check"></i></el-col>
                  <el-col :span="1" :offset="1"  style="color: #F56C6C;" v-if="!iconShow"><i class="el-icon-close"></i></el-col>
                  <el-col :span="3" :offset="1" ><p>我的答案：{{myOption}}</p></el-col>
                  <el-col :span="3" :offset="2" style="color: #86ff73"><p>正确答案：A</p></el-col>
                </el-col>
                <el-col :span="24"  v-if="!iconShow"  >
                  <el-col :span="23" :offset="1" style="margin-bottom: 20px">
                    <p>解析：在等值演算过程中，应首先把各种联结词化为只用五种基本联结词“¬”、“∧”、“∨”、“→”、“↔ ”表达的表达式，以便于演算</p>
                  </el-col>
                  <el-col :span="24" style="margin-bottom: 20px">
                    <el-col :span="2" :offset="1">推荐</el-col>
                    <el-col :span="3">
                      <el-link type="primary">前序习题</el-link>
                    </el-col>
                    <el-col :span="3" >
                      <router-link to="/peerExercises"> <el-link type="primary">同序习题</el-link></router-link>
                    </el-col>
                    <el-col :span="4" >
                      <el-link type="primary">相关知识点视频</el-link>
                    </el-col>
                  </el-col>
                </el-col>
              </el-card>
            </el-col>
          </el-col>


          <el-col :span="24" >
            <el-col :span="24" style="margin-left: 20px;margin-bottom: 20px"><p>2.设 P：我们划船，Q：我们跑步。命题“我们不能既划船又跑步”符号化为(   )</p></el-col>
            <el-col :span="24" style="margin-left: 20px;margin-bottom: 20px" >
              <el-radio-group v-model="radio2" >
                <el-col :span="24"  style="margin-bottom: 20px" ><el-radio :label="1">
                  A.¬Q∨¬P
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="2">
                  B.¬P∨¬Q
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="3">
                  C.¬(Q↔P）
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="4">
                  D.P↔¬Q
                </el-radio></el-col>
              </el-radio-group>
            </el-col>
            <el-col><el-button
              style="margin-left: 20px;margin-bottom: 20px"
              v-if="!cardShow"
              @click="submit" >提交</el-button></el-col>
            <el-col :span="20" :offset="2" v-if="cardShow">
              <el-card shadow="always" style="margin-bottom: 20px">
                <el-col :span="24" style="margin-bottom: 20px">
                  <el-col :span="1" :offset="1"  style="color: #86ff73;" v-if="iconShow2"><i class="el-icon-check"></i></el-col>
                  <el-col :span="1" :offset="1"  style="color: #F56C6C;" v-if="!iconShow2"><i class="el-icon-close"></i></el-col>
                  <el-col :span="3" :offset="1" ><p>我的答案：{{myOption2}}</p></el-col>
                  <el-col :span="3" :offset="2" style="color: #86ff73"><p>正确答案：B</p></el-col>
                </el-col>
                <el-col :span="24"  v-if="!iconShow2"  >
                  <el-col :span="23" :offset="1" style="margin-bottom: 20px">
                    <p>解析：命题变元不是命题，而是一个可以代表任何命题的符号。命题公式不是复合命题，而是一个复合命题结构。当公式中的每一个命题变元都取定一个命题（1 或 0）为值时，公式变成一个复合命题。</p>
                  </el-col>
                  <el-col :span="24" style="margin-bottom: 20px">
                    <el-col :span="2" :offset="1">推荐</el-col>
                    <el-col :span="3">
                      <el-link type="primary">前序习题</el-link>
                    </el-col>
                    <el-col :span="3" >
                      <router-link to="/peerExercises"><el-link type="primary">同序习题</el-link></router-link>
                    </el-col>
                    <el-col :span="4" >
                      <el-link type="primary">相关知识点视频</el-link>
                    </el-col>
                  </el-col>
                </el-col>
              </el-card>
            </el-col>
          </el-col>


        </el-col>
        <el-col :span="5" class="num" :offset="1">
          <el-col style="margin-left: 20px;margin-top: 20px">
            <el-col ><h4>一、选择题</h4></el-col>
            <el-col style="margin-top: 20px">
              <el-button>1</el-button>
              <el-button>2</el-button>
            </el-col>

          </el-col>
        </el-col>
      </el-col>
    </el-row>

  </div>

</template>

<script>
    export default {
        name: "PrefaceExercises",
        data(){
            return{
                radio:'',
                radio2:'',
                title:'前序习题',
                myOption:'A',
                myOption2:'A',
                iconShow:false,
                iconShow2:false,
                cardShow:false,
                sum:0
            }
        },
        methods:{
            submit(){
                this.cardShow=true
                if(this.radio===1)this.myOption='A',this.iconShow=true,this.sum+=50
                else if(this.radio===2)this.myOption='B'
                else if(this.radio===3)this.myOption='C'
                else if(this.radio===4)this.myOption='D'

                if(this.radio2===1)this.myOption2='A'
                else if(this.radio2===2)this.myOption2='B',this.iconShow2=true,this.sum+=50
                else if(this.radio2===3)this.myOption2='C'
                else if(this.radio2===4)this.myOption2='D'

            }
        }
    }
</script>

<style scoped>
  .detailed{

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