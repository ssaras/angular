/**
 * Module
 */
 var app = angular.module('gemStore', []);
 <ng-app="gemStore">

/**
 * Controller
 */

<ng-controller="StoreController as store">

app.controller('StoreController', function(){
	this.product = gem;
});
var gem = {
	name: 'Azurite',
	price: 110.50,
	canPurchase: false,
	soldOut: true
};

/**
 * ng-repeat
 */
 ng-repeat="product in store.products"
 {{product.name}}
 {{product.price}}

 app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    { name: 'Azurite', price: 2.95 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 }
  ];