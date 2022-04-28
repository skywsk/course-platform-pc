
//安装MySQL，连接数据库，创建连接
const mysql=require('mysql')


//创建数据库连接
const client=mysql.createConnection({
    host:'localhost',  //数据域名，地址
    user:'root',        //数据库账号密码
    password:'123456',
    database:'course',         //数据库名称
    // port:'3306'         数据库端口号默认3306
})



//封装数据库操作语句 sql语句 参数数组arr callback成功函数结果
function sqlFn(sql,arr,callback) {
    client.query(sql,arr,function (error,result) {
        if(error){
            console.log('数据库语句错误');
            return;
        }
        callback(result)
    })

}

//导出
module.export=sqlFn