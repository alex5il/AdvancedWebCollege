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
                scope.edit = 'Add';
                scope.createGame = function (game) {


                    var file = document.getElementById('file').files[0];
                    var reader = new FileReader();
                    reader.onloadend  = function(e){
                        var data = e.target.result;
                        game.image = String.fromCharCode.apply(null, new Uint16Array(data));;

                        gamesService.insertGame(game);
                    };

                    reader.readAsArrayBuffer(file);

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