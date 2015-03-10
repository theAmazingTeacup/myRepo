app.factory('Query_Invoice', function() {

	/*
	 * Constructor
	 */
    function Query_Invoice() {

    
    };

    /*
     * 
     */
    Query_Invoice.prototype.createSelect = function(object) {
        // append endpoint
        // append modulename
        // OPTIONAL: append ID
        // MUST: append token as query-parameter (token=value)
        // OPTIONAL: append more parameter as query parameter (param=value)
        var endpoint;
        var modulesname;
        var optionalId;
        var apiToken;
        var optionalParamsString;
        
        var query = "";
        if(object.endpoint !== null) {
            endpoint = object.endpoint;
            query = endpoint;
        }
        if(object.object !== null) {
            modulesname = object.object.constructor.name;
            query += modulesname;
        }
        if(object.id !== null) {
            optionalId = object.id;
            query += "/" + optionalId;
        }
        if(object.auth_token !== null) {
            apiToken = object.auth_token;
            query += "?token=" + apiToken;
        }
        if(object.parameters) {
            //optionalParams = object.params;
            optionalParamsString = this.appendParams(object.parameters);
            query += optionalParamsString;
        }
        return query;
    };
    
    Query_Invoice.prototype.appendParams = function(params) {
        var paramquery = "";
        for(i = 0; i < params.length; i++) {
            for(var key in params[i]) {
                paramquery += "&" + key + "=" + params[i][key];
            }
        }
        return paramquery;
    };
    return Query_Invoice;
});
