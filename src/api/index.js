//请求方法

import base from './base';
import axios from "axios";

const api={
    //登录
    getLogin(params){
        return axios.get(base.login,{params})
    },

    //注册
    register(params){
        return axios.get(base.register,{params})
    },

    //创建的课程列表
    getCourseList(params){
        return axios.get(base.CourseList,{params})
    },

    //课程资料
    getCourseMaterials(){
        return axios.get(base.CourseMaterials)
    },

    //

    postTest(){
        return axios.post("http://175.178.216.200:8888/User/login", "username=admin&password=123456")
    },


    getBanner(){
        return axios.get(base.bannerUrl)
    },

    getSchool(){
        return axios.get(base.school)
    },


    getCoursePlatform(){
        return axios.get(base.CoursePlatform)
    },
    // getCourseCatalog(courseId){
    //
    // }
    getCourseShow(params){
        return axios.post(base.CourseShow,{params})
    },

    getKnowledgeGraph(){
      return axios.get(base.KnowledgeGraph)
    },
    getNodeData(params){
        return axios.get(base.NodeData,{params})
    }
}

export default api;



