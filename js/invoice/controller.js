(function(){
	var myCtrl = function(BusinessMaster) {
            this.BusinessMaster = new BusinessMaster("http://sevdesk.local//api/v1/", "96fa89eec06f4f8aca3af94b53717544");
            this.responseValue = null;
	};

        myCtrl.prototype.clickMeToGet = function(){
            var _this = this;
            /*
             * -----------  ----  ------------
             * -----------  GET  ------------
             * -----------  ----  ------------
             */
            // Just an empty Invoice-Model can be used for GET- and DELETE-Request.
            var invoice = new Invoice();
            
            // use BusinessMaster to talk to APIs Interface.
            // He will return a promise. We have to resolve this promise to get the data.
            var promise = this.BusinessMaster.talk().to(invoice).andGET("62");
            promise.then(function(response){
                _this.responseValue = JSON.stringify(response.objects[0], null, 4);
            });
            /*
             * -------------------------------
             * -----------  ----  ------------
             * -------------------------------
            */
        };

        myCtrl.prototype.clickMeToGetAll = function(){
            var _this = this;
            /*
             * -----------  ----  ------------
             * -----------  GET  ------------
             * -----------  ----  ------------
             */
            // Just an empty Invoice-Model can be used for GET- and DELETE-Request.
            var invoice = new Invoice();
            
            // use BusinessMaster to talk to APIs Interface.
            // He will return a promise. We have to resolve this promise to get the data.
            var promise = this.BusinessMaster.talk().to(invoice).andGET();
            promise.then(function(response){
                _this.responseValue = JSON.stringify(response.objects, null, 4);
            });
            /*
             * -------------------------------
             * -----------  ----  ------------
             * -------------------------------
            */
        };

        myCtrl.prototype.clickMeToPost = function(){
            var _this = this;
            /*
             * -----------  ----  ------------
             * -----------  POST  ------------
             * -----------  ----  ------------
             */
            // Just an empty Invoice-Model can be used for GET- and DELETE-Request.
            var invoice = new Invoice();
            // For POST- and PUT-Request we have to fill this empty object.
            // So create a value object with necessary values.
            var invoiceVO = new InvoiceVO("InvoiceHeader", "RE-0123", "RE", "1425570927", "1425570927", 709, 50, "19", 5, 19, "text", "Default", "100", "0");
            // Now we can fill the model with the value object.
            invoice.setValueObject(invoiceVO);
            // With the filled Model we can do a POST-Request now.
            
            // use BusinessMaster to talk to APIs Interface.
            // He will return a promise. We have to resolve this promise to get the data.
            var promise = this.BusinessMaster.talk().to(invoice).andPOST();
            promise.then(function(response){
                _this.responseValue = JSON.stringify(response.objects[0], null, 4);
            });
            /*
             * -------------------------------
             * -----------  ----  ------------
             * -------------------------------
             */
        };

        myCtrl.prototype.clickMeToPut = function(){
            var _this = this;
            /*
             * -----------  ----  ------------
             * -----------  PUT   ------------
             * -----------  ----  ------------
             */
            // Just an empty Invoice-Model can be used for GET- and DELETE-Request.
            var invoice = new Invoice();
            // For POST- and PUT-Request we have to fill this empty object.
            // So create a value object with necessary values.
            var invoiceVO = new InvoiceVO();
            invoiceVO.header = "12341234";
            // Now we can fill the model with the value object.
            invoice.setValueObject(invoiceVO);
            // With the filled Model we can do a POST-Request now.
            // use BusinessMaster to talk to APIs Interface.
            // He will return a promise. We have to resolve this promise to get the data.
            var promise = this.BusinessMaster.talk().to(invoice).andPUT("62");
            promise.then(function(response){
                _this.responseValue = JSON.stringify(response.objects[0], null, 4);
            });
            /*
             * -------------------------------
             * -----------  ----  ------------
             * -------------------------------
            */
        };
        
        myCtrl.prototype.clickMeToDelete = function(){
            var _this = this;
            /*
             * -----------  ----  ------------
             * -----------  DELETE  ----------
             * -----------  ----  ------------
             */
            // Just an empty Invoice-Model can be used for GET- and DELETE-Request.
            var invoice = new Invoice();
            
            // use BusinessMaster to talk to APIs Interface.
            // He will return a promise. We have to resolve this promise to get the data.
            var promise = this.BusinessMaster.talk().to(invoice).andDELETE("87");
            promise.then(function(response){
                _this.responseValue = "[ ]";
            });
            /*
             * -------------------------------
             * -----------  ----  ------------
             * -------------------------------
            */
        };
	myCtrl.$inject = ['BusinessMaster'];
	angular.module("myApp").controller("myCtrl", myCtrl);	
})();
