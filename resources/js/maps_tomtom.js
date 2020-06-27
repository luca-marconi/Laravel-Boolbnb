// TomTom
// importiamo TomTom
import tt from '@tomtom-international/web-sdk-maps';
// creiamo mappa utilizzando TomTom, se esiste un elemento con id=“map”
// if ($('#map').length > 0) {
if ($('#map').length > 0) {
    var coordinates = [$('#map').attr('data-long'), $('#map').attr('data-lat')];
    var map = tt.map({
        container: 'map',
        key: 'gFFCW4AFnFwAIM5ZWPG6Sew8JPYhCY0i',
        style: 'tomtom://vector/1/basic-main',
        center: coordinates,
        zoom: 15,
        pitch: 45
    });
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
    // Marker
    var element = document.createElement('div');
    element.id = 'marker';
    var marker = new tt.Marker({
        element: element,
    });
    // marker.setLngLat(coordinates).addTo(map);
    new tt.Marker().setLngLat(coordinates).addTo(map);


    // $('#map').on('shown.bs.modal', function() {
    // map.resize();
    // });
};
