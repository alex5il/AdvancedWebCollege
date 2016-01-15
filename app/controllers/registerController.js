'use strict';

define(['app', 'services/csrfService', 'services/authService'], function (app) {

    var registerController = function ($scope, csrfService, authService) {
        $scope.tokenValue = csrfService;
    };

    app.register.controller('RegisterController', ['$scope','csrfService', 'authService', registerController]);
});