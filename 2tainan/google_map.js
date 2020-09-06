//play.css
//index_play.html
//google_map.js

/*
route
1:安平
2:赤崁
3:
*/

var anping_mission = [];
var chihkan_mission = [];
var confucious_mission = [];
var chihkan_point = [];
var kong_mission = [];
var mission_done;
var mission_option;
var now_lat,now_lng;
var user_data;
var i;
$(document).ready(function() {  
  //var x = document.getElementById("demo"); 
  var map;
  var treehouse;
  var wanghouse;
  var shop;
  var temple;
  var castle;
  route = (road % 3);
  for(i=1;i<=6;i++){
    anping_mission[i] = 0;
    chihkan_mission[i] = 0;
    confucious_mission[i] = 0;
  }
  console.log("in google js road = " + road);
  getmission(route); 
  
  
  
  //console.log("user id =  " + user_data[0].id);
  //console.log("route in google js " + route);
  
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
      user_data = data;
      //讓google.js也可以用user_data;
      //global.user_data = user_data;
      console.log('user id = ' + user_data[0].id);
      console.log('user name = ' + user_data[0].username);
      console.log('anping_mission1 = ' + user_data[0].anping_mission1);
      choose_route();
    },
    error: function(){
      alert("fail");
    }
  })
}

function choose_route(){
  anping_mission[1] = user_data[0].anping_mission1;
  anping_mission[2] = user_data[0].anping_mission2;
  anping_mission[3] = user_data[0].anping_mission3;
  anping_mission[4] = user_data[0].anping_mission4;
  anping_mission[5] = user_data[0].anping_mission5;
  anping_mission[6] = user_data[0].anping_mission6;
  chihkan_mission[1] = user_data[0].chihkan_mission1;
  chihkan_mission[2] = user_data[0].chihkan_mission2;
  chihkan_mission[3] = user_data[0].chihkan_mission3;
  chihkan_mission[4] = user_data[0].chihkan_mission4;
  chihkan_mission[5] = user_data[0].chihkan_mission5;
  chihkan_mission[6] = user_data[0].chihkan_mission6;
  switch(route)
  {
    case 1:
      console.log("set_anping");
      for(i=1;i<=6;i++){
        console.log("anping " + i + "= " + anping_mission[i]);
      }
      set_anping_googlemap();
      break;
    case 2:  
      set_chihkan_googlemap();  
      break;
    case 3:
    /*  
      kong_mission[1] = user_data[0].kong_mission1;
      kong_mission[2] = user_data[0].kong_mission2;
      kong_mission[3] = user_data[0].kong_mission3;
      kong_mission[4] = user_data[0].kong_mission4;
      kong_mission[5] = user_data[0].kong_mission5;
      kong_mission[6] = user_data[0].kong_mission6;
      set_kong_googlemap();
    */
      break;
    default:
      alert("route wrong");
  }
}
/*
function initialize() {
  getLocation();
}

function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
  else {
    console.log("Geolocation is not supported")
  }
} 

function showPosition(position) {
  console.log("Lat: " + position.coords.latitude)
  console.log("Long: " + position.coords.longitude)
  now_lat = position.coords.latitude;
  now_lng = position.coords.longitude;  
  console.log("static lat= " + now_lat);
  console.log("static lng= " + now_lng);
  var mapOptions = {
    center: { lat: 23.002646, lng: 120.160082},
    zoom: 16,
    styles: [
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "poi.business",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "transit",
        "stylers": [{"visibility": "off"}]
      }
    ]
  };
}
*/

function set_anping_googlemap()
{
  map = new google.maps.Map(
    document.getElementById('google_map'),mapOptions
  );
  
   //MARKER
  //德記洋行 安平樹屋
  treehouse = new google.maps.Marker({ 
    
    position:{lat:23.003360, lng:120.159794},
    map: map,
    title: '德記洋行',
    animation: google.maps.Animation.DROP
  });
  treehouse.addListener('click',function(){
    /*
    $("mission").css("display","block");
    $("story").css("display","none");
    $("#story_background").css("display","block");
    mission_page=1;
    story_page=0;
    document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
    document.getElementById("story_buttom").src='pic/story_buttom.png';
    document.getElementById("friend_buttom").src='pic/friend_buttom.png';
    $(".mission_anping_page1").css("display","none");
    $(".mission_anping_page2").css("display","inline-block");
    story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
    picture_anping.src='pic/mission/anping1.JPG';
    mission_page=2;
    mission_select=1;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    */
  });

  //王雞屎洋樓 
  wanghouse = new google.maps.Marker({ 
    position:{lat:23.000985, lng:120.159703},
    map: map,
    title: '王雞屎洋樓',
    animation: google.maps.Animation.DROP 
  });
  wanghouse.addListener('click',function(){
    /*
    //press mission button
    $("mission").css("display","block");
    $("story").css("display","none");
    $("#story_background").css("display","block");
    mission_page=1;
    story_page=0;
    document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
    document.getElementById("story_buttom").src='pic/story_buttom.png';
    document.getElementById("friend_buttom").src='pic/friend_buttom.png';
    //press detail mission button
    $(".mission_anping_page1").css("display","none");
    $(".mission_anping_page2").css("display","inline-block");
    story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
    picture_anping.src='pic/mission/anping2.JPG';
    mission_page=2;
    mission_select=2;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    */
  });
  
  //夕遊出張所
  shop = new google.maps.Marker({ 
    position:{lat:23.002405, lng:120.156332},
    map: map,
    title: '夕遊出張所',
    animation: google.maps.Animation.DROP 
  });
  shop.addListener('click',function(){
    /*
    //press mission button
    $("mission").css("display","block");
    $("story").css("display","none");
    $("#story_background").css("display","block");
    mission_page=1;
    story_page=0;
    document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
    document.getElementById("story_buttom").src='pic/story_buttom.png';
    document.getElementById("friend_buttom").src='pic/friend_buttom.png';
    //press detail mission button
    $(".mission_anping_page1").css("display","none");
    $(".mission_anping_page2").css("display","inline-block");
    story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
    picture_anping.src='pic/mission/anping3.JPG';
    mission_page=2;
    mission_select=3;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    */
  });

  //安平開台天后宮
  temple = new google.maps.Marker({ 
    position:{lat:23.000634, lng:120.160660},
    map: map,
    title: '安平開臺天后宮',
    animation: google.maps.Animation.DROP 
  });
  temple.addListener('click',function(){
    /*
    //press mission button
    $("mission").css("display","block");
    $("story").css("display","none");
    $("#story_background").css("display","block");
    mission_page=1;
    story_page=0;
    document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
    document.getElementById("story_buttom").src='pic/story_buttom.png';
    document.getElementById("friend_buttom").src='pic/friend_buttom.png';
    //press detail mission button
    $(".mission_anping_page1").css("display","none");
    $(".mission_anping_page2").css("display","inline-block");
    story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
    picture_anping.src='pic/mission/anping4.JPG';
    mission_page=2;
    mission_select=4;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    */
  });

  //安平古堡
  castle = new google.maps.Marker({ 
    position:{lat:23.001523, lng:120.160624},
    map: map,
    title: '安平古堡',
    animation: google.maps.Animation.DROP 
  });
  castle.addListener('click',function(){
    /*
    //press mission button
    $("mission").css("display","block");
    $("story").css("display","none");
    $("#story_background").css("display","block");
    mission_page=1;
    story_page=0;
    document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
    document.getElementById("story_buttom").src='pic/story_buttom.png';
    document.getElementById("friend_buttom").src='pic/friend_buttom.png';
    //press detail mission button
    $(".mission_anping_page1").css("display","none");
    $(".mission_anping_page2").css("display","inline-block");
    story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
    picture_anping.src='pic/mission/anping5.JPG';
    mission_page=2;
    mission_select=5;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    */
  });

  //判斷mission有沒有做完
  for(i=1;i<=5;i++){
    if(anping_mission[i] > 0){
      anping_toggle(i);
    }
    if(chihkan_mission[i] > 0){
      change_picture(i+5);
    }
  }
}

function anping_toggle(num)
{
  console.log('num=   '+ num);
  if(num == 1){
    treehouse.setMap(null);
    treehouse = new google.maps.Marker({ 
      position:{lat:23.003360, lng:120.159794},
      map: map,
      title: '德記洋行',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_anping_picture1_buttom").src="./pic/tool/Anping_Tree_House_tool_font.png";
  }
  else if(num ==2){
    wanghouse.setMap(null);
    wanghouse = new google.maps.Marker({ 
      position:{lat:23.000985, lng:120.159703},
      map: map,
      title: '王雞屎洋樓',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_anping_picture2_buttom").src="./pic/tool/Wang_building_tool_font.png";
  }  
  else if(num ==3){
    shop.setMap(null);
    shop = new google.maps.Marker({ 
      position:{lat:23.002405, lng:120.156332},
      map: map,
      title: '夕遊出張所',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_anping_picture3_buttom").src="./pic/tool/Sio_tool_font.png";
  }  
  else if(num ==4){
    temple.setMap(null);
    temple = new google.maps.Marker({ 
      position:{lat:23.000634, lng:120.160660},
      map: map,
      title: '安平開臺天后宮',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_anping_picture4_buttom").src="./pic/tool/Kaitai_Matsu_Temple_tool_font.png";
  }  
  else if(num ==5){
    castle.setMap(null);
    castle = new google.maps.Marker({ 
      position:{lat:23.001523, lng:120.160624},
      map: map,
      title: '安平古堡',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_anping_picture5_buttom").src="./pic/tool/Anping_Castle_tool_font.png";
  }
}


//set chihkan map
function set_chihkan_googlemap()
{
  var chihkan_Options = {
    center: { lat: 22.996518, lng: 120.201594},
    zoom: 16,
    styles: [
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "poi.business",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "transit",
        "stylers": [{"visibility": "off"}]
      }
    ]
  }
  map = new google.maps.Map(
    document.getElementById('google_map'),chihkan_Options
  );
  
   //MARKER
  //赤崁樓
  chihkan_point[1] = new google.maps.Marker({ 
    position:{lat:22.997485, lng:120.202544},
    map: map,
    title: '赤崁樓',
    animation: google.maps.Animation.DROP
  });
  chihkan_point[1].addListener('click',function(){
    /*
    $("mission").css("display","block");
    $("story").css("display","none");
    $("#story_background").css("display","block");
    mission_page=1;
    story_page=0;
    document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
    document.getElementById("story_buttom").src='pic/story_buttom.png';
    document.getElementById("friend_buttom").src='pic/friend_buttom.png';
    $(".mission_anping_page1").css("display","none");
    $(".mission_anping_page2").css("display","inline-block");
    story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
    picture_anping.src='pic/mission/anping1.JPG';
    mission_page=2;
    mission_select=1;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    */
  });

  //祀典武廟 
  chihkan_point[2] = new google.maps.Marker({ 
    position:{lat:22.996409, lng:120.202156},
    map: map,
    title: '祀典武廟',
    animation: google.maps.Animation.DROP 
  });
  chihkan_point[2].addListener('click',function(){
    /*
    //press mission button
    $("mission").css("display","block");
    $("story").css("display","none");
    $("#story_background").css("display","block");
    mission_page=1;
    story_page=0;
    document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
    document.getElementById("story_buttom").src='pic/story_buttom.png';
    document.getElementById("friend_buttom").src='pic/friend_buttom.png';
    //press detail mission button
    $(".mission_anping_page1").css("display","none");
    $(".mission_anping_page2").css("display","inline-block");
    story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
    picture_anping.src='pic/mission/anping2.JPG';
    mission_page=2;
    mission_select=2;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    */
  });
  
  //大井頭
  chihkan_point[3] = new google.maps.Marker({ 
    position:{lat:22.995377, lng:120.201737},
    map: map,
    title: '大井頭',
    animation: google.maps.Animation.DROP 
  });
  chihkan_point[3].addListener('click',function(){
    /*
    //press mission button
    $("mission").css("display","block");
    $("story").css("display","none");
    $("#story_background").css("display","block");
    mission_page=1;
    story_page=0;
    document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
    document.getElementById("story_buttom").src='pic/story_buttom.png';
    document.getElementById("friend_buttom").src='pic/friend_buttom.png';
    //press detail mission button
    $(".mission_anping_page1").css("display","none");
    $(".mission_anping_page2").css("display","inline-block");
    story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
    picture_anping.src='pic/mission/anping3.JPG';
    mission_page=2;
    mission_select=3;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    */
  });

  //開基武廟
  chihkan_point[4] = new google.maps.Marker({ 
    position:{lat:22.996373, lng:120.200807},
    map: map,
    title: '開基武廟',
    animation: google.maps.Animation.DROP 
  });
  chihkan_point[4].addListener('click',function(){
    /*
    //press mission button
    $("mission").css("display","block");
    $("story").css("display","none");
    $("#story_background").css("display","block");
    mission_page=1;
    story_page=0;
    document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
    document.getElementById("story_buttom").src='pic/story_buttom.png';
    document.getElementById("friend_buttom").src='pic/friend_buttom.png';
    //press detail mission button
    $(".mission_anping_page1").css("display","none");
    $(".mission_anping_page2").css("display","inline-block");
    story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
    picture_anping.src='pic/mission/anping4.JPG';
    mission_page=2;
    mission_select=4;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    */
  });

  //大天后宮
  chihkan_point[5] = new google.maps.Marker({ 
    position:{lat:22.996619, lng:120.201544},
    map: map,
    title: '大天后宮',
    animation: google.maps.Animation.DROP 
  });
  chihkan_point[5].addListener('click',function(){
    /*
    //press mission button
    $("mission").css("display","block");
    $("story").css("display","none");
    $("#story_background").css("display","block");
    mission_page=1;
    story_page=0;
    document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
    document.getElementById("story_buttom").src='pic/story_buttom.png';
    document.getElementById("friend_buttom").src='pic/friend_buttom.png';
    //press detail mission button
    $(".mission_anping_page1").css("display","none");
    $(".mission_anping_page2").css("display","inline-block");
    story_back_buttom.style.backgroundImage='url(./pic/back_buttom.png)';
    picture_anping.src='pic/mission/anping5.JPG';
    mission_page=2;
    mission_select=5;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    */
  });

  //判斷mission有沒有做完
  for(i=1;i<=5;i++){
    if(chihkan_mission[i] > 0){
      chihkan_toggle(i+5);
    }
    if(anping_mission[i] > 0) {
      change_picture(i);
    }
  }
}

function chihkan_toggle(num)
{
  num = num - 5;
  console.log('chihkan num=   ' + num);
  //舊標籤移除
  chihkan_point[num].setMap(null);
  //換新標籤
  if(num == 1){
    chihkan_point[1] = new google.maps.Marker({ 
      position:{lat:22.997485, lng:120.202544},
      map: map,
      title: '赤崁樓',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_chihkan_picture1_buttom").src="./pic/chihkan/Chihkan_Tower_tool.png";
  }
  else if(num ==2){
    chihkan_point[2] = new google.maps.Marker({ 
      position:{lat:22.996409, lng:120.202156},
      map: map,
      title: '祀典武廟',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_chihkan_picture2_buttom").src="./pic/chihkan/Wu_Temple_tool.png";
  }  
  else if(num ==3){
    chihkan_point[3] = new google.maps.Marker({ 
      position:{lat:22.995377, lng:120.201737},
      map: map,
      title: '大井頭',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_chihkan_picture3_buttom").src="./pic/chihkan/Daijingtou_tool.png";
  }  
  else if(num ==4){
    chihkan_point[4] = new google.maps.Marker({ 
      position:{lat:22.996373, lng:120.200807},
      map: map,
      title: '開基武廟',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_chihkan_picture4_buttom").src="./pic/chihkan/Xinmei_St_tool.png";
  }  
  else if(num ==5){
    chihkan_point[5] = new google.maps.Marker({ 
      position:{lat:22.996619, lng:120.201544},
      map: map,
      title: '大天后宮',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_chihkan_picture5_buttom").src="./pic/chihkan/Tianhou_Palace_tool2.png";
  }
}

function set_kong_googlemap()
{

}

function kong_toggle(num)
{

}

function change_picture(num)
{
  if(num == 1)
    document.getElementById("story_anping_picture1_buttom").src="./pic/tool/Anping_Tree_House_tool_font.png";
  else if(num ==2)
    document.getElementById("story_anping_picture2_buttom").src="./pic/tool/Wang_building_tool_font.png";
  else if(num ==3)
  document.getElementById("story_anping_picture3_buttom").src="./pic/tool/Sio_tool_font.png";
  else if(num ==4)
    document.getElementById("story_anping_picture4_buttom").src="./pic/tool/Kaitai_Matsu_Temple_tool_font.png";
  else if(num ==5)
    document.getElementById("story_anping_picture5_buttom").src="./pic/tool/Anping_Castle_tool_font.png";
  else if(num ==6)
    document.getElementById("story_chihkan_picture1_buttom").src="./pic/chihkan/Chihkan_Tower_tool.png";
  else if(num ==7)
    document.getElementById("story_chihkan_picture2_buttom").src="./pic/chihkan/Wu_Temple_tool.png";
  else if(num ==8)
    document.getElementById("story_chihkan_picture3_buttom").src="./pic/chihkan/Daijingtou_tool.png";
  else if(num ==9)
    document.getElementById("story_chihkan_picture4_buttom").src="./pic/chihkan/Xinmei_St_tool.png";
  else if(num ==10)
    document.getElementById("story_chihkan_picture5_buttom").src="./pic/chihkan/Tianhou_Palace_tool2.png";
  

}

//在mission.js裡用
function changemysql(num)
{
  mission_done = num;
  if(mission_done > 5){
    mission_option = chihkan_mission[mission_done - 5];
  }
  else{
    mission_option = anping_mission[mission_done];
  }
  console.log("user id in toggle= " + user_data[0].id);
  console.log("user mission_option= " + mission_option);  
  $.ajax({
    url:'./mission',
    type:'POST',
    data:{
      mission_done: mission_done,
      mission_option: mission_option,
      user_id : user_data[0].id,
    },
    success: function(){
      console.log("send mission done success");
    },
    error: function(err){
      console.log(err);
    } 
  })
}

//   temple = new google.maps.Marker({ 
//     position:{lat:23.003476, lng:120.159789},
//     map: map
//   });

//   castle = new google.maps.Marker({ 
//     position:{lat:23.003476, lng:120.159789},
//     map: map
//   });

//   shop = new google.maps.Marker({ 
//     position:{lat:23.003476, lng:120.159789},
//     map: map
//   });

//  console.log('lat=' + now_lat);
//  console.log('long=' + now_long);
//   var mapOptions = {
//     center: { lat: -34.397, lng: 150.644},
//     zoom: 8
//   };
//   var map = new google.maps.Map(
//     document.getElementById('map-canvas'),
//     mapOptions);
// 




//better story_background收回去

  /*
  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
                '&signed_in=true&callback=initialize';
    document.body.appendChild(script);
  }
  window.onload = loadScript;
   */
  
 //google.maps.event.addDomListener(
 //  window, 'load', initialize);    
