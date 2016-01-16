'use strict';

define(['app', 'services/customersService', 'services/gamesService'], function (app) {

    var resultTableDirective = function (customersService, gamesService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/resultTable.html",
            scope: {
                filters : "="
            },
            controller: function ($scope) {
                console.log('result table loaded');

                $scope.items = [{name:'alex', body:'bb'},{name:'alex', body:'bb'},{name:'alex', body:'bb'},
                    {name:'alex', body:'bb'},{name:'alex', body:'bb'},{name:'alex', body:'bb'},
                    {name:'alex', body:'bb'},{name:'alex', body:'bb'},{name:'alex', body:'bb'},
                    {name:'alex', body:'bb'},{name:'alex', body:'bb'},{name:'alex', body:'bb'}];

                $scope.totalItems = 64;
                $scope.currentPage = 4;

                $scope.setPage = function (pageNo) {
                    $scope.currentPage = pageNo;
                };

                $scope.pageChanged = function() {
                    console.log('Page changed to: ' + $scope.currentPage);
                };

                $scope.maxSize = 5;
            }
        }
    };

    app.directive('resultTableDirective', ['customersService', 'gamesService', resultTableDirective]);
});