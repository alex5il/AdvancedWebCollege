'use strict';

define(['app'], function (app) {

    var catalogController = function ($scope) {
        $scope.filter = {};
        $scope.filter.foundGames = {};
        $scope.filter.type = "Catalog";
    };

    app.register.controller('CatalogController', ['$scope', catalogController]);

});