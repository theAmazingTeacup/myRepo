angular.module('myApp').factory('Mapper_Base', function($resource, Query_Invoice, ResourceBase) {
    /*
    * Constructor
    * Query-Object is needed to create a rightful URL.
    * ResurceBase is needed for using the API.
    */
    var Mapper_Base = function() {
    	this.Query_Invoice = new Query_Invoice();
        this.ResourceBase = new ResourceBase();
    };
    
    Mapper_Base.$inject = ['$resource', 'Query_Invoice', 'ResourceBase'];

    /*
     * GET
     */
    Mapper_Base.prototype.GET = function(object) {
    	if(object) {
            // using query object to create statement.
            var selectQuery = this.Query_Invoice.createSelect(object);
            return this.ResourceBase.doGetRequest(selectQuery);
    	}else {
            throw "Object is null.";
    	}
    };
    
    /*
     * POST
     */
    Mapper_Base.prototype.POST = function(object) {
    	if(object) {
            // using query object to create statement.
            var selectQuery = this.Query_Invoice.createSelect(object);
            if(!object.object.valueObject) {
                throw new Error("Invalid value-object.");
                return;
            }else {
                return this.ResourceBase.doPostRequest(selectQuery, object.object.valueObject);
            }
    	}else {
            throw "Object is null.";
    	}
    };
    
    /*
     * PUT
     */
    Mapper_Base.prototype.PUT = function(object) {
    	if(object) {
            // using query object to create statement.
            var selectQuery = this.Query_Invoice.createSelect(object);
            if(!object.object.valueObject) {
                throw new Error("Invalid value-object.");
                return;
            }else {
                // remove undefined properties in value-object.
                this.removeUndefinedProperties(object.object.valueObject);
                return this.ResourceBase.doPutRequest(selectQuery, object.object.valueObject);
            }
    	}else {
            throw "Object is null.";
    	}
    };
    
    /*
     * DELETE
     */
    Mapper_Base.prototype.DELETE = function(object) {
    	if(object) {
            // using query object to create statement.
            var selectQuery = this.Query_Invoice.createSelect(object);
            return this.ResourceBase.doDeleteRequest(selectQuery);
    	}else {
            throw "Object is null.";
    	}
    };
    
    Mapper_Base.prototype.removeUndefinedProperties = function(object) {
        for(var name in object) {
            if(!object[name]) {
                delete object[name];
            }
        }
    }
    
    return Mapper_Base;
});
