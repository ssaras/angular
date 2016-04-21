(function(){
  var app = angular.module('product-gallery-module', []);
  app.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "/components/products/views/product-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });
})();