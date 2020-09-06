/*
exports.list = function(req, res) {
  console.log(req.data.username);
  console.log(req.data.email);
}
*/
//console.log(user.id);
//console.log(user.username);
var route = 1;
console.log('choose ready')
$(document).ready(function() {  
    $("#top_line").animate(function(){

    })
    $("#setting_icon").click(function(){
        $('body').load('./index_setting.html');
    })
    $("#ok_buttom_setting").click(function(){
      getmission(route);  
      $('body').load('./index_play.html');
    })
})

function getmission(route){
  console.log('route = ' + route);
  $.ajax({
    url:'./choosepage',
    type:'POST',
    data:{
      route : route,
    },
    success: function(data) {
      console.log(data[0].id);
      console.log(data[0].username);
      console.log('anping_mission1 ' + data[0].anping_mission1);
    },
    error: function(){
      alert("fail");
    }
  })
}
