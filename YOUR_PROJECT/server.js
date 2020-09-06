const express = require('express');
const app = express();
const port = 10090
//////////////////req.body,post 啟用
var bodyParser=require('body-parser');
var unlencodedParser=bodyParser.urlencoded({extend:false});
app.use(unlencodedParser);
//////////////////啟用server並導入public的資料夾為首頁
app.listen(port,function(){
  console.log('Server has been activate on port 10100');
});
app.use(express.static(__dirname+'/public'));
/******讀json檔***********/
const fs=require('fs');//fs特別拿來寫檔
/*************************/



//////////////////server與使用者互動：使用GET
app.get('/get_data',function(req,res,next){
  res.send(`<h1>Hello,${req.query.fname} ${req.query.lname}</h1>`)
})

app.post('/post_data',function(req,res,next){
  res.send(`<h1>Hello,${req.body.fname} ${req.body.lname}</h1>`)
})
/////////////////server與使用者互動：使用AJAX
/*****用戶登記***************/
app.post("/ajax_apply", function(req, res,next) {
  //if(req.body.id.length!=10)
   // res.send(`Student ID is not right`);
  //else{
    fs.readFile('./public/name.json', (err, data) => {
      console.log(req.body.name,' ',req.body.id);
      var json_data = JSON.parse(data);
      var flag = 0;
      var ID = req.body.id
      if(ID.length!=9) res.send(`FUCK`);
      else{
        for( var i =  0 ; i < json_data.length ; i++){
          if( json_data[i].id == req.body.id){
            res.send(`Hello, Student ID : ${json_data[i].id}  has been used`);
            flag = 1 ;
          }
          else if( json_data[i].name == req.body.name){
            res.send(`Hello, you had apply before`);
            flag = 1 ;
          }
        }
        if( flag == 0 ){
          json_data.push(req.body);
          fs.writeFile('./public/name.json', JSON.stringify(json_data), err => {
            if (err) {
              console.error(err);
              return;
            }
          })
          res.send(`Hello, Name : ${req.body.name} Student ID : ${req.body.id}`);
        }
      }
    })
  //}
});
/***************************/
/*****用戶查詢***************/
app.post("/ajax_search", function(req, res, next) {
  var flag = 0 ;
  fs.readFile('./public/name.json', (err, data) => {
    var json_data = JSON.parse(data);
    for( var i =  0 ; i < json_data.length ; i++){
      console.log(`${json_data[i].id},${json_data[i].name} `)
      if( json_data[i].id == ( req.body.id1 ) ){
        var one = json_data[i].name
        flag ++ ;
      }
      if( json_data[i].id == (  req.body.id2) ){
        var two = json_data[i].name
        flag ++ ;
      }
    }
    if(one!=undefined&&two!=undefined){
      res.send(`Hello ${one} ${two}, welcome back.`);
    }
    else if(one!=undefined&&two==undefined){
      res.send(`Hello ${one}, welcome back.`);
    }
    else if(one==undefined&&two!=undefined){
      res.send(`Hello ${two}, welcome back.`);
    }
    if( flag == 0 ){
      res.send(`You haven't apply yet.`);
    }
  })
})
/***************************/