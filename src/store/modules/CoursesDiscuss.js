export default{
    namespaced:true,

    state:{
        DiscussInfo:[]
    },
    mutations:{
        addDiscussInfo(state,payload){
            state.DiscussInfo.push(payload)
        }
    }

}