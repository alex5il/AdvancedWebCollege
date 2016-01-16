'use strict';

define(['app', 'services/gamesService'], function (app) {

    var catalogDetailsController = function ($scope, gamesService, $routeParams) {
        // Get game by id (which is name)
        //$scope.game = gamesService.getGame($routeParams.id)
    };

    app.register.controller('CatalogDetailsController', ['$scope', 'gamesService', '$routeParams', catalogDetailsController]);

});