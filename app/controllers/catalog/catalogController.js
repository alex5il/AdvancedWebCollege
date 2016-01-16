'use strict';

define(['app'], function (app) {

    var catalogController = function ($scope) {
        $scope.filters = {};
        $scope.filters.result = {};
        $scope.filters.type = "catalog";
    };

    app.register.controller('CatalogController', ['$scope', catalogController]);

});