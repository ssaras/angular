(function(){
  var app = angular.module('product-tabs-module', []);
  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "/components/products/views/product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });
})();