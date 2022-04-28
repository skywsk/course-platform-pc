export default {
    namespaced:true,
    state:{
        chapter: [
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
        ]
    },
    mutations:{}
}