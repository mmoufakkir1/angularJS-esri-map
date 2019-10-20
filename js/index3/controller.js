app.controller('MapController', function (esriLoader,$scope) {
    var self = this;
    esriLoader.require([
        'esri/Map',
        'esri/layers/FeatureLayer',
    ], function (Map) {
        self.map = new Map({
            basemap: 'streets'
        });
    });
    $scope.helloWorld = function(){
        console.log('You have clicked');
      }
});