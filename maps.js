var map, heatmap;
var data = [];
var markerCluster;


function initMap() {
 var dhaka = {lat: 23.8103, lng: 90.4125}; 

 map = new google.maps.Map(document.getElementById('map'), {
  zoom: 7,
  center: dhaka,  
});

 map.data.setStyle(function(feature) {
  var magnitude = feature.getProperty('mag');
  return {
    icon: getCircle(magnitude)
  };
});

 var mcOptions = {styles: [{
  height: 53,
  url: "../img/m3.png",
  width: 53
}]}


var color = "#F00";
var locations = getPoints();
/*var categorised = [];

for (var i = locations[0].places.length - 1; i >= 0; i--) {  
  locations[0].places[i].category = locations[0].places[i].mortarisk / 2 + locations[0].places[i].ecorisk /2 + locations[0].places[i].ffreq/2 + locations[0].places[i].popden/120 + locations[0].places[i].lowelev/3 ; 
  if(locations[0].places[i].category > 6){
    categorised.push(locations[0].places[i]);  
  } 
}
console.log(categorised);

var x = [];
x['places'] = categorised;
console.log(x);*/

setMarker(map, locations,mcOptions, color);

}


function serial(locations) {

  var x = locations.map(function(){
    for (var i = locations[0].places.length - 1; i >= 0; i--) {  
      locations[0].places[i].category = locations[0].places[i].mortarisk / 2 + locations[0].places[i].ecorisk /2 + locations[0].places[i].ffreq/2 + locations[0].places[i].popden/120 + locations[0].places[i].lowelev/3 ; 
      //console.log(locations[0].places[i].category)  
    }
    return locations;
  })
  console.log(x);
  return x;
}

function removeMarkers(){
  for(i=0; i<data.length; i++){
    data[i].setMap(null);
  }
  data.length = 0;
  markerCluster.clearMarkers();
}


function toggle(value) {
  var mcOptions;  
  if (value == 1) {
  locations = getPoints();
    mcOptions = {styles: [{
      height: 53,
      url: "../img/m3.png",
      width: 53
    }]}
    color = "#F00";

  } else if(value == 2) {
    locations = getPointVery()
    mcOptions = {styles: [{
      height: 53,
      url: "../img/m2.png",
      width: 53
    }]}
    color = "#CCCC00";
  } else {
    locations = getPointMid()
    mcOptions = {styles: [{
      height: 53,
      url: "../img/m1.png",
      width: 53
    }]}
    color = "#483D8B";
  }

  removeMarkers();
  setMarker(map, locations, mcOptions, color); 
}


function setMarker(map, locations, mcOptions,color){  
  var marker;
  var infowindow;
  var i;

  for (i = locations[0].places.length - 1; i >= 0; i--) {
    var latLng = new google.maps.LatLng(locations[0].places[i].lat,
    locations[0].places[i].long); 
    
    marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10.5,
        fillColor: color,
        fillOpacity: .6,
        strokeWeight: 1
      }
    });

    var content = '<div id="content">'+
    '<h1>'+ locations[0].places[i].name +'</h1>'+ 
    '<p style="font-size:19px;"><strong>Height from sea level: </strong> 8m</p>'+
    '<p style="font-size:19px;"><strong>Population: </strong> 19000</p>'+
    '<p style="font-size:19px;"><strong>Risk Factor: </strong> 7</p>'+
    '<img src="ng.png">'
    '<a href="'+locations[0].places[i].morelink+'">'+locations[0].places[i].morelink+'</a>'  +
    '</div>';     

    var infowindow = new google.maps.InfoWindow()

    google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
      return function() {
       infowindow.setContent(content);
       infowindow.open(map,marker);
     };
   })(marker,content,infowindow)); 

    data.push(marker);      

  }

  
  markerCluster = new MarkerClusterer(map, data, mcOptions);
/*
markerCluster = new MarkerClusterer(map, data,
{
  imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
});*/

}



function getPoints() {
  var locations =[{
    "places": 
        [{"popden": 50, 
          "lowelev": 6,
           "ecorisk": "3", 
           "long": 91.4339304, 
           "morelink": null,
            "mortarisk": "3",
             "name": "raybangali",
              "ffreq": "3",
               "lat": 24.77901988, 
               "radius": 200, "category": null,
                "id": 1},
           {"popden": 50,
            "lowelev": 3,
             "ecorisk": "3",
              "long": 90.72097778, 
              "morelink": null,
               "mortarisk": "3",
                "name": "char fasson",
                 "ffreq": "2",
                  "lat": 22.15942692,
                   "radius": 50,
                    "category": null,
                     "id": 2}, {"popden": 150, "lowelev": 6, "ecorisk": "3", "long": 91.12901688, "morelink": null, "mortarisk": "3", "name": "khaliyajuri", "ffreq": "3", "lat": 24.68695241, "radius": 150, "category": null, "id": 3}, {"popden": 50, "lowelev": 6, "ecorisk": "3", "long": 91.44676208, "morelink": null, "mortarisk": "3", "name": "jogonnathpur", "ffreq": "3", "lat": 24.79546167, "radius": 200, "category": null, "id": 4}, {"popden": 100, "lowelev": 3, "ecorisk": "3", "long": 90.32684326, "morelink": null, "mortarisk": "3", "name": "louhojong", "ffreq": "3", "lat": 23.49347666, "radius": 120, "category": null, "id": 5}, {"popden": 150, "lowelev": 3, "ecorisk": "3", "long": 90.53841591, "morelink": null, "mortarisk": "3", "name": "munsiganj", "ffreq": "3", "lat": 23.53770751, "radius": 50, "category": null, "id": 6}, {"popden": 150, "lowelev": 3, "ecorisk": "3", "long": 90.45078278, "morelink": null, "mortarisk": "3", "name": "jajira", "ffreq": "3", "lat": 23.64012111, "radius": 100, "category": null, "id": 7}, {"popden": 50, "lowelev": 3, "ecorisk": "3", "long": 90.5884552, "morelink": null, "mortarisk": "3", "name": "char kali", "ffreq": "2\n", "lat": 22.6418976, "radius": 80, "category": null, "id": 8}, {"popden": 100, "lowelev": 3, "ecorisk": "2", "long": 91.03752136, "morelink": null, "mortarisk": "3", "name": "ramgoti", "ffreq": "2", "lat": 22.56836585, "radius": 100, "category": null, "id": 9}]}]

return locations;
}




function getPointVery(){
 var locations = [{  
   "country":"Bangladesh",
   "places":[ 
   { 
    id:"1",
    "name":"Narayangonj",
    "lat":"24.213",
    "long":"90.192",
    "radius":"24",
    "category":"1-10",
    "lowelev":"3",
    "popden":"450",
    "ecorisk":"9",
    "mortarisk":"55%",
    "ffreq":"28",
    "shortsum":"hello this is a place",
    "morelink":"google.com",
    "future": []
  },
  { 
    id:"2",
    "name":"Jointapur",
    "count": "12",
    "lat":"24.2",
    "long":"90.3334",
    "category":"1-10",
    "lowelev":"3",
    "popden":"450",
    "ecorisk":"9",
    "mortarisk":"55%",
    "ffreq":"28",
    "shortsum":"hello this another is a place",
    "morelink":"google.com",
    "future": []
  },
  { 
    id:"3",
    "name":"Siam Villa",
    "count": "23",
    "lat":"22.4",
    "long":"90.16681",
    "category":"1-10",
    "lowelev":"3",
    "popden":"450",
    "ecorisk":"9",
    "mortarisk":"55%",
    "ffreq":"28",
    "shortsum":"hello this is a place",
    "morelink":"google.com",
    "future": []
  }]
}
]

return locations;

}



function getPointMid(){
var locations = [{  
   "country":"Bangladesh",
   "places":[ 
   { 
    id:"1",
    "name":"Narayangonj",
    "lat":"24.213",
    "long":"90.22",
    "radius":"24",
    "category":"1-10",
    "lowelev":"3",
    "popden":"450",
    "ecorisk":"9",
    "mortarisk":"55%",
    "ffreq":"28",
    "shortsum":"hello this is a place",
    "morelink":"google.com",
    "future": []
  },
  { 
    id:"2",
    "name":"Jointapur",
    "count": "12",
    "lat":"24.2",
    "long":"91.3334",
    "category":"1-10",
    "lowelev":"3",
    "popden":"450",
    "ecorisk":"9",
    "mortarisk":"55%",
    "ffreq":"28",
    "shortsum":"hello this another is a place",
    "morelink":"google.com",
    "future": []
  },
  { 
    id:"3",
    "name":"Siam Villa",
    "count": "23",
    "lat":"22.4",
    "long":"90.31",
    "category":"1-10",
    "lowelev":"3",
    "popden":"450",
    "ecorisk":"9",
    "mortarisk":"55%",
    "ffreq":"28",
    "shortsum":"hello this is a place",
    "morelink":"google.com",
    "future": []
  }]
}
]

return locations;
}




function getCircle(magnitude) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: Math.pow(2, magnitude) / 2,
    strokeColor: 'white',
    strokeWeight: .5
  };
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}
