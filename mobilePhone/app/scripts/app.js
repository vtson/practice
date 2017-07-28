'use strict';
angular.module('myApp',['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                    	templateUrl : 'views/listmobile.html',
                        controller  : 'ListController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
 
                    // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contact.html',
                        controller  : 'ContactController'
                     }
                }
            })


 
            .state('app.listdetails', {
                url: 'list/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/mobiledetails.html',
                        controller  : 'MobiDeController'
                   }
                }
            });
            $urlRouterProvider.otherwise('/');
    })
