/*
* Constructor for Invoice Value-Object.
 */
function InvoiceVO(header, invoiceNumber, invoiceType, invoiceDate, deliveryDate, contactPerson, contact, discount, discountTime, taxRate, taxText, taxType, status, smallSettlement, headText, footText, timeToPay, addressName, addressStreet, addressZip, addressCity) {
    // required attributes
    this.header = header;
    this.invoiceNumber = invoiceNumber;
    this.invoiceType = invoiceType;
    this.invoiceDate = invoiceDate;
    this.deliveryDate = deliveryDate;
    this.contactPerson = contactPerson;
    this.contact = contact;
    this.discount = discount;
    this.discountTime = discountTime;
    this.taxRate = taxRate;
    this.taxText = taxText;
    this.taxType = taxType;
    this.status = status;
    this.smallSettlement = smallSettlement;
    // optional attributes
    this.headText = headText;
    this.footText = footText;
    this.timeToPay = timeToPay;
    this.addressName = addressName;
    this.addressStreet = addressStreet;
    this.addressZip = addressZip;
    this.addressCity = addressCity;  
};
