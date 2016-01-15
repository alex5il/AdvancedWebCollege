'use strict';

define(['app'], function (app) {
    var cartName = "GigaGamesCart";

    var orderCartController = function ($scope) {

        $scope.findInCart = function (purchases, game) {

            for (var index = 0; index < purchases.length; index++) {
                if (purchases[index].game.id == game.id) {
                    return index;
                }
            }

            return -1;
        };

        $scope.calculateTotalPrice = function () {
            var totalPrice = 0;
            var cart = localStorage.getItem(cartName);
            var cartObject = JSON.parse(cart);
            var purchases = cartObject.purchases;

            for (var index = 0; index < purchases.length; index++) {
                totalPrice += (purchases[index].game.price * purchases[index].quantity);
            }

            return totalPrice;
        };

        $scope.addToCart = function (purchase) {
            var cart = localStorage.getItem(cartName);
            var cartObject = JSON.parse(cart);
            var purchases = cartObject.purchases;
            var indexInCart = this.findInCart(purchases, purchase.game);

            // If the game is not in the cart yet.
            if (indexInCart == -1) {
                purchases.push(purchase);
            } else {
                purchases[indexInCart].quantity += purchase.quantity;
            }

            // Saving the updated cart to local storage.
            localStorage.setItem(this.cartName, JSON.stringify(cartObject));
        };

        $scope.removeFromCart = function (purchase) {
            var cart = localStorage.getItem(cartName);
            var cartObject = JSON.parse(cart);
            var purchases = cartObject.purchases;
            var indexInCart = this.findInCart(purchases, purchase.game);

            // If the game is in the cart.
            if (indexInCart != -1) {
                purchases[indexInCart].quantity -= purchase.quantity;

                // If the quantity is 0 - delete purchase from an array.
                if (purchases[indexInCart].quantity < 0) {
                    purchases.splice(indexInCart, 1);
                }

                // Saving the updated cart to local storage.
                localStorage.setItem(this.cartName, JSON.stringify(cartObject));
            }
        };

        $scope.emptyCart = function () {
            localStorage.removeItem(cartName);
        };

        $scope.checkOut = function () {
            var totalPrice = this.calculateTotalPrice();
        };

    };

    app.register.controller('OrderCartController', ['$scope', orderCartController]);

});