var app = angular.module('app',[]);

/* Option 1 */

app.controller('CustCtrl', ['$scope', function($scope){
	var self = this;
	self.sortBy = 'name';
	self.reverse = false;

	self.customers = [{joined:'2002-20-02',name:'Narayanan',city:'Chennai',orderTotal:9.9956}];
	self.doSort = function(propName){
		self.sortBy=propName;
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
