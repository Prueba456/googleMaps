const Header = () => {
  const row = $('<div class="row"></div>');
  const map = $('<div id="mapa"></div>');
  row.append(map);
$(_ =>{

  initMap();



});

  return row;
}

const state = {
 lat: null,
 log: null
}
let map;
function initMap() {

  buscame();
    const uluru = {lat: -44, lng: 67};
       map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 4,
        center: uluru
      });
}

function buscame() {

  function success(pos) {
    var crd = pos.coords;
    state.lat = crd.latitude;
    state.log = crd.longitude;
    const marker = new google.maps.Marker({
      position: {lat:crd.latitude , lng: crd.longitude},
      map: map
      // zoom: 4
      // center: {lat:crd.latitude , lng: crd.longitude}
    });

    map.setZoom(18);
    map.setCenter({lat:crd.latitude , lng: crd.longitude});

    console.log(pos);
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + state.log);
    console.log('More or less ' + crd.accuracy + ' meters.');
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error);
}
