(function(){
	var OrderCtrl = function($scope,$routeParams){
		var self = this;
		self.customerId = $routeParams.customerId;
		self.orders = null;
		self.init = function(){
			for(i=0;i<self.customers.length; i++){
				if(self.customers[i].id === parseInt(customerId)){
					self.orders = self.customers[i].orders;
				}
			}
		}
		self.customers = [
			{id:1, joined:'2002-20-02',name:'Narayanan',city:'Chennai',orderTotal:9.9956,orders:[{id:1,product:'shoes',total:9.9956}]},
			{id:2, joined:'2002-21-02',name:'Gokul',city:'Chennai',orderTotal:9.444,orders:[{id:2,product:'Baseball',total:9.444}]}
			{id:3 ,joined:'2002-22-02',name:'Raj',city:'Chennai',orderTotal:9.5956,orders:[{id:3,product:'Bat',total:5956}]}
		];

	};
	OrderCtrl.$inject = ['$scope','$routeParams'];
	angular.module('app').controller('OrderCtrl',OrderCtrl);
}());