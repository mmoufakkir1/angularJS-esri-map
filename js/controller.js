app.controller('MapController', function (esriLoader) {
    var self = this;
    esriLoader.require([
        'esri/Map',
        'esri/layers/FeatureLayer'
    ], function (Map) {
        self.map = new Map({
            basemap: 'streets'
        });
    });
});