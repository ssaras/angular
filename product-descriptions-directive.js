(function(){
      var app = angular.module('product-descriptions-directive', []);

      app.directive("productDescriptions", function() {
        return {
          restrict: 'E',
          templateUrl: "/components/products/product-descriptions.html"
        };
      });
})();