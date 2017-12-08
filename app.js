/**
* login Module
*
* Description
*/
angular.module('login', ['ui.router']).config(function($stateProvider,$urlRouterProvider) {
  // 
  // For any unmatched url, redirect to /state1 
  $urlRouterProvider.otherwise("/welcome");
  
  $stateProvider
    .state('state1', {
      url: "/welcome",
      templateUrl: "data/loginpage/loginpage.html",
      controller: "loginController"
    });
  $stateProvider
    .state('state2', {
      url: "/create",
      templateUrl: "data/createlogin/view2.html",
      controller: "createController"
    });

  $stateProvider.state('homepage',{
    url: '/homepage',
    templateUrl:'connected.html',
    controller:'loginController'
  });

  $stateProvider.state('mismatch',{
    url: '/mismatch',
    templateUrl:"homepage.html",
    controller:'loginController'
  });
    
    });
