angular.module('myApp').factory('Mapper_Invoice', function(Mapper_Base) {   
	/*
	 * Inherited Mapper_Base to Mapper_Invoice.
	 */
	var mapper = Object.create(new Mapper_Base());

	/*
	 * Overwrite GET-Function of Parentobject.
	mapper.GET = function() {
		this.valueX = "X";
		console.log("CHILD CALL " + this.valueX);
		console.log(mapper);
	}
	*/
	
    return mapper;
});
