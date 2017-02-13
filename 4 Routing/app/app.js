var app = angular.module('app',['ngRoute']);

// editCustomer/254

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/',{
			controller:'CustCtrl',
			controllerAs:'cust',
			template:'/apps/views/customers.html'
		})
		.when('/orders/:customerId',{
			controller:'OrderCtrl',
			controllerAs:'order',
			template:'/apps/views/orders.html'
		})
		.otherwise({redirectTo:'/'});
}]);

/* Option 1 */

app.controller('CustCtrl', ['$scope','$routeParams', function($scope,$routeParams){
	var self = this;
	self.sortBy = 'name';
	self.reverse = false;
	self.customerId = $routeParams.customerId;

	self.customers = [{joined:'2002-20-02',name:'Narayanan',city:'Chennai',orderTotal:9.9956}];
	self.doSort = function(propName){
		self.sortBy = propName;
		self.reverse = !self.reverse;
	}
}]);

/* option 2 */

(function(){
	app.module('app').controller('CustCtrl', ['$scope', function($scope){
		var self = this;
		self.sortBy = 'name';
		self.reverse = false;

		self.customers = [{joined:'2002-20-02',name:'Narayanan',city:'Chennai',orderTotal:9.9956}];
		self.doSort = function(propName){
			self.sortBy=propName;
			self.reverse = !self.reverse;
		}
	}]);
}());

/* Option 3 */

(function(){
	
	function CustCtrl($scope){
		var self = this;
		self.sortBy = 'name';
		self.reverse = false;

		self.customers = [{joined:'2002-20-02',name:'Narayanan',city:'Chennai',orderTotal:9.9956}];
		self.doSort = function(propName){
			self.sortBy=propName;
			self.reverse = !self.reverse;
		}
	}
	CustCtrl.$inject= ['$socpe'];
	angular.module('app').controller('CustCtrl',CustCtrl);
}());
