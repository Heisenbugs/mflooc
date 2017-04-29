
var map, heatmap;

function initMap() {
 var dhaka = {lat: 23.8103, lng: 90.4125}; 

 map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: dhaka,
  radius: 2500    
});
 
 heatmap = new google.maps.visualization.HeatmapLayer({
  data: getPoints(),
  map: map,  
}); 

 var contentString = '<div id="content">'+
 '<div id="siteNotice">'+
 '</div>'+
 '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
 '<div id="bodyContent">'+
 '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
 'sandstone rock formation in the southern part of the '+
 'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
 'south west of the nearest large town, Alice Springs; 450&#160;km '+
 '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
 'features of the Uluru - Kata Tjuta National Park. Uluru is '+
 'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
 'Aboriginal people of the area. It has many springs, waterholes, '+
 'rock caves and ancient paintings. Uluru is listed as a World '+
 'Heritage Site.</p>'+
 '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
 'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
 '(last visited June 22, 2009).</p>'+
 '</div>'+
 '</div>';

 var infowindow = new google.maps.InfoWindow({
  content: contentString
});

 var marker = new google.maps.Marker({
  position: dhaka,
  map: map,
  title: 'Uluru (Ayers Rock)'
});

 marker.addListener('click', function() {
  infowindow.open(map, marker);
});

}


function toggle(value) {
  console.log(value);


  var gradient = [];
  var data = [];


      /// toggles by dropdown

      if(value == 1){
            /// color of heatmap
            gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            ]  
            
            /// add a new latlong to add a new point               
            data = [
            new google.maps.LatLng(24.9045, 91.8611),
            new google.maps.LatLng(24.9, 90.8611),
            ]

          } else if (value == 2){
           gradient = [
           'rgba(0, 255, 255, 0)',
           'rgba(0, 255, 255, 1)',
           'rgba(0, 191, 255, 1)',
           'rgba(0, 127, 255, 1)',
           'rgba(0, 63, 255, 1)',
           ]

      /// add a new latlong to add a new point                     
      data = [
      new google.maps.LatLng(22.3475, 91.8123),
      new google.maps.LatLng(22.5475, 91.23),
      ]
    } else {
      gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(255, 0, 0, 1)'
      ] 
      /// add a new latlong to add a new point               
      
      data = [
      new google.maps.LatLng(23.91, 90.35),
      new google.maps.LatLng(24.95, 90.32),
      ]
    } 


    changeGradient(gradient);
    this.heatmap.setData(data);
  }


  function changeGradient(gradient) {    
   heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
 }


 function getPoints() {
      /// initial heatmap which is temporarily given lat long of dhaka...      
      return [
      new google.maps.LatLng(23.8103, 90.4125),
      new google.maps.LatLng(23.8105, 90.42),
      ];
    }

