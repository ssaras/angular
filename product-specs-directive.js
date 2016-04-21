(function(){
  var app = angular.module('product-specs-directive', []);
  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "/components/products/product-specs.html"
    };
  });
})();