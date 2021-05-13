$(document).ready(function () {
  var mymap = L.map("mymap", {
    center: [52.1, 21.0],
    zoom: 10,
    zoomControl: false,
    attributionControl: false,
  });

  var lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");
  mymap.addLayer(lyrOSM);
  var lyrPRG = L.tileLayer.wms(
    "http://localhost:8080/geoserver/projekt_prge/wms",
    {
      layers: "projekt_prge:G_SUBAREA",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );
  var lyrSozo = L.tileLayer.wms(
    "http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer",
    {
      layers: "Raster",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  //   mymap.addLayer(lyrPRG);
  L.control
    .scale({ position: "bottomleft", imperial: false, maxWidth: 200 })
    .addTo(mymap);
  var baseMaps = {
    Openstreetmap: lyrOSM,
    bdl: lyrPRG,
    mapa_sozologiczna: lyrSozo,
  };

  //polecenie dodania ikonki
  L.control.layers(baseMaps).addTo(mymap);
});
