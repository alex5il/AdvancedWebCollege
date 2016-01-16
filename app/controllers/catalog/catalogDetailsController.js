'use strict';

define(['app', 'services/gamesService'], function (app) {

    var catalogDetailsController = function ($scope, gamesService, $rootScope) {
        // Get game by id (which is name)
        $scope.game = $rootScope.params.game;
    };

    app.register.controller('CatalogDetailsController', ['$scope', 'gamesService', '$rootScope', catalogDetailsController]);

});