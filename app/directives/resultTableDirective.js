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

                $scope.items = [{name:'alex1', body:'bb'},{name:'alex2', body:'bb'},{name:'alex3', body:'bb'},
                    {name:'alex4', body:'bb'},{name:'alex5', body:'bb'},{name:'alex6', body:'bb'},
                    {name:'alex7', body:'bb'},{name:'alex8', body:'bb'},{name:'alex9', body:'bb'},
                    {name:'alex10', body:'bb'},{name:'alex11', body:'bb'},{name:'alex12', body:'bb'},{name:'last', body:'bb'}];

                $scope.itemsPerPage = 3;

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