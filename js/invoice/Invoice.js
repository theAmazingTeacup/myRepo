/*
* Constructor
*/
function Invoice(invoiceVO) {
    this.id;
    // REFACTOR Invoice-Model should inherited a abstract object.
    this.valueObject;
    // validate values from invoiceVO.
    // if there are invalid values so throw error.
    if(invoiceVO) {
        this.valueObject = invoiceVO;
    }
};

/*
* Function to check if model is ready and valid to be post.
*/
Invoice.prototype.isReadyToPost = function() {
    if(!invoiceVO.header) {
            throw new Error("Invalid value for header");
            return;
        }else if(!invoiceVO.invoiceNumber) {
            throw new Error("Invalid value for invoiceNumber");
            return;
        }else if(!invoiceVO.invoiceType) {
            throw new Error("Invalid value for invoiceType");
            return;
        }else if(!invoiceVO.invoiceDate) {
            throw new Error("Invalid value for invoiceDate");
            return;
        }else if(!invoiceVO.deliveryDate) {
            throw new Error("Invalid value for deliveryDate");
            return;
        }else if(!invoiceVO.contactPerson) {
            throw new Error("Invalid value for contactPerson");
            return;
        }else if(!invoiceVO.contact) {
            throw new Error("Invalid value for contact");
            return;
        }else if(!invoiceVO.discount) {
            throw new Error("Invalid value for discount");
            return;
        }else if(!invoiceVO.discountTime) {
            throw new Error("Invalid value for discountTime");
            return;
        }else if(!invoiceVO.taxRate) {
            throw new Error("Invalid value for taxRate");
            return;
        }else if(!invoiceVO.taxText) {
            throw new Error("Invalid value for taxText");
            return;
        }else if(!invoiceVO.taxType) {
            throw new Error("Invalid value for taxType");
            return;
        }else if(!invoiceVO.status) {
            throw new Error("Invalid value for status");
            return;
        }else if(!invoiceVO.smallSettlement) {
            throw new Error("Invalid value for smallSettlement");
            return;
        }else {
            return true;
        }
};

/*
* 
*/
Invoice.prototype.setId = function(id) {
    this.id = id;
};

/*
* 
*/
Invoice.prototype.getId = function() {
    return this.id;
};

/*
* 
*/
Invoice.prototype.setValueObject = function(invoiceVO) {
    this.valueObject = invoiceVO;
};

/*
* 
*/
Invoice.prototype.getValueObject = function() {
    return this.valueObject;
};
    
    /*
     * 
     */
    Invoice.prototype._save = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype._delete = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getFeed = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.addPosition = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getPosition = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getDiscounts = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.hasDiscounts = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getTags = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.isOrigin = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getTotal = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getTaxGroupes = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getVat = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getTotalNet = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getTotalTaxSplit = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getApprovals = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getTasks = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getLogs = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getPayedDate = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.bookAmount = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getDebit = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.correctNumber = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.setStatus = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getDateOfPayment = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.isDelinquent = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.toString = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getDocument = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getDunnings = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getLastDunning = function() {
    	
    };
    
    /*
     * 
     */
    Invoice.prototype.getDunningLevel = function() {
    	
    };
