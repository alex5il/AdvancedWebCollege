'use strict';

define(['app', 'services/csrfService'], function (app) {

    var registerController = function ($scope, csrfService) {
        $scope.tokenValue = csrfService;
    };

    app.register.controller('RegisterController', ['$scope','csrfService', registerController]);

});