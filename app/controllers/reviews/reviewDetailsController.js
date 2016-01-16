'use strict';

define(['app'], function (app) {

    var reviewDetailsController = function ($scope) {
        // Get game by id (which is name)
        //$scope.game = gamesService.getGame($routeParams.id)
    };

    app.register.controller('ReviewDetailsController', ['$scope', reviewDetailsController]);

});