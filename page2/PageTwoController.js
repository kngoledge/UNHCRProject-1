
refugeeApp.controller('PageTwoController', ['$scope', '$routeParams', '$resource',
    function ($scope, $routeParams, $resource) {
        $scope.pageTwo = {};
        $scope.pageTwo.showAlert = function() {
            window.alert("Alert from page two");
        };
    }]);