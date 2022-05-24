<template>
  <div id="TeacherGraph" >

  </div>
</template>

<script>
    export default {
        name: "TeacherGraph",
        mounted() {
            let teacherGraph=this.$echarts.init(document.getElementById('TeacherGraph'))
            let data = {
                nodes: [
                    {
                    name: '离散数学',
                    category: 1
                }, {
                    name: '计算机组成',
                    category: 1
                }, {
                    name: 'C语言',
                    category: 1
                }, {
                    name: 'JavaWeb开发',
                    category: 1
                }, {
                    name: 'Java开发',
                    category: 1
                }, {
                    name: '计算机网络',
                    category: 1
                }, {
                    name: 'python',
                    category: 1
                }, {
                    name: '数据结构',
                    category: 1
                }, {
                    name: '数据库设计',
                    category: 1
                },{
                        name: '软件工程',
                        category: 1
                    },
                    {
                        name: 'Office高级应用',
                        category: 1
                    },
                    {
                    name:'黄静',
                        category: 0
                    },
                    {
                        name: '李燃',
                        category: 0
                    },
                    {
                        name: '王伟',
                        category: 0
                    },
                    {
                        name: '周杰伦',
                        category: 0
                    },
                    {
                        name: '陈奕迅',
                        category: 0
                    },
                    {
                        name:'张学友',
                        category: 0
                    },
                    {
                        name:'周慧敏',
                        category: 0
                    },
                    {
                        name:'孙燕姿',
                        category: 0,
                    },
                    {
                        name:'王菲',
                        category: 0
                    },

                ],

                links: [
                    {
                    source: '黄静',
                    target: '数据库设计',
                    name: '开设'
                },
                    {
                    source: '黄静',
                    target: '数据结构',
                    name: '开设'
                },
                    {
                    source: '李燃',
                    target: '计算机网络',
                    name: '开设'
                },
                    {
                    source: '王伟',
                    target: '离散数学',
                    name: '开设'
                },
                    {
                    source: '周杰伦',
                    target: '计算机组成',
                    name: '开设'
                },
                    {
                    source: '陈奕迅',
                    target: '计算机组成',
                    name: '开设'
                },
                    {
                        source: '周杰伦',
                        target: 'C语言',
                        name: '开设'
                    },
                    {
                        source: '张学友',
                        target: 'Java开发',
                        name: '开设'
                    },
                    {
                        source: '张学友',
                        target: 'JavaWeb开发',
                        name: '开设'
                    },
                    {
                        source: '周慧敏',
                        target: 'python',
                        name: '开设'
                    },
                    {
                        source: '孙燕姿',
                        target: '软件工程',
                        name: '开设'
                    },
                    {
                        source: '王菲',
                        target: 'Office高级应用',
                        name: '开设'
                    },
                    {
                        source: '',
                        target: 'Office高级应用',
                        name: '开设'
                    },

                    {
                        source: '黄静',
                        target: '计算机网络',
                        name: '管理'
                    },
                    {
                        source: '陈奕迅',
                        target: '计算机网络',
                        name: '管理'
                    },

                    {
                        source: 'C语言',
                        target: '数据结构',
                        name: '扩展'
                    },
                    {
                        source: 'Java开发',
                        target: 'JavaWeb开发',
                        name: '扩展'
                    },

                ]
            }

            const color1 = '#006acc';
            const color2 = '#ff7d18';
            const color3 = '#10a050';

            data.nodes.forEach(node => {
                if (node.category === 0) {
                    node.symbolSize = 100;
                    node.itemStyle = {
                        color: color1
                    };
                } else if (node.category === 1) {
                    node.itemStyle = {
                        color: color2
                    };
                }
            });

            data.links.forEach(link => {
                link.label = {
                    align: 'center',
                    fontSize: 15
                };

                if (link.name === '开设') {
                    link.lineStyle = {
                        color: color2
                    }
                } else if (link.name === '管理') {
                    link.lineStyle = {
                        color: color1
                    }
                } else if (link.name === '扩展') {
                    link.lineStyle = {
                        color: color3
                    }
                }
            });

            let categories = [
                {
                name: '教师',
                itemStyle: {
                    color: color1
                }
            },
                {
                    name: '课程',
                    itemStyle: {
                        color: color2
                    }
                },

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
            teacherGraph.on('click', function (params) {
                console.log(params);
                console.log(params.name);
            });
        }
    }
</script>

<style scoped>
#TeacherGraph{
  width: 100%;
  height: 600px;
  border-radius: 20px;
  margin-top: 20px;
}
</style>