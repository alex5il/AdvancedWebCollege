'use strict';

define(['app', 'services/csrfService', 'services/authService'], function (app) {

    var loginController = function ($scope, csrfService, authService) {
        $scope.loginAction = function(user) {
            authService.login(user).then(function(){
                console.log('Good');
            }).catch(function(){
                console.log('Bad');
            });
        };

        $scope.tokenValue = csrfService;
    };

    app.register.controller('LoginController', ['$scope', 'csrfService', 'authService', loginController]);
});