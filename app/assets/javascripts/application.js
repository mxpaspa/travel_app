// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require_tree .

$(document).ready(function (){
  var myLatLng = { lat: 35.7796, lng: -78.6382}
    function initialize() {
      var mapOptions = {
      center: myLatLng,
      zoom: 10,
      scrollwheel:false
      };

      var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);

      // google.maps.event.addListener(map, 'click', function(event) {
      //   addMarker(event.latLng, map);
      // });
      // var image = "<%= asset_path 'pic.png' %>"
      var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      var marker = new google.maps.Marker({
       position: myLatLng,
       map: map,
       icon: image,
       animation: google.maps.Animation.DROP
      });

      var contentString = '<h2>TTS @ HQ Raleigh</h2>' + '<p>Coding Classes, Held Here</p>';

      var infoWindow  = new google.maps.InfoWindow({
        content: contentString
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }

    // google.maps.event.addListener(map, 'click', function(event) {
    //   addMarker(event.latLng, map);

    google.maps.event.addDomListener(window, 'load', initialize);
});
