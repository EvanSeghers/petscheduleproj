const fs = require('fs');
const {Datastore} = require('@google-cloud/datastore');

const ds = new Datastore();

class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var getCustomers = async () => {
    let customers = [];

    for(let cust in await fs.readFile('./customers/sample-cust-data.json')) {
        customers.push(new Customer(cust.firstName, cust.lastName))
    }

    return customers;
}

/**
 * 
 * @param {number} id 
 */
var getCustomerById = async id => {
    
    return new Customer();
}

/**
 * 
 * @param {Customer} customer 
 */
var addCustomer = async customer => {
    if(! customer instanceof Customer)
        return false;
}

module.exports = {
    Customer,
    addCustomer,
    getCustomers,
    getCustomerById
};