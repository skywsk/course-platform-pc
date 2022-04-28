import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)


import MyInformation from "@/pages/PersonalCenter/PersonalSpace/MyInformation";
import test2 from "@/components/test2";


import Home from '../pages/Home'
import Login from '../pages/Login'
import Search from '../pages/Search'
import Register from '../pages/Register'
import School from '../pages/School'
import CoursePlatform from '../pages/CoursePlatform'
import KnowledgeGraph from '../pages/KnowledgeGraph'
import Test from '@/components/test'

import CreateCourse from '../pages/PersonalCenter/Courses/CreateCourse'
import LearningCourse from '../pages/PersonalCenter/Courses/LearningCourses'
import ManagementCourse from '../pages/PersonalCenter/Courses/ManagementCourses/index'
import CourseShow from "@/pages/PersonalCenter/Courses/ManagementCourses/ManagementIndex/CourseShow";
import WorkEditor from "@/pages/PersonalCenter/Courses/ManagementCourses/HomeWork/WorkEditor";
import EditChapter from "@/pages/PersonalCenter/Courses/ManagementCourses/ManagementIndex/EditChapter";


import LearningCoursesIndex from "@/pages/PersonalCenter/Courses/LearningCourses/LearningCoursesIndex";
import LearningCourseStatistics from "@/pages/PersonalCenter/Courses/LearningCourses/LearningCourseStatistics";
import CoursesKnowledgeMap from "@/pages/PersonalCenter/Courses/LearningCourses/CoursesKnowledgeMap";
import LearningCoursesData from "@/pages/PersonalCenter/Courses/LearningCourses/LearningCoursesData";
import LearningCoursesExamination from "@/pages/PersonalCenter/Courses/LearningCourses/LearningCoursesExamination";
import LearningCoursesHomeWork from "@/pages/PersonalCenter/Courses/LearningCourses/LearningCoursesHomeWork/index";
import LearningCoursesNotice from "@/pages/PersonalCenter/Courses/LearningCourses/LearningCoursesNotice";
import LearningCourseDiscuss from "@/pages/PersonalCenter/Courses/LearningCourses/LearningCourseDiscuss";
const routes = [
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            Tipshow: true,
            Tailshow: true,
            islogin: false,
        }
    },
    {
        path: '/login',
        component: Login,

    },
    {
        path: "/search/:keyword",
        component: Search,
        name: 'search',
        meta: {
            Tipshow: true,
            Tailshow: true,
            islogin: false,
        },
    },
    {
        path: '/register',
        component: Register,
        meta: {
            islogin: false,
        }

    },
    {
        path: '/school',
        component: School,
        meta: {
            Tipshow: true,
            Tailshow: true,
        }
    },
    {
        path: '/coursePlatform',
        component: CoursePlatform,
        meta: {
            Tipshow: true,
            Tailshow: true,
        }
    },
    {
        path: '/knowledgeGraph',
        component: KnowledgeGraph,
        meta: {
            Tipshow: true,
            Tailshow: true,
        }
    },
    {
        path: '/test',
        component: Test,
        meta: {
            islogin: true
        }
    },
    {
        path: '/courseShow',
        component: CourseShow,
        name: 'courseShow'
    },
    {
      path: '/editChapter',
      component: EditChapter  ,
      name: 'editChapter'
    },
    {
        path: '/createCourse',
        component: CreateCourse,
        name: 'createCourse',
    },
    {
        path: '/learningCourse',
        component: LearningCourse,
        name: 'learningCourse',
    },
    {
        path: '/managementCourse',
        component: ManagementCourse,
        name: 'managementCourse',
    },
    {
        path: '/workEditor',
        component: WorkEditor
    },
    // {
    //   path: '/managementIndex',
    //   component: ManagementIndex,
    //   name: 'managementIndex'
    // },
    {
        path: '/MyInformation',
        component: MyInformation,

    },
    {
        path:'/test2',
        component: test2
    },

    {
        path: '/learningCoursesIndex',
        component: LearningCoursesIndex
    },
    {
        path: '/learningCourseStatistics',
        component: LearningCourseStatistics
    },
    {
        path: '/coursesKnowledgeMap',
        component: CoursesKnowledgeMap
    },
    {
        path: '/learningCoursesData',
        component: LearningCoursesData
    },
    {
        path: '/learningCoursesExamination',
        component: LearningCoursesExamination
    },
    {
        path: '/learningCoursesHomeWork',
        component: LearningCoursesHomeWork
    },
    {
        path: '/learningCoursesNotice',
        component: LearningCoursesNotice
    },
    {
        path:'/learningCourseDiscuss',
        component: LearningCourseDiscuss
    }
]

const router = new VueRouter({
    routes
})

export default router