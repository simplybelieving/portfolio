angular.module('productServices', [])


.factory('Product', function($http) {
    var productFactory = {}; // Create the userFactory object

    // Get all the users from database
        productFactory.getProducts = function() {
        return $http.get('/api/catalogues/');
    };

        productFactory.getProduct = function(id) {
        return $http.get('/api/productdetails/' + id);
    };

    productFactory.getMore = function(currentPage, type) {
    return $http.get('/api/morecatalogue/' + currentPage + '/' + type);
    };

    return productFactory; // Return userFactory object
});
