﻿'use strict';

define(['app', 'services/customersService', 'services/gamesService'], function (app) {

    var resultTableDirective = function (customersService, gamesService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/resultTable.html",
            scope: {
                filters : "="
            },
            controller: function ($scope) {
                $scope.result = {};
                $scope.result.tuples = [];

                switch($scope.filters.type) {
                    case 'catalog':
                        $scope.result.tuples = [
                            {header:'#', value: 'id'}, {header:'name', value: 'gameName'}, {header:'description', value: 'gameDesc'},
                            {header:'genre', value: 'genre'},{header:'cost', value: 'cost'}, {header:'score', value: 'score'}];
                        break;
                    case 'reviews': // TODO reviews
                        $scope.result.tuples = [
                            {header:'#', value: 'id'}, {header:'Game', value:'gameId'} , {header:'Title', value: 'title'}, {header:'Score', value: 'score'},
                            {header:'Date', value: 'reviewDate'}];
                        break;
                }

                $scope.pageChanged = function() {
                    console.log('Page changed to: ' + $scope.currentPage);

                };

                $scope.itemsPerPage = 5;
                $scope.totalItems = $scope.filters.result.length;
                $scope.currentPage = 1;
                $scope.maxSize = 5;
            }
        }
    };

    app.directive('resultTableDirective', ['customersService', 'gamesService', resultTableDirective]);
});