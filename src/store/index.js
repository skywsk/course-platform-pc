import Vue from 'vue'
import Vuex from 'vuex'
import LoginModule from "./modules/LoginModule";
import CourseIndex from "@/store/modules/CourseIndex";
import CoursesDiscuss from "@/store/modules/CoursesDiscuss";
import HomeWork from "@/store/modules/HomeWork";
Vue.use(Vuex)
export default new Vuex.Store({
    state:{

    },
    mutations:{

    },
    actions:{

    },
    modules:{
        LoginModule,
        CourseIndex,
        CoursesDiscuss,
        HomeWork
    }
})