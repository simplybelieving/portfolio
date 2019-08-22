  console.log('Test SHOW controller')
angular.module('productControllers', ['productServices', 'ui.bootstrap'])

.controller('showItems', function(Product){

var app = this;

   app.loading = true; // Start loading icon on page load
   app.accessDenied = true; // Hide table while loading
   app.errorMsg = false; // Clear any error messages
   app.editAccess = false; // Clear access on load
   app.deleteAccess = false; // CLear access on load
   app.limit = 6; // Set a default limit to ng-repeat
   app.currentPage= 1;
   // Function: get all the users from database

       // Runs function to get all the users from database
       Product.getProducts().then(function(data) {
       //console.log(data.data.items[1].productname);
       app.items = data.data.items; // Assign users from database to variable
       });
       Product.getProducts(); // Invoke function to get users from databases


   // Function: Show more results on page
   app.showMore = function(number) {
       app.showMoreError = false; // Clear error message
       // Run functio only if a valid number above zero
       if (number > 0) {
           app.limit = number; // Change ng-repeat filter to number requested by user
       } else {
           app.showMoreError = 'Please enter a valid number'; // Return error if number not valid
       }
   };

   // Function: Show all results on page
   app.showAll = function() {
       app.limit = undefined; // Clear ng-repeat limit
       app.showMoreError = false; // Clear error message
   };



 })

.controller('detailsCtrl',function($scope, $routeParams, Product){

   var app = this;

   Product.getProduct($routeParams.id).then(function(data){
   $scope.newName=data.data.product.productname;
   $scope.newDescription=data.data.product.description;
   $scope.newImage=data.data.product.imagePath;
   $scope.newType=data.data.product.producttype;
   console.log(data.data.product.imagePath);
   console.log(data.data.product.productname);
   console.log(data.data.product.description);
 });

    app.showdetails = function(newName, newDescription, newImage, newType){  };

})

.controller('moreCtrl',function($scope,$routeParams, Product){

   var app = this;

   Product.getMore($routeParams.currentPage, $routeParams.type).then(function(data){
   app.items = data.data.items;
   });

   Product.getMore($routeParams.currentPage, $routeParams.type);

   $scope.type = $routeParams.type;
   $scope.currentPage = parseInt($routeParams.currentPage) + 1;
   app.temp = parseInt($routeParams.currentPage) - 1;
   $scope.prevPage = app.temp;
})




 .filter('pagination', function(){
   return function(data, start){
     if (!data || !data.length) { return; }
     return data.slice(start);
   }
 });
