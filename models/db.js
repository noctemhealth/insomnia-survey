const mongoose = require('mongoose');

mongoose.connect('mongodb://mongoadmin:secret@localhost:27888/?authSource=admin', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./patientSurvey.model');