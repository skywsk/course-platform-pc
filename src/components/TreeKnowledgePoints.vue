<template>
  <div>

<!--  <el-tree-->
<!--    :props="props"-->
<!--    :load="loadNode"-->
<!--    lazy-->
<!--    @check="nodeClick"-->
<!--    show-checkbox>-->
<!--  </el-tree>-->
    <el-tree :data="data" :props="defaultProps"  @check="nodeClick" show-checkbox></el-tree>
  </div>
</template>

<script>

    export default {
        name: "TreeKnowledgePoints",
        data() {
            return {
                // props: {
                //     label: 'name',
                //     children: 'zones',
                //     isLeaf: 'leaf',
                // },
                nodeLabel: [],
                data: [
                    {
                        id: 1,
                        label: '第一章 数理逻辑',
                        children: [{
                            id: 4,
                            label: '1.1 命题',
                            children: [{
                                id: 9,
                                label: '1.2 命题真值'
                            }, {
                                id: 10,
                                label: '1.3 真命题'
                            }]
                        }]
                    },
                    {
                        id: 2,
                        label: '第二章 命题逻辑等值演算',
                        children: [{
                            id: 5,
                            label: '2.1 基本等值式'
                        }, {
                            id: 6,
                            label: '2.2 置换规则'
                        }]
                    },
                    {
                        id: 3,
                        label: '第三章 命题逻辑推理理论',
                        children: [{
                            id: 7,
                            label: '3.1 真值表法'
                        }, {
                            id: 8,
                            label: '3.2 等值演算法'
                        }]
                    },
                    {
                        id:11,
                        label: '第四章 一阶逻辑基本概念'
                    },
                    {
                        id:12,
                        label: '第五章 一阶逻辑等值演算与推理'
                    },
                    {
                        id:13,
                        label: '第六章 集合代数'
                    },
                    {
                        id:14,
                        label: '第七章 二元关系'
                    },
                ],
                // defaultProps: {
                //     children: 'children',
                //     label: 'label'
                // }
            };
        },
        methods: {
            // loadNode(node, resolve) {
            //     if (node.level === 0) {
            //         return resolve([{ name: '离散数学' }]);
            //     }
            //     if (node.level > 1) return resolve([]);
            //
            //     setTimeout(() => {
            //         const data = [
            //             {name: 'leaf', leaf: true},
            //             {name: 'leaf2',leaf: true},
            //             {name: 'zone'},
            //             {name:'test'}
            //             ];
            //
            //         resolve(data);
            //     }, 500);
            // },
            // nodeClick(treeNodeId,checkedNodes){
            //     this.nodeLabel=checkedNodes.checkedNodes
            //     this.$emit("sendTreeNodeData", this.nodeLabel)
            // },
            nodeClick(treeNodeId,checkedNodes){
                console.log(treeNodeId,checkedNodes)
                console.log(checkedNodes.checkedNodes)
                this.nodeLabel=checkedNodes.checkedNodes
                this.$emit("sendTreeNodeData",this.nodeLabel)
            },
            // handleCheckChange(data) {
            //     console.log(data);
            //     console.log(data.label);
            // },
        }
    }
</script>

<style scoped>

</style>