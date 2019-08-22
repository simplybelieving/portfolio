
angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider,  $locationProvider){

   $routeProvider

   .when('/startup',{
     templateUrl: 'app/views/pages/startup.html'
   })

   .when('/comix',{
     templateUrl: 'app/views/pages/comix.html'
   })

   .when('/lost',{
     templateUrl: 'app/views/pages/lost.html'
   })

   .when('/spa',{
     templateUrl: 'app/views/pages/spa.html'
   })

   .when('/',{
     templateUrl: 'app/views/pages/home.html'
   })


   .when('/taiwantravel',{
     templateUrl: 'app/views/pages/taiwantravel.html'
   })

   .when('/findingwork',{
     templateUrl: 'app/views/pages/findingwork.html'
   })

   .when('/about',{
     templateUrl: 'app/views/pages/about.html'
   })

   .when('/catalogues',{
     templateUrl: 'app/views/pages/catalogues.html',
     controller: 'showItems',
     filter:'pagination',
     controllerAs: 'showItems'
   })

   .when('/morecatalogue/:currentPage/:type',{
     templateUrl: 'app/views/pages/morecatalogue.html',
     controller: 'moreCtrl',
     controllerAs: 'moreCtrl'
   })

   .when('/productdetails/:id',{
     templateUrl: 'app/views/pages/productdetails.html',
     controller: 'detailsCtrl',
     controllerAs: 'detailsCtrl'
   })



   .otherwise({ redirectTo: '/'});

   $locationProvider.html5Mode({
     enabled: true,
     requireBase: false
   });



});
