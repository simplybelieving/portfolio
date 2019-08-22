//main config for all angular files

angular.module('productApp', ['appRoutes', 'productServices', 'productControllers']).run(function($rootScope, $location){
   $rootScope.location = $location;
});
