var x = document.getElementById("demo"); 
var now_lat;
var now_long;

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
  var map = new google.maps.Map(
    document.getElementById('google_map'),
    mapOptions);
  //德記洋行 安平樹屋
  var treehouse = new google.maps.Marker({ 
    
    position:{lat:23.003360, lng:120.159794},
    map: map
  });

  //王雞屎洋樓 
  var wanghouse = new google.maps.Marker({ 
    position:{lat:23.000985, lng:120.159703},
    map: map
  });
  //安平開台天后宮
  var temple = new google.maps.Marker({ 
    position:{lat:23.000634, lng:120.160660},
    map: map
  });
  //
  var castle = new google.maps.Marker({ 
    position:{lat:23.001523, lng:120.160624},
    map: map
  });

  var shop = new google.maps.Marker({ 
    position:{lat:23.002405, lng:120.156332},
    map: map
  });
}

function initialize() {
  getLocation();

  var treehouse;
  var wanghouse;
  var temple;
  var castle;
  var shop;
  

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
  
google.maps.event.addDomListener(
  window, 'load', initialize);    
