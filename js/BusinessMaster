var app = angular.module('myApp', ['ngResource', 'ngAnimate']);

app.factory('BusinessMaster', function(Mapper_Invoice) {

    /*
     * Constructor
     * endpoint and auth_token are private and only accessible over Getters.
    */
    var BusinessMaster = function(nEndpoint, nAuth_token) {
        var endpoint = null;
        var auth_token = null;
    	if(nEndpoint !== null) {
            endpoint = nEndpoint;
    	}else {
            throw nEndpoint + " is a invalid endpoint";
    	}
    	
    	if(nAuth_token !== null) {
            auth_token = nAuth_token;
    	}else {
            throw nAuth_token + " is a invalid auth_token";
    	}
    	
    	this.mapper = Mapper_Invoice;

    	this.currentObject = {
            endpoint: null,
            auth_token: null,
            objectname: null,
            id: null,
            value: null,
            parameters: []
    	};
        
        this.getEndpoint = function() {
            return endpoint;
        };
        this.getAuth_token = function() {
            return auth_token;
        };
    };
    
    BusinessMaster.$inject = ['Mapper_Base'];
 
    /*
     * Function to check if endpoint and auth_token are valid.
     * And also reset used values. (!!!IMPORTANT BECAUSE BUSINESSMASTER IS SINGLETON)
     * @returns {_L3.BusinessMaster.prototype}
     */
    BusinessMaster.prototype.talk = function() {
    	if(this.getEndpoint() && this.getAuth_token()) {
            this.currentObject.endpoint = this.getEndpoint();
            this.currentObject.auth_token = this.getAuth_token();
            // reset used values.
            this.currentObject.objectname = null;
            this.currentObject.id = null;
            this.currentObject.value = null;
            this.currentObject.parameters = null;
            return this;
    	}else {
            throw "Endpoint or Token are invalid.";
    	}
    };
    
    /*
     * Functon to set current targeted API-Interface/Modules
     * @param {type} object
     * @returns {_L3.BusinessMaster.prototype}
     */
    BusinessMaster.prototype.to = function(object) {
    	if(object !== null) {
            this.currentObject.object = object;
            return this;
    	}else {
            throw "Object is null.";
    	}
    };
    
    /*
     * GET
     * if id has a value so we will look for a entity with this id.
     * if params has values so we will append this params to the URL.
     */
    BusinessMaster.prototype.andGET = function(id, params) {
        if(!this.currentObject.object) {
            throw new Error("Invalid modules object.");
        }else {
            this.currentObject.id = id;
            this.currentObject.parameters = params;
            return this.mapper.GET(this.currentObject);   
        }
    };
    
    /*
     * POST
     * if params has values so we will append this params to the URL.
     */
    BusinessMaster.prototype.andPOST = function(params) {
        if(this.currentObject.object.isReadyToPost()) {
            this.currentObject.parameters = params;
            return this.mapper.POST(this.currentObject);
        }else {
            throw new Error("Invalid");
            return;
        }
    };
    
    /*
     * PUT
     * if id has a value so we will look for a entity with this id.
     * if params has values so we will append this params to the URL.
     */
    BusinessMaster.prototype.andPUT = function(id, params) {
        if(!id) {
            throw new Error("Invalid id");
        }
        this.currentObject.id = id;
    	this.currentObject.parameters = params;
        return this.mapper.PUT(this.currentObject);
    };
    
    /*
     * DELETE
     * if id has a value so we will look for a entity with this id.
     * if params has values so we will append this params to the URL.
     */
    BusinessMaster.prototype.andDELETE = function(id, params) {
        if(!id) {
            throw new Error("Invalid id");
        }
    	if(!this.currentObject.object) {
            throw new Error("Invalid modules object.");
        }else {
            this.currentObject.id = id;
            this.currentObject.parameters = params;
            return this.mapper.DELETE(this.currentObject);   
        }
    };
    return BusinessMaster;
});
