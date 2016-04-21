(function(){
  var app = angular.module('product-reviews-module', []);
  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "/components/products/product-reviews.html"
    };
  });
})();