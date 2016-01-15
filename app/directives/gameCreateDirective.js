'use strict';

define(['app', 'services/customersService', 'services/gamesService'], function (app) {

    var gameCreateDirective = function (customersService, gamesService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/gameCreate.html",
            scope: {},
            link: function (scope, element, attrs) {
                scope.createGame = function (game) {
                    gamesService.insertGame(game);
                }
            }
        }
    };

    app.directive('gameCreateDirective', ['customersService', 'gamesService', gameCreateDirective]);
});