<template>
  <div id="CurriculumRelationshipGraph"></div>
</template>

<script>
    export default {
        name: "CurriculumRelationshipGraph",
        mounted() {
            let CurriculumRelationshipGraph=this.$echarts.init(document.getElementById('CurriculumRelationshipGraph'))
            let data = {
                nodes: [
                    {
                        name: '广东技术师范大学',
                        category:0
                    },

                    {
                        name:'电子与信息学院',
                        category: 1
                    },
                    {
                        name: '机电学院',
                        category: 2
                    },
                    {
                        name: '计算机科学学院',
                        category: 3
                    },
                    {
                        name: '汽车与交通工程学院',
                        category: 4
                    },
                    {
                        name: '自动化学院',
                        category: 5
                    },
                    {
                        name:'光电工程学院',
                        category: 6
                    },
                    {
                        name:'数学与系统科学学院',
                        category: 7
                    },
                    {
                        name:'教育科学与技术学院',
                        category: 8,
                    },
                    {
                        name:'财经学院',
                        category: 9
                    },
                    {
                        name:'法学与知识产权学院',
                        category: 10
                    },
                    {
                        name:'管理学院',
                        category: 11
                    },
                    {
                        name:'外国语学院',
                        category: 12
                    },
                    {
                        name:'文学与传媒学院',
                        category: 13
                    },
                    {
                        name:'美术学院',
                        category: 14
                    },
                    {
                        name:'音乐学院',
                        category: 15
                    },

                    //专业
                    {
                        name:'通信工程',
                        category: 16
                    },
                    {
                        name:'网络工程',
                        category: 16
                    },

                    {
                        name:'机械电子工程',
                        category: 16
                    },
                    {
                        name:'产品设计',
                        category: 16
                    },

                    {
                        name:'计算机科学与技术',
                        category: 16
                    },
                    {
                        name:'软件工程',
                        category: 16
                    },

                    {
                        name:'交通运输',
                        category: 16
                    },
                    {
                        name:'车辆工程',
                        category: 16
                    },
                    {
                        name:'电气工程及其自动化',
                        category: 16
                    },
                    {
                        name:'建筑电气与智能化',
                        category: 16
                    },

                    {
                        name:'光信息科学与工程',
                        category: 16
                    },
                    {
                        name:'光源与照明',
                        category: 16
                    },
                    {
                        name:'信息与计算科学',
                        category: 16
                    },
                    {
                        name:'数学与应用数学',
                        category: 16
                    },

                    {
                        name:'应用心理学',
                        category: 16
                    },
                    {
                        name:'教育技术学',
                        category: 16
                    },

                    {
                        name:'税收学',
                        category: 16
                    },
                    {
                        name:'会计学',
                        category: 16
                    },

                    {
                        name:'法学',
                        category: 16
                    },
                    {
                        name:'工商管理',
                        category: 16
                    },
                    {
                        name:'人力资源管理',
                        category: 16
                    },
                    {
                        name:'日语',
                        category: 16
                    },

                    {
                        name:'商务英语',
                        category: 16
                    },
                    {
                        name:'网络与新媒体',
                        category: 16
                    },

                    {
                        name:'汉语言文学',
                        category: 16
                    },



                    {
                        name:'工艺美术',
                        category: 16
                    },
                    {
                        name:'环境设计',
                        category: 16
                    },
                    {
                        name:'音乐学',
                        category: 16
                    },


                ],

                links: [
                    {
                        source: '广东技术师范大学',
                        target: '电子与信息学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '机电学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '计算机科学学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '汽车与交通工程学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '自动化学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '光电工程学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '数学与系统科学学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '教育科学与技术学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '财经学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '法学与知识产权学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '管理学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '外国语学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '文学与传媒学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '美术学院',
                        name: ' '
                    },
                    {
                        source: '广东技术师范大学',
                        target: '音乐学院',
                        name: ' '
                    },



                    {
                        source: '电子与信息学院',
                        target: '通信工程',
                        name: '开设'
                    },
                    {
                        source: '电子与信息学院',
                        target: '网络工程',
                        name: '开设'
                    },

                    {
                        source: '机电学院',
                        target: '机械电子工程',
                        name: '开设'
                    },
                    {
                        source: '机电学院',
                        target: '产品设计',
                        name: '开设'
                    },
                    {
                        source: '计算机科学学院',
                        target: '计算机科学与技术',
                        name: '开设'
                    },
                    {
                        source: '计算机科学学院',
                        target: '软件工程',
                        name: '开设'
                    },

                    {
                        source: '自动化学院',
                        target: '电气工程及其自动化',
                        name: '开设'
                    },
                    {
                        source: '自动化学院',
                        target: '建筑电气与智能化',
                        name: '开设'
                    },
                    {
                        source: '汽车与交通工程学院',
                        target: '交通运输',
                        name: '开设'
                    },
                    {
                        source: '汽车与交通工程学院',
                        target: '车辆工程',
                        name: '开设'
                    },


                    {
                        source: '光电工程学院',
                        target: '光信息科学与工程',
                        name: '开设'
                    },
                    {
                        source: '光电工程学院',
                        target: '光源与照明',
                        name: '开设'
                    },

                    {
                        source: '数学与系统科学学院',
                        target: '信息与计算科学',
                        name: '开设'
                    },
                    {
                        source: '数学与系统科学学院',
                        target: '数学与应用数学',
                        name: '开设'
                    },
                    {
                        source: '教育科学与技术学院',
                        target: '应用心理学',
                        name: '开设'
                    },
                    {
                        source: '教育科学与技术学院',
                        target: '教育技术学',
                        name: '开设'
                    },

                    {
                        source: '财经学院',
                        target: '税收学',
                        name: '开设'
                    },
                    {
                        source: '财经学院',
                        target: '会计学',
                        name: '开设'
                    },


                    {
                        source: '法学与知识产权学院',
                        target: '法学',
                        name: '开设'
                    },
                    {
                        source: '管理学院',
                        target: '工商管理',
                        name: '开设'
                    },

                    {
                        source: '管理学院',
                        target: '人力资源管理',
                        name: '开设'
                    },
                    {
                        source: '外国语学院',
                        target: '日语',
                        name: '开设'
                    },


                    {
                        source: '外国语学院',
                        target: '商务英语',
                        name: '开设'
                    },
                    {
                        source: '美术学院',
                        target: '工艺美术',
                        name: '开设'
                    },

                    {
                        source: '美术学院',
                        target: '环境设计',
                        name: '开设'
                    },
                    {
                        source: '音乐学院',
                        target: '音乐学',
                        name: '开设'
                    },
                    {
                        source: '文学与传媒学院',
                        target: '网络与新媒体',
                        name: '开设'
                    },
                    {
                        source: '文学与传媒学院',
                        target: '汉语言文学',
                        name: '开设'
                    },

                ]
            }

            const color1 = '#F56C6C';
            const color2 = '#67C23A';
            const color3 = '#409EFF';
            const color4 = '#9400D3';
            const color5 = '#696969';
            const color6 = '#E6E6FA';
            const color7 = '#7CFC00';
            const color8 = '#ADD8E6';
            const color9 = '#B0C4DE';
            const color10 = '#7B68EE';
            const color11 = '#00FA9A';
            const color12 = '#FFE4E1';
            const color13 = '#6B8E23';
            const color14 = '#F4A460';
            const color15 = '#FF6347';
            const color16 = '#9ACD32';
            const color17 = '#40E0D0';


            data.nodes.forEach(node => {
                if (node.category === 0) {
                    node.symbolSize = 150;
                    node.itemStyle = {
                        color: color1
                    };
                }
                else if (node.category === 16) {
                    node.symbolSize = 50;
                    node.itemStyle = {
                        color: color17
                    };
                }
            });

            data.links.forEach(link => {
                link.label = {
                    align: 'center',
                    fontSize: 15
                };

                if (link.name === ' ') {
                    link.lineStyle = {
                        color: color1
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
                    itemStyle: {
                        color: color1
                    }
                },
                {
                    name: '电子与信息学院',
                    itemStyle: {
                        color: color2
                    }
                },
                {
                    name: '机电学院',
                    itemStyle: {
                        color: color3
                    }
                },
                {
                    name: '计算机科学学院',
                    itemStyle: {
                        color: color4
                    }
                },
                {
                    name: '汽车与交通工程学院',
                    itemStyle: {
                        color: color5
                    }
                },
                {
                    name: '自动化学院',
                    itemStyle: {
                        color: color6
                    }
                },
                {
                    name: '光电工程学院',
                    itemStyle: {
                        color: color7
                    }
                },
                {
                    name: '数学与系统科学学院',
                    itemStyle: {
                        color: color8
                    }
                },
                {
                    name: '教育科学与技术学院',
                    itemStyle: {
                        color: color9
                    }
                },
                {
                    name: '财经学院',
                    itemStyle: {
                        color: color10
                    }
                },
                {
                    name: '法学与知识产权学院',
                    itemStyle: {
                        color: color11
                    }
                },
                {
                    name: '管理学院',
                    itemStyle: {
                        color: color12
                    }
                },
                {
                    name: '外国语学院',
                    itemStyle: {
                        color: color13
                    }
                },
                {
                    name: '文学与传媒学院',
                    itemStyle: {
                        color: color14
                    }
                },
                {
                    name: '美术学院',
                    itemStyle: {
                        color: color15
                    }
                },
                {
                    name: '音乐学院',
                    itemStyle: {
                        color: color16
                    }
                },
                {
                    itemStyle: {
                        color: color17
                    }
                },
            ]
            CurriculumRelationshipGraph.setOption(
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
                        // edgeSymbol: ['', 'arrow'],
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
            // CurriculumRelationshipGraph.on('click', function (params) {
            //     console.log(params);
            //     console.log(params.name);
            // });
        }
    }
</script>

<style scoped>
#CurriculumRelationshipGraph{
  width: 100%;
  height: 800px;
  border-radius: 20px;
  margin-top: 20px;
}
</style>