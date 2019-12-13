const express = require('express');
const model = require('./model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('./form.ejs', { appointments: await model.getAppointments() });
});

router.post('/add-appointment', (req, res, next) => {
    let appt = new model.Appointment();

    if(await model.addAppointment(appt)) {
        res.status(200).send("Success!");
    } else {
        res.status(403).send("Could not add.");
    }

});

router.post('/cancel-appointment', (req, res, next) => {
    let apptId;

    if(! await model.getAppointmentById(apptId)) {
        res.status(403).send("Appointment does not exist.");
        return;
    }

    if(await model.cancelAppointment()) {
        res.status(200).send("Success!");
    } else {
        res.status(403).send("Could not add.");
    }
});

module.exports = router;