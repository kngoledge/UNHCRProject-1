refugeeApp.controller('PageThreeController', ['$scope', '$routeParams', '$resource',
    function ($scope, $routeParams, $resource) {
        $scope.pageThree = {};
        $scope.pageThree.showAlert = function() {
            window.alert("Alert from page three");
        };
    }]);
