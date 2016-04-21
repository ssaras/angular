(function(){
      var app = angular.module('product-descriptions-module', []);

      app.directive("productDescriptions", function() {
        return {
          restrict: 'E',
          templateUrl: "/components/products/views/product-descriptions.html"
        };
      });
})();