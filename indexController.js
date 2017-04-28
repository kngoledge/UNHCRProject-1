var homeApp = angular.module('homeApp', ['ngRoute', 'ngMaterial', 'ngResource']);


homeApp.controller('HomeController', ['$scope', '$resource', '$routeParams',
    function ($scope, $resource, $routeParams) {
        $scope.main = {};

        function main() {
			cartodb.createVis('map', 'https://documentation.carto.com/api/v2/viz/23f2abd6-481b-11e4-8fb1-0e4fddd5de28/viz.json', {
			    shareable: true,
			    title: false,
			    description: true,
			    search: true,
			    tiles_loader: true,
			    zoom: 4
			})
			.done(function(vis, layers) {
			  // layer 0 is the base layer, layer 1 is cartodb layer
			  // setInteraction is disabled by default
			  layers[1].setInteraction(true);
			  layers[1].on('featureOver', function(e, latlng, pos, data) {
			    cartodb.log.log(e, latlng, pos, data);
			  });

			  var sublayer = layers[1].getSubLayer(0);

			  sublayer.infowindow.set('template', $('#infowindow_template').html());
			  // you can get the native map to work with it
			  var map = vis.getNativeMap();
			  // now, perform any operations you need
			  // map.setZoom(3);
			  // map.panTo([50.5, 30.5]);
			})
			.error(function(err) {
			  console.log(err);
			});
		}
		window.onload = main;
    }]);