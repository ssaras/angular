(function(){
  var app = angular.module('product-specs-module', []);
  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "/components/products/views/product-specs.html"
    };
  });
})();