function CustomerCtrl(){
		var self = this;
		self.sortBy = 'name';
		self.reverse = false;

		self.customers = [{joined:'2002-20-02',name:'Narayanan',city:'Chennai',orderTotal:9.9956}];
		self.doSort = function(propName){
			self.sortBy=propName;
			self.reverse = !self.reverse;
		}
	}