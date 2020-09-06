//play.css
//index_play.html
//google_map.js

var bool = [];
for(i=0;i<5;i++){
  bool[i] = true;
}

$(document).ready(function() {  
  var x = document.getElementById("demo"); 
  var now_lat;
  var now_long;
  var map;
  var treehouse;
  var wanghouse;
  var shop;
  var temple;
  var castle;
  $("#upload_buttom").click(function(){
    if(mission_select==1) {
      toggle(0);
    }
    else if(mission_select==2) {
      toggle(1);
    }
    else if(mission_select==3) {
      toggle(2);
    }
    else if(mission_select==4) {
      toggle(3);
    }
    else if(mission_select==5) {
      toggle(4);
    }
                            
    })

  
})


function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
  else {
    //console.log("Geolocation is not supported")
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
} 
function showPosition(position) {
  console.log("Lat: " + position.coords.latitude)
  console.log("Long: " + position.coords.longitude)
//   x.innerHTML = "Latitude:" + position.coords.latitude +
//                 "<br>Longitude: " + position.coords.longitude;
  now_lat = position.coords.latitude;
  now_long = position.coords.longitude;  
  console.log('lat=' + now_lat);
  console.log('long=' + now_long);  
  var mapOptions = {
    center: { lat: 23.002646, lng: 120.160082},
    zoom: 16
  };
  map = new google.maps.Map(
    document.getElementById('google_map'),
    mapOptions);
  
   //MARKER
  //德記洋行 安平樹屋
  treehouse = new google.maps.Marker({ 
    
    position:{lat:23.003360, lng:120.159794},
    map: map,
    title: '德記洋行',
    animation: google.maps.Animation.DROP
  });
  treehouse.addListener('click',function(){
    //alert('treehouse');
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
  });

  //王雞屎洋樓 
  wanghouse = new google.maps.Marker({ 
    position:{lat:23.000985, lng:120.159703},
    map: map,
    title: '王雞屎洋樓',
    animation: google.maps.Animation.DROP 
  });
  wanghouse.addListener('click',function(){
    //alert('wanghouse');
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
  });
  
  //
  shop = new google.maps.Marker({ 
    position:{lat:23.002405, lng:120.156332},
    map: map,
    title: '夕遊出張所',
    animation: google.maps.Animation.DROP 
  });
  shop.addListener('click',function(){
    //alert('shop');
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
  });

  //安平開台天后宮
  temple = new google.maps.Marker({ 
    position:{lat:23.000634, lng:120.160660},
    map: map,
    title: '安平開臺天后宮',
    animation: google.maps.Animation.DROP 
  });
  temple.addListener('click',function(){
    //alert('temple');
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
  });

  //
  castle = new google.maps.Marker({ 
    position:{lat:23.001523, lng:120.160624},
    map: map,
    title: '安平古堡',
    animation: google.maps.Animation.DROP 
  });
  castle.addListener('click',function(){
    //alert('castle');
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
  });
  
}




function initialize() {
  getLocation();

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
}

function toggle(num)
{
  console.log('num=   '+ num);
  if(num == 0){
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

  }
  else if(num ==1){
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
  }  
  else if(num ==2){
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
  }  
  else if(num ==3){
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
  }  
  else if(num ==4){
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
  }
}
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
