'use strict';

define(['app', 'services/customersService', 'services/gamesService'], function (app) {

    var resultTableDirective = function (customersService, gamesService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/resultTable.html",
            scope: {
                filters : "="
            },
            link: function (scope, element, attrs) {
                console.log('result table loaded');
            }
        }
    };

    app.directive('resultTableDirective', ['customersService', 'gamesService', resultTableDirective]);
});