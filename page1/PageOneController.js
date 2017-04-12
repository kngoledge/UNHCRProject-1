'use strict';

refugeeApp.controller('PageOneController', ['$scope', '$routeParams', '$resource',
    function ($scope, $routeParams, $resource) {
        $scope.pageOne = {};
        $scope.pageOne.showAlert = function() {
            window.alert("Alert from page one");
        };
    }]);