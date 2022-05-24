require("dotenv").config();
const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
const jwt = require('jsonwebtoken')
const secret=require('./secret')
const sqlFn=require('./mysql')
const multer=require('multer')
const fs=require('fs')
//文件上传
var storage =multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,"./upload/")},
    filename:function (req,file,cb) {
        cb(null,Date.now()+"-"+file.originalname)
    }
})
var createFolder=function (folder) {
        try{
            fs.accessSync(folder);
        }catch (e) {
            fs.mkdirSync(folder)
        }
}
var uploadFolder='./upload/'
createFolder(uploadFolder);
var upload=multer({storage:storage})
app.post('/upload',upload.single('file'),function (req,res,next) {
var file=req.file;
res.json({
    res_code:'0',
    name:file.originalname,
    url:file.path
})
})

//登录
app.get('/login',(req,res)=>{
    let user=req.query.user;
    let pwd = req.query.pwd;
    //登录验证
    const token =jwt.sign({
        user,id:123
    }, 'secret.secretKey', { expiresIn: '1h' });
    res.send({
        info:'success',
        status:200,
        token:token,
    })
})

//创建课程的课程列表
app.get('/courselist',(req,res)=>{
    res.send({
        info:'success',
        state:200,
        data:[
            {courseName:'离散数学',teacher:'张三',}
        ]
    })
})

//创建的课程的资料
app.get('/CourseMaterials',(req,res)=>{

    // const page=req.query.page||1;
    // const sqlLen="select * from project where id";
    // sqlFn(sqlLen,null,data=>{
    //     let len =data.length;
    //     const sql="select * from project order by id desc limit 8 offset "+(page-1)*8;
    //     sqlFn(sql,null,result=>{
    //         if(result.length>0){
    //             res.send({
    //                 status:200,
    //                 data:result,
    //                 pageSize:8,
    //                 total:len}
    //             )
    //         }
    //         else {
    //             res.send({
    //                 status:500,
    //                 msg:"暂无数据"
    //             })
    //         }
    //     })
    // })
    res.send({
        info:'success',
        state:200,
        data:[
            {id:1,fileName:'第一章',fileSize:'2M'},
            {id:2,fileName:'第二章',fileSize:'1M'},
            // {id:6,fileName:'第六章',fileSize:'1M'},
            // {id:7,fileName:'第七章',fileSize:'1M'},
            // {id:8,fileName:'第八章',fileSize:'1M'},
            ],
        total:8,
        pageSize:5
    })
})

app.get('/banner',(req,res)=>{
    res.send({
        info:'success',
        state:200,
        data:[
            {id:1,imageUrl:'http://localhost:8888/1650300791915-5faa41dedd7da.jpg'},
            {id:2,imageUrl:'http://localhost:8888/1650300994945-5fb4b5eab6004.jpg'},
            {id:3,imageUrl:'http://localhost:8888/1650300994949-5fb4b5e9d61bf.jpg'},
            {id:4,imageUrl:'http://localhost:8888/1650300994955-5fb4b5ec1e438.jpg'},
            ]
    })
})


app.get('/CourseCatalog',(req,res)=>{
    res.send({
        info:'success',
        state:200,
        data:[
            {id:1,imageUrl:'http://localhost:8888/1650300791915-5faa41dedd7da.jpg'},
            {id:2,imageUrl:'http://localhost:8888/1650300994945-5fb4b5eab6004.jpg'},
            {id:3,imageUrl:'http://localhost:8888/1650300994949-5fb4b5e9d61bf.jpg'},
            {id:4,imageUrl:'http://localhost:8888/1650300994955-5fb4b5ec1e438.jpg'},
        ]
    })
})

app.get('/school',(req,res)=>{
    res.send({
        info:'success',
        state:200,
        data:[
            {id:1,imageUrl:'http://localhost:8888/1650786551336-school.jpg'},
            {id:2,imageUrl:'http://localhost:8888/1650786551336-school.jpg'},
            {id:3,imageUrl:'http://localhost:8888/1650786551336-school.jpg'},
            {id:4,imageUrl:'http://localhost:8888/1650786551336-school.jpg'},
            {id:5,imageUrl:'http://localhost:8888/1650786551336-school.jpg'},
            {id:6,imageUrl:'http://localhost:8888/1650786551336-school.jpg'},
            {id:7,imageUrl:'http://localhost:8888/1650786551336-school.jpg'},
            {id:8,imageUrl:'http://localhost:8888/1650786551336-school.jpg'},
        ]

    })
})

app.get('/CoursePlatform',(req,res)=>{
    res.send(
        {
            info:'success',
            state:200,
            data:[
                {imageUrl: 'http://localhost:8888/1650799940561-course.jpg'},
               ],
            hotCourse: [
                {id:1,courseName:'数据库技术',teacher:'陈西',school:'广东技术师范大学',url:'http://localhost:8888/1650300791915-5faa41dedd7da.jpg'},
                {id:2,courseName:'计算机应用基础',teacher:'黄华',school:'广东技术师范大学',url:'http://localhost:8888/1650300994945-5fb4b5eab6004.jpg'},
                {id:3,courseName:'网站设计与开发',teacher:'雷军',school:'广东技术师范大学',url:'http://localhost:8888/1650300994949-5fb4b5e9d61bf.jpg'},
            ]
        }
    )
})


app.post('/CourseShow',(req,res)=>{
    res.send(
        {
            info:'success',
            state:200,
            data:[
                {
                    dataUrl:'http://localhost:8888/1650872576042-本科师范生教育教学能力考核学生需知.docx'
                }
                ,
                {
                    dataUrl:'1650872576051-第四章一阶逻辑.ppt'
                }
            ]
        }
    )
})
app.get('/nodeData',(req,res)=>{
    let nodeData=req.query
    res.send({
        info:'success',
        state:200,
        data:nodeData
    })

})
// app.get('/KnowledgeGraph',(req,res)=>{
//     res.send({
//
//     })
// })
//静态文件托管---- 访问：http:localhost:8888/图片.jpg
app.use(express.static('upload'))

//监听接口
app.listen(8888,()=>{
    console.log(8888);
})
module.export =app;

