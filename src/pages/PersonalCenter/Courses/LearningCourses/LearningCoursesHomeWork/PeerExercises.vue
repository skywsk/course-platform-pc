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
            <el-col :span="24" style="margin-top: 20px;margin-left: 20px;margin-bottom: 20px"><p>1.下列语句中哪个是真命题(   )</p></el-col>
            <el-col :span="24" style="margin-left: 20px;margin-bottom: 20px" >
              <el-radio-group v-model="radio" >
                <el-col :span="24"  style="margin-bottom: 20px" ><el-radio :label="1">
                  A.我正在说谎
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="2">
                  B.严禁吸烟
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="3">
                  C.如果1+2=5，那么雪是黑的。
                </el-radio></el-col>
                <el-col :span="24"><el-radio :label="4">
                  D.如果1+2=3，那么雪是黑的
                </el-radio></el-col>
              </el-radio-group>
            </el-col>
            <el-col :span="20" :offset="2" v-if="cardShow">
              <el-card shadow="always" style="margin-bottom: 20px">
                <el-col :span="24" style="margin-bottom: 20px">
                  <el-col :span="1" :offset="1"  style="color: #86ff73;" v-if="iconShow"><i class="el-icon-check"></i></el-col>
                  <el-col :span="1" :offset="1"  style="color: #F56C6C;" v-if="!iconShow"><i class="el-icon-close"></i></el-col>
                  <el-col :span="3" :offset="1" ><p>我的答案：{{myOption}}</p></el-col>
                  <el-col :span="3" :offset="2" style="color: #86ff73"><p>正确答案：D</p></el-col>
                </el-col>
                <el-col :span="24"  v-if="!iconShow" >
                  <el-col :span="23" :offset="1" style="margin-bottom: 20px">
                    <p>解析：联结词可以联结两个没有内在联系的命题，并非一切陈述句所陈述的内容都能确定真假，因而不是所有陈述句都是命题。命题必须是具有唯一真值的陈述句，但是并不一定要知道命题的真值。例如，“太阳系外有宇宙人”是一个命题，虽然目前人们还无法判断其真假，但客观上其真值是唯一存在的。</p>
                  </el-col>
                  <el-col :span="24" style="margin-bottom: 20px">
                    <el-col :span="2" :offset="1">推荐</el-col>
                    <el-col :span="3">
                      <el-link type="primary">前序习题</el-link>
                    </el-col>
                    <el-col :span="3" >
                      <el-link type="primary">同序习题</el-link>
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
            <el-col :span="24" style="margin-left: 20px;margin-bottom: 20px"><p>2.下面哪个联结词运算不可交换?(   )</p></el-col>
            <el-col :span="24" style="margin-left: 20px;margin-bottom: 20px" >
              <el-radio-group v-model="radio2" >
                <el-col :span="24"  style="margin-bottom: 20px" ><el-radio :label="1">
                  A.∧
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="2">
                  B.→
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="3">
                  C.∨
                </el-radio></el-col>
                <el-col :span="24" style="margin-bottom: 20px"><el-radio :label="4">
                  D.↔
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
                    <p>解析：↔表示A 和B 之间可双向推导，即由A 可推出B，反之由B 可推出A；而 B→A表示A 和B 之间只能单向推导，即由A 可推出B（或说当A 真时B 也一定为真）。</p>
                  </el-col>
                  <el-col :span="24" style="margin-bottom: 20px">
                    <el-col :span="2" :offset="1">推荐</el-col>
                    <el-col :span="3">
                      <el-link type="primary">前序习题</el-link>
                    </el-col>
                    <el-col :span="3" >
                      <el-link type="primary">同序习题</el-link>
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
        name: "PeerExercises",
        data(){
            return{
                radio:'',
                radio2:'',
                title:'同序习题',
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
                if(this.radio===1)this.myOption='A'
                else if(this.radio===2)this.myOption='B'
                else if(this.radio===3)this.myOption='C'
                else if(this.radio===4)this.myOption='D',this.iconShow=true,this.sum+=50

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