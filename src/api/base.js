// 接口路径配置

const base = {
    login: 'http://localhost:8888/login',  //用户登录  http://175.178.216.200:8888/User/login?username=admin&password=123456
    register:'http://localhost:8888/register',  //用户注册
    school:'http://localhost:8888/school',
    host:'http://localhost:8888', //基础域名

    bannerUrl: 'http://localhost:8888/banner',               //轮播图
    CreateCourse: '',            //用户创建的课程
    LearningCourse: '',          //用户学习的课程
    CourseList: 'http://localhost:8888/courselist', //课程列表
    CourseMaterials: 'http://localhost:8888/CourseMaterials',
    uploadfile:'http://localhost:8888/upload',
    // test:'http://175.178.216.200:8888/User/login'
    joinCourse:'http://localhost:8888/upload',
    CourseCatalog:'http://localhost:8888/CourseCatalog',
    CoursePlatform:'http://localhost:8888/CoursePlatform',
    CourseShow:'http://localhost:8888/CourseShow',
    KnowledgeGraph:'http://localhost:8888/KnowledgeGraph',
    NodeData:'http://localhost:8888/nodeData',
}
export default base;