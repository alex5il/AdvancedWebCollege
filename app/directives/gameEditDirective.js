'use strict';

define(['app', 'services/gamesService'], function (app) {

    var gameEditDirective = function (gamesService) {
        return {
            restrict: 'E',
            templateUrl: "/app/views/templates/gameCreate.html",
            scope: {
                game: '='
            },
            link: function (scope) {
                scope.edit = 'Edit';

                scope.createGame = function (game) {
                    gamesService.updateGame(game);
                }
            }
        }
    };

    app.directive('gameEditDirective', ['gamesService', gameEditDirective]);
});