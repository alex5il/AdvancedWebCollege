﻿'use strict';

define(['app', 'services/customersService', 'services/gamesService'], function (app) {

    var filterDirective = function (customersService, gamesService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/filter.html",
            scope: {
                filters : "="
            },
            link: function (scope, element, attrs) {


                scope.filterCatalog = function (itemToFilter) {
                    gamesService.filteredIndex(itemToFilter);
                }
            }
        }
    };

    app.directive('filterDirective', ['customersService', 'gamesService', filterDirective]);
});