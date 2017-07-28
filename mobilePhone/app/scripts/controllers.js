'use strict';
angular.module('myApp')
.controller('ListController',['$scope','listFactory',function($scope,listFactory){
	$scope.showList = false;
	$scope.message = "Loading ...";
    $scope.moblies = listFactory.getMobiles().query(
    		function(response) {
                $scope.mobiles = response;
                $scope.showList = true;
            },
            function(response) {
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
    );
}])
.controller('MobiDeController',['$scope','$stateParams','listFactory',function($scope,$stateParams,listFactory){
	$scope.showMobi = true;
	$scope.message = "Loading ...";
	$scope.mobile = listFactory.getMobiles().get({id:parseInt($stateParams.id,10)})
	 .$promise.then(
             function(response){
                 $scope.mobile = response;
                 $scope.showMobi = true;
             },
             function(response) {
                 $scope.message = "Error: "+response.status + " " + response.statusText;
             }
);
}])
.controller('ContactController',['$scope',function($scope){
	$scope.feedback = {mychannel:"",firstName:"",lastName:"",agree:false,email:""};
	var channels = [{value:"tel",label:"Tel."},{value:"Email",label:"Email"}];
	$scope.channels = channels;
	$scope.invalidChannelSection = false;
}])
.controller('FeedbackController',['$scope','feedbackFactory',function($scope,feedbackFactory){
	$scope.feedbacks = feedbackFactory.getFeedbacks().query(
            function(response){
                $scope.feedbacks = response;
            }
        );
	$scope.sendFeedback = function(){
		console.log($scope.feedback);
		if ($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel)
			{
				$scope.invalidChannelSelection = true;
				console.log('incorect');
			}
		else {
			feedbackFactory.getFeedbacks().add($scope.feedback);
			$scope.invalidChannelSelection = false;
			$scope.feedback = {mychannel:"",firstname:"",lastname:"",agree:false,email:""};
			$scope.feedback.mychannel = "";
			$scope.feedbackForm.$setPristine();
			console.log($scope.feedback);
		}
	}
}])
.controller('ListCommentController',['$scope','listFactory',function($scope,listFactory){
		$scope.comment = {rating:5, comment:"", author:"", date:""};
		$scope.submitComment = function(){
			$scope.comment.date = new Date().toISOString();
			console.log($scope.comment);
			$scope.mobile.comments.push($scope.comment);
			listFactory.getMobiles().update({id:$scope.mobile.id},$scope.mobile);
			$scope.commentForm.$setPristine();
			$scope.comment = {author:"",rating:"",comment:"",date:new Date().toISOString()};
			console.log($scope.comment);
	}
}])
