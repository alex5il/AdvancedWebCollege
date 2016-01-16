'use strict';

define(['app', 'services/gamesService'], function (app) {

    var catalogDetailsController = function ($scope, gamesService, $routeParams, $rootScope) {
        // Get game by id (which is name)
        console.log($rootScope.params.game);
        $scope.game = $rootScope.params.game;
        //$scope.game = gamesService.getGame($routeParams.id)
    };

    app.register.controller('CatalogDetailsController', ['$scope', 'gamesService', '$routeParams', '$rootScope', catalogDetailsController]);

});