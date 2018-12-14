angular.module('BlankApp', ['ngMaterial', 'ngMessages'])
    .controller('DemoCtrl', function ($scope, $mdDialog) {
		$scope.userName="";
		$scope.plan="";
		$scope.UserDetails = [
		{'name': 'James','email':'abc@abc.com','department':'Sales','lastlogin':'12/14/2018','CurrentSubscription':'Annual'},
		{'name': 'Andrew','email':'xyz@abc.com','department':'Sales','lastlogin':'12/14/2018','CurrentSubscription':'Monthly'},
		{'name': 'Joseph','email':'ijk@abc.com','department':'Finance','lastlogin':'12/14/2018','CurrentSubscription':'Annual'},
		{'name': 'George','email':'ghi@abc.com','department':'Runtime','lastlogin':'12/14/2018','CurrentSubscription':'Monthly'},
		];
		//$scope.subscriptions = function(){
			$scope.subscriptions = function(plan, userName){
				angular.forEach($scope.UserDetails, function(value, key){
					if($scope.UserDetails[key].name==userName){
						$scope.UserDetails[key].CurrentSubscription=plan;
					}
					console.log(key + ': ' + value);
				});
			}
	});