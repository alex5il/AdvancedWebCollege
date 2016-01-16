'use strict';

define(['app', 'services/homeService'], function (app) {

    var filterDirective = function (homeService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/webService.html",
            scope: {},
            link: function (scope, element, attrs) {
                scope.getData = function (pageIndex) {
                    //scope.results = homeService.getPage(pageIndex);
                    console.log(pageIndex);
                }
                scope.getData(1);
            }
        }
    };

    app.directive('webServiceDirective', ['homeService', webServiceDirective]);
});