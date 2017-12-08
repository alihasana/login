angular.module('login').controller('loginController', function($scope, $state) {

	var username ='';
	var password = '';
	$scope.newPage = newPage;

	function newPage() {

		if ($scope.username == 'il' && $scope.password == 'a') {
            $state.go('homepage');
          } else {
              // window.open('components/wrongpassword.html');

  	         $state.go('mismatch');
            
          };
		}
	});