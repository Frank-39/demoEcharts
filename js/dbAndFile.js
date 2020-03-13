
//完成数据库的读入，与文件的读写


var fs = require('fs')
var mysql = require('mysql');

//   1.创建连接数据库
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'142857',
    database:'检票数据' 
});

//2.连接数据库 打开冰箱门
connection.connect();
data={}
data2={}
//3.执行数据操作 
data3={}
connection.query('select fticketno from 查询历史时段票捡记录 ',function(error,results,field){
    if(error) throw error;
    console.log(results[0])
    //where funiqueid< 576579499559374149
    for(var i=0;i<results.length;i++){
        
        //var str1 = results[i].fticketno.toJSONString();
        if(results[i].fticketno.length ==18 ){
            var str = results[i].fticketno.substr(0,2)
        }else {
            str = "异常值"
        }
        if (data[str] === undefined){
            data[str] = 1
        } else{
            data[str] += 1
        }
        
        
    
        
    }
    
    console.log(data);
    data2['北京']=data['11'];
    data2['天津']=data['12'];
    data2['河北']=data['13'];
    data2['山西']=data['14'];
    data2['内蒙古']=data['15'];
    data2['辽宁']=data['21'];
    data2['吉林']=data['22']
    data2['黑龙江']=data['23'];
    data2['上海']=data['31'];
    data2['江苏']=data['32'];
    data2['浙江']=data['33'];
    data2['安徽']=data['34'];
    data2['福建']=data['35'];
    data2['江西']=data['36'];
    data2['山东'] =data['37'];
    data2['河南']=data['41'] ;
    data2['湖北']=data['42'];
    data2['湖南']=data['43'] ;
    data2['广东']=data['44'] ;
    data2['广西']=data['45'];
    data2['海南' ]=data['46'];
    data2['重庆' ]=data['50'];
    data2['四川']=data['51'] ;
    data2['贵州']=data['52'] ;
    data2['云南']=data['53'];
    data2['西藏']=data['54'];
    data2['陕西']=data['61'];
    data2['甘肃']=data['62'];
    data2['青海']=data['63'];
    data2['宁夏']=data['64'];
    data2['新疆']=data['65'];

    console.log(data.length);
    var data3 = {people:[
            {name:'北京',value:data2['北京']},
            {name:'天津',value:data2['天津']},
            {name:'河北',value:data2['河北']},
            {name:'山西',value:data2['山西']},
            {name:'内蒙古',value:data2['内蒙古']},
            {name:'辽宁',value:data2['辽宁']},
            {name:'吉林',value:data2['吉林']},
            {name:'黑龙江',value:data2['黑龙江']},
            {name:'上海',value:data2['上海']},
            {name:'江苏',value:data2['江苏']},
            {name:'浙江',value:data2['浙江']},
            {name:'安徽',value:data2['安徽']},
            {name:'福建',value:data2['福建']},
            {name:'江西',value:data2['江西']},
            {name:'山东',value:data2['山东']},
            {name:'河南',value:data2['河南']},
            {name:'湖北',value:data2['湖北']},
            {name:'湖南',value:data2['湖南']},
            {name:'西藏',value:data2['西藏']},
            {name:'广西',value:data2['广西']},
            {name:'广东',value:data2['广东']},
            {name:'海南',value:data2['海南']},
            {name:'重庆',value:data2['重庆']},
            {name:'四川',value:data2['四川']},
            {name:'贵州',value:data2['贵州']},
            {name:'云南',value:data2['云南']},
            {name:'陕西',value:data2['陕西']},
            {name:'甘肃',value:data2['甘肃']},
            {name:'青海',value:data2['青海']},
            {name:'宁夏',value:data2['宁夏']},
            {name:'新疆',value:data2['新疆']},
        ]}
    fs.writeFile('../data/people.json',JSON.stringify(data3), function (error) {
        // console.log('文件写入成功')
        // console.log(error)
        if (error) {
            console.log('写入失败')
        } else {
            console.log('写入成功了')
        }
    })

});




// connection.query('insert into test values(NULL,"admin","123456")',function(error,results,field){
//     if(error) throw error;
//     console.log('The solution is: ',results);
// });
//4.关闭连接 关闭冰箱门
connection.end();
