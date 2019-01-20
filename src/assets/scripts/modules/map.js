function initMap() {
  var coordinates = {lat:54.205731, lng:37.690930};

  var map = new google.maps.Map(document.getElementById('google-map'),{
    center: coordinates,
    zoom:17
  })

  var imageMarker = "../assets/images/map-marker.png"

  var marker = new google.maps.Marker({
    position: {lat:54.205731, lng:37.696982},
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: imageMarker
  })
} 
initMap();

// AIzaSyBGl7DXLDTk0t-AKck5guMAY0ZfCySW85Q