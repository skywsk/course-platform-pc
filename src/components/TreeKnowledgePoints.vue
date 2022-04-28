<template>
  <div>

  <el-tree
    :props="props"
    :load="loadNode"
    lazy
    @check="nodeClick"
    show-checkbox>
  </el-tree>
<!--    <div>{{nodeLabel}}</div>-->
  </div>
</template>

<script>

    export default {
        name: "TreeKnowledgePoints",
        data() {
            return {
                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf',
                },
                nodeLabel: []
            };
        },
        methods: {
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region' }]);
                }
                if (node.level > 1) return resolve([]);

                setTimeout(() => {
                    const data = [
                        {name: 'leaf', leaf: true},
                        {name: 'leaf2',leaf: true},
                        {name: 'zone'},
                        {name:'test'}
                        ];

                    resolve(data);
                }, 500);
            },
            nodeClick(treeNodeId,checkedNodes){
                this.nodeLabel=checkedNodes.checkedNodes
                this.$emit("sendTreeNodeData", this.nodeLabel)

            },

        }
    }
</script>

<style scoped>

</style>