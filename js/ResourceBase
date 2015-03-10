angular.module('myApp').factory('ResourceBase', function($resource) {
    /*
    * Constructor
    */
    var ResourceBase = function() {

    };
    
    ResourceBase.$inject = ['$resource'];

    /*
     * 
     */
    ResourceBase.prototype.doGetRequest = function(query) {
    	return ($resource(query).get().$promise);
    };
    
    /*
     * 
     */
    ResourceBase.prototype.doPostRequest = function(query, object) {
    	return ($resource(query).save(object).$promise);
    };
    
    /*
     * 
     */
    ResourceBase.prototype.doPutRequest = function(query, object) {
    	return ($resource(query, {}, {update: {method: 'PUT'}}).update(object).$promise);
    };
    
    /*
     * 
     */
    ResourceBase.prototype.doDeleteRequest = function(query) {
    	return ($resource(query ,{},{'delete': {method: 'DELETE', isArray: true }}).delete().$promise);
    };
 
    return ResourceBase;
});
