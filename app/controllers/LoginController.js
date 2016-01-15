'use strict';

define(['app', 'services/csrfService', 'services/authService'], function (app) {

    var loginController = function ($scope, csrfService, authService) {
        $scope.tokenValue = csrfService;
    };

    app.register.controller('LoginController', ['$scope', 'csrfService', 'authService', loginController]);

});