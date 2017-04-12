/**
 * Created by varunbindra on 4/11/17.
 */

var refugeeApp = angular.module('refugeeApp', ['ngRoute', 'ngMaterial', 'ngResource']);

refugeeApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/page1', {
            templateUrl: 'page1/page.html',
            controller: 'PageOneController'
        }).
        when('/page2', {
            templateUrl: 'page2/page.html',
            controller: 'PageTwoController'
        }).
        when('/page3', {
            templateUrl: 'page3/page.html',
            controller: 'PageThreeController'
        });
    }]);

refugeeApp.controller('MainController', ['$scope', '$resource', '$routeParams',
    function ($scope, $resource, $routeParams) {
        $scope.main = {};
        $scope.main.visitPageOne = function() {
            var urlToSwitch = '#!page1';
            window.location.href = urlToSwitch;
        };
        $scope.main.visitPageTwo = function() {
            var urlToSwitch = '#!page2';
            window.location.href = urlToSwitch;
        };
        $scope.main.visitPageThree = function() {
            var urlToSwitch = '#!page3';
            window.location.href = urlToSwitch;
        };
    }]);

