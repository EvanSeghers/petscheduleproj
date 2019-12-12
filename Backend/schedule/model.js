const {Datastore} = require('@google-cloud/datastore');

const ds = new Datastore();

class Appointment {
    constructor(petId, start, end) {
        this.petId = petId;
        this.start = start;
        this.end = end;
    }
}

/**
 * 
 * @param {Appointment} appt 
 */
var addAppointment = async appt => {
    if(! appt instanceof Appointment) {
        return false;
    }

    
}

var getAppointments = async () => {

}

var getAppointmentById = async id => {

}

var cancelAppointment = async id => {

}

module.exports = {
    Appointment,
    addAppointment,
    getAppointments,
    getAppointmentById,
    cancelAppointment
}