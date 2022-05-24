export default {
    namespaced:true,
    state:{
        problem:{
               title:'',
               time:''
        }
    },
    mutations:{
        setProblem(state,payload){
            state.problem=payload
        }
    },
    actions:{}
}