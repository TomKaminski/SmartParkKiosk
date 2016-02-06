(function () {
    'use strict';

    function cartService() {

        var cartData = {
            email: "",
            name: "",
            lastname: "",
            charges: 1,
            paymentCardData: null
        }

        this.insertBasicData = function (data) {
            cartData.email = data.email;
            cartData.name = data.name;
            cartData.lastname = data.lastname;
            cartData.charges = data.charges;
        };

        this.insertCardData = function (paymentCardData) {
            cartData.paymentCardData = paymentCardData;
        }

        this.getcartData = function () {
            return cartData;
        };

        this.resetCartData = function() {
            cartData = {
                email: "",
                name: "",
                lastname: "",
                charges: 1,
                paymentCardData: null
            }
        }
    }
    angular.module('app').service('cartService', cartService);
})();