<template>
  <div class="test">
  <div id="TeacherGraph" >

  </div>
  <div id="nodeShow" v-if="isShow">
    <div class="nodeinfoHeader">
      <el-col>
        <el-col :span="10" :offset="8">
        <h3>知识点信息</h3>
        </el-col>
        <el-col :span="4" :offset="2">
          <el-button icon="el-icon-close" circle size="mini" @click="isShow=false"></el-button>
        </el-col>
      </el-col>


    </div>
    <el-col style="margin-top: 30px;" >
      <el-col>
        <el-col :span="7" :offset="1">节点名字</el-col>
        <el-col :span="16"> {{nodeName}}</el-col>
      </el-col>
      <template v-if="nodeValue">
      <el-col style="margin-top: 30px;" >
        <el-col :span="7" :offset="1">前序知识点</el-col>
        <el-col :span="16"> {{preOrder}}</el-col>
      </el-col>
      <el-col style="margin-top: 30px;" >
        <el-col :span="7" :offset="1">后序知识点</el-col>
        <el-col :span="16"> {{PostOrder}}</el-col>
      </el-col>
      <el-col style="margin-top: 30px;" >
        <el-col :span="7" :offset="1">知识点资料</el-col>
        <el-col :span="16">
          <el-col >视频：<router-link :to="RelatedData.video">{{nodeName}}</router-link></el-col>
          <el-col style="margin-top: 20px;">文档：<router-link :to="RelatedData.file">{{nodeName}}</router-link></el-col>
          <el-col style="margin-top: 20px;">习题：<router-link :to="RelatedData.homeWork">{{nodeName}}</router-link></el-col>
        </el-col>
      </el-col>
      </template>
    </el-col>

  </div>
  </div>
</template>

<script>
    export default {
        name: "CourseGraph",

        mounted() {
            this.$nextTick(this.courseGraph())

        },
        data(){
            return{
                nodeName:'11',
                isShow:false,
                nodeValue:'',
                PostOrder:'',
                preOrder:'',
                RelatedData:{}
            }
        },
        methods:{
            courseGraph(){

                let teacherGraph=this.$echarts.init(document.getElementById('TeacherGraph'))
                let data = {
                    nodes: [
                        {
                            name: '第一章 数理逻辑',
                            category: 1,
                        },
                        {
                            name: '第二章 命题逻辑等值演算',
                            category: 1
                        }, {
                            name: '第三章 命题逻辑推理理论',
                            category: 1
                        }, {
                            name: '第四章 一阶逻辑基本概念',
                            category: 1
                        }, {
                            name: '第五章 一阶逻辑等值演算与推理',
                            category: 1
                        }, {
                            name: '第六章 集合代数',
                            category: 1
                        }, {
                            name: '第七章 二元关系',
                            category: 1
                        },
                        {
                            name: '命题',
                            category: 2,
                            value: {
                                preOrder:'无',
                                PostOrder:'命题真值 假命题 简单命题 复合命题',
                                RelatedData:{
                                    video:'/courseShow',
                                    file:'/courseShow',
                                    homeWork:'/courseWork'
                                }
                            }
                        }, {
                            name: '命题真值',
                            category: 3
                        },{
                            name: '假命题',
                            category: 3
                        },
                        {
                            name: '简单命题',
                            category: 3
                        },
                        {
                            name: '复合命题',
                            category: 3,
                            value: {
                                preOrder:'命题',
                                PostOrder:'否定命题',
                                RelatedData: {
                                    video:'/courseShow',
                                    file:'/courseShow',
                                    homeWork:'/courseWork'
                                }
                            }
                        },
                        {
                            name: '否定命题',
                            category: 4
                        },
                        {
                            name:'离散数学',
                            category: 0
                        },

                    ],
                    links: [
                        {
                            source: '离散数学',
                            target: '第一章 数理逻辑',
                            name: '章节'
                        },
                        {
                            source: '离散数学',
                            target: '第二章 命题逻辑等值演算',
                            name: '章节'
                        },
                        {
                            source: '离散数学',
                            target: '第三章 命题逻辑推理理论',
                            name: '章节'
                        },
                        {
                            source: '离散数学',
                            target: '第四章 一阶逻辑基本概念',
                            name: '章节'
                        },
                        {
                            source: '离散数学',
                            target: '第五章 一阶逻辑等值演算与推理',
                            name: '章节'
                        },
                        {
                            source: '离散数学',
                            target: '第六章 集合代数',
                            name: '章节'
                        },
                        {
                            source: '离散数学',
                            target: '第七章 二元关系',
                            name: '章节'
                        },

                        {
                            source: '第一章 数理逻辑',
                            target: '命题',
                            name: '课时'
                        },
                        {
                            source: '命题',
                            target: '命题真值',
                            name: '后序'
                        },
                        {
                            source: '命题',
                            target: '真命题',
                            name: '后序'
                        },
                        {
                            source: '命题',
                            target: '假命题',
                            name: '后序'
                        },
                        {
                            source: '命题',
                            target: '复合命题',
                            name: '后序'
                        },
                        {
                            source: '命题',
                            target: '简单命题',
                            name: '后序'
                        },
                        {
                            source: '复合命题',
                            target: '否定命题',
                            name: '后序'
                        },

                    ],
                    nodeName:'11'
                }

                const color1 = '#006acc';
                const color2 = '#ff7d18';
                const color3 = '#10a050';
                const color4 = '#409EFF';
                const color5 = '#F56C6C';
                data.nodes.forEach(node => {
                    if (node.category === 0) {
                        node.symbolSize = 150;
                        node.itemStyle = {
                            color: color1
                        };
                    }
                    else if (node.category === 1) {
                        node.symbolSize = 100;
                        node.itemStyle = {
                            color: color2
                        };
                    }
                    else if (node.category === 2) {
                        node.symbolSize = 80;
                        node.itemStyle = {
                            color: color3
                        };
                    }
                    else if (node.category === 3) {
                        node.symbolSize = 60;
                        node.itemStyle = {
                            color: color4
                        };
                    }
                    else if (node.category === 4) {
                        node.symbolSize = 50;
                        node.itemStyle = {
                            color: color5
                        };
                    }
                });

                data.links.forEach(link => {
                    link.label = {
                        align: 'center',
                        fontSize: 15
                    };

                    if (link.name === '课时') {
                        link.lineStyle = {
                            color: color2
                        }
                    } else if (link.name === '章节') {
                        link.lineStyle = {
                            color: color1
                        }
                    } else if (link.name === '后序') {
                        link.lineStyle = {
                            color: color3
                        }
                    }
                });

                let categories = [
                    {

                        itemStyle: {
                            color: color1
                        }
                    },
                    {
                        name: '章节',
                        itemStyle: {
                            color: color2
                        }
                    },
                    {
                        name: '二级',
                        itemStyle: {
                            color: color3
                        }
                    },
                    {
                        name: '三级',
                        itemStyle: {
                            color: color4
                        }
                    },
                    {
                        name: '四级',
                        itemStyle: {
                            color: color5
                        }
                    }
                ]
                teacherGraph.setOption(
                    {
                        legend: [{
                            // selectedMode: 'single',
                            data: categories.map(x => x.name),
                            // icon: 'circle'
                        }],
                        series: [{
                            type: 'graph',
                            layout: 'force',
                            symbolSize: 70,
                            draggable: true,
                            roam: true,
                            focusNodeAdjacency: true,
                            categories: categories,
                            edgeSymbol: ['', 'arrow'],
                            // edgeSymbolSize: [80, 10],
                            edgeLabel: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        fontSize: 20
                                    },
                                    formatter(x) {
                                        return x.data.name;
                                    }
                                }
                            },
                            label: {
                                show: true
                            },
                            force: {
                                repulsion: 2000,
                                edgeLength: 180
                            },
                            data: data.nodes,
                            links: data.links
                        }],

                    }
                );
                // teacherGraph.on('click', function (params) {
                //         this.nodeName=params.name;
                //         console.log(params.data);
                //     }),
                teacherGraph.off().on("click", params => {
                    console.log(params)
                    this.isShow=true
                    this.nodeValue=params.value;
                    this.nodeName=params.name;
                    this.preOrder=params.value.preOrder;
                    this.PostOrder=params.value.PostOrder;
                    this.RelatedData=params.value.RelatedData;

                })
            }
        }

    }
</script>

<style scoped>
  #TeacherGraph{
    width: 100%;
    height: 800px;
    border-radius: 20px;
    margin-top: 20px;
  }
  #nodeShow{
    position: absolute;
    border-radius: 20px;
    margin-top: -700px;
    margin-left: 100px;
    width: 300px;
    height: 400px;
    background-color: rgb(217, 236, 255);
    opacity:0.6;
  }
  .nodeinfoHeader{
      height: 50px;
      line-height: 50px;
      background-color: #409EFF;
      border-radius: 20px 20px 0 0;
  }
</style>