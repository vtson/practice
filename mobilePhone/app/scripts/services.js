'use strict';
angular.module('myApp')
.constant("baseURL","http://localhost:3000/")
        .service('listFactory',['$resource', 'baseURL', function($resource,baseURL) {
        	 this.getMobiles = function(){
        		 return $resource(baseURL+"mobiles/:id",null,  {'update':{method:'PUT' }});
             };
        }])
.factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    var feedbackfac = {};
    feedbackfac.getFeedbacks = function(){
        return $resource(baseURL+"feedback/:id",null,{'add':{method: 'POST'}});
    };
    return feedbackfac;
}])