const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/mongo-test', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./patientSurvey.model');