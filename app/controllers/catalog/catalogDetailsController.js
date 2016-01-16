'use strict';

define(['app', 'services/gamesService', 'services/reviewsService'], function (app) {

    var catalogDetailsController = function ($scope, gamesService, $routeParams, $rootScope, reviewsService) {
        // Get game by id (which is name)
        $scope.game = $rootScope.params.game;
        //$scope.game = gamesService.groupByScore($routeParams.id)
        console.log(reviewsService.groupByScore($routeParams.id));
    };

    app.register.controller('CatalogDetailsController', ['$scope', 'gamesService', '$routeParams', '$rootScope', 'reviewsService', catalogDetailsController]);

});