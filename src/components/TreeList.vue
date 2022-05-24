<template>
  <div>
<!--    <button @click="addNode">Add Node</button>-->
    <vue-tree-list
      @click="onClick"
      @change-name="onChangeName"
      @delete-node="onDel"
      @add-node="onAddNode"
      :model="data"
      default-tree-node-name="new node"
      default-leaf-node-name="new leaf"
      v-bind:default-expanded="false"
    >
      <template v-slot:leafNameDisplay="slotProps">
        <span>
          {{ slotProps.model.name }} <span class="muted"></span>
<!--          {{ slotProps.model.id }}-->
        </span>
      </template>
      <span class="icon" slot="addTreeNodeIcon" ><i class="el-icon-plus"></i></span>
      <span class="icon" slot="addLeafNodeIcon" ></span>
      <span class="icon" slot="editNodeIcon" ><i class="el-icon-edit"></i></span>
      <span class="icon" slot="delNodeIcon" ><i class="el-icon-delete"></i></span>
      <span class="icon" slot="leafNodeIcon" >🍃</span>
      <span class="icon" slot="treeNodeIcon" >🌲</span>
    </vue-tree-list>
<!--    <button @click="getNewTree">Get new tree</button>-->
<!--    <pre>-->
<!--      {{newTree}}-->
<!--    </pre>-->
  </div>
</template>

<script>
    import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
    export default {
        name: "TreeList",
        components: {
            VueTreeList
        },
        data() {
            return {
                newTree: {},
                data: new Tree([

                    {
                        name: '第一章 数理逻辑',
                        id: 1,
                        pid: 0,
                        // dragDisabled: true,
                        addTreeNodeDisabled: true,
                        // addLeafNodeDisabled: true,
                        // editNodeDisabled: true,
                        // delNodeDisabled: true,
                        children: [
                            {
                                name: '命题',
                                id: 8,
                                isLeaf: true,
                                children: [
                                    {
                                        name: '命题真值',
                                        id: 9,
                                        isLeaf: true,
                                        pid: 1
                                    },
                                    {
                                        name: '假命题',
                                        id: 10,
                                        isLeaf: true,
                                        pid: 1
                                    },
                                    {
                                        name: '简单命题',
                                        id: 11,
                                        isLeaf: true,
                                        pid: 1
                                    },
                                    {
                                        name: '复合命题',
                                        id: 12,
                                        isLeaf: true,
                                        pid: 1,
                                        children:[
                                            {
                                                name: '否定命题',
                                                id: 13,
                                                isLeaf: true,
                                                pid: 1
                                            },
                                        ]
                                    },

                                ]
                            }
                        ]
                    },
                    {
                        name: '第二章 命题逻辑等值演算',
                        id: 2,
                        pid: 0,
                    },
                    {
                        name: '第三章 命题逻辑推理理论',
                        id: 3,
                        pid: 0
                    },
                    {
                        name: '第四章 一阶逻辑基本概念',
                        id: 4,
                        pid: 0,
                    },
                    {
                        name: '第五章 一阶逻辑等值演算与推理',
                        id: 5,
                        pid: 0,
                    },
                    {
                        name: '第六章 集合代数',
                        id: 6,
                        pid: 0,

                    },
                    {
                        name: '第七章 二元关系',
                        id: 7,
                        pid: 0,

                    },
                ])
            }
        },
        methods: {
            onDel(node) {
                console.log(node)
                node.remove()
            },

            onChangeName(params) {
                console.log(params)
            },

            onAddNode(params) {
                console.log(params)
            },

            onClick(params) {
                console.log(params)
            },

            addNode() {
                let node = new TreeNode({ name: '知识点', isLeaf: false })
                if (!this.data.children) this.data.children = []
                this.data.addChildren(node)
            },

            getNewTree() {
                let vm = this
                function _dfs(oldNode) {
                    let newNode = {}

                    for (let k in oldNode) {
                        if (k !== 'children' && k !== 'parent') {
                            newNode[k] = oldNode[k]
                        }
                    }

                    if (oldNode.children && oldNode.children.length > 0) {
                        newNode.children = []
                        for (let i = 0, len = oldNode.children.length; i < len; i++) {
                            newNode.children.push(_dfs(oldNode.children[i]))
                        }
                    }
                    return newNode
                }

                vm.newTree = _dfs(vm.data)
            }
        },
    }
</script>

<style scoped>

</style>