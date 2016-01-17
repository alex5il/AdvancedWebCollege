'use strict';

define(['app', 'services/customersService', 'services/gamesService'], function (app) {

    var gameCreateDirective = function (customersService, gamesService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/gameCreate.html",
            scope: {
                filters: '='
            },
            link: function (scope, element, attrs) {
                scope.createGame = function (game) {
                    gamesService.insertGame(game);

                    if (scope.filters != undefined) {
                        gamesService.filteredIndex([]).then(function (res) {
                            scope.filters.result = res;
                        });
                    }
                }
            }
        }
    };

    app.directive('gameCreateDirective', ['customersService', 'gamesService', gameCreateDirective]);
});