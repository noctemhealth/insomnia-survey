const mongoose = require('mongoose');

var patientSurveySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    difficultyFallingAsleep:{
        type : Number,
        required : 'This field is requied.'
    },
    difficultyStayingAsleep:{
        type : Number,
        required : 'This field is requied.'
    },
    problemsWakingUpTooEarly:{
        type: Number,
        required : 'This field is requied.'
    },
    currentSleepPattern:{
        type: Number,
        required : 'This field is requied.'
    },
    noticeableToOthers:{
        type: Number,
        required : 'This field is requied.'
    },
    worriedCurrentSleepProblem:{
        type: Number,
        required : 'This field is requied.'
    },
    sleepProblemToInterface:{
        type: Number,
        required : 'This field is requied.'
    },

    createdBy:{
        type: String,
        required : 'This field is requied.'
    },
    createdDate:{
        type: Date,
        default: Date.now,
        
    }

    
});


// Custom validation for difficultyFallingAsleep
patientSurveySchema.path('difficultyFallingAsleep').validate((val) => {
    Regex = /^[0-4]$/;
    return Regex.test(val);
}, 'Invalid number.');

// Custom validation for difficultyStayingAsleep
patientSurveySchema.path('difficultyStayingAsleep').validate((val) => {
    Regex = /^[0-4]$/;
    return Regex.test(val);
}, 'Invalid number.');

// Custom validation for problemsWakingUpTooEarly
patientSurveySchema.path('problemsWakingUpTooEarly').validate((val) => {
    Regex = /^[0-4]$/;
    return Regex.test(val);
}, 'Invalid number.');

// Custom validation for currentSleepPattern
patientSurveySchema.path('currentSleepPattern').validate((val) => {
    Regex = /^[0-4]$/;
    return Regex.test(val);
}, 'Invalid number.');

// Custom validation for noticeableToOthers
patientSurveySchema.path('noticeableToOthers').validate((val) => {
    Regex = /^[0-4]$/;
    return Regex.test(val);
}, 'Invalid number.');

// Custom validation for worriedCurrentSleepProblem
patientSurveySchema.path('worriedCurrentSleepProblem').validate((val) => {
    Regex = /^[0-4]$/;
    return Regex.test(val);
}, 'Invalid number.');

// Custom validation for sleepProblemToInterface
patientSurveySchema.path('sleepProblemToInterface').validate((val) => {
    Regex = /^[0-4]$/;
    return Regex.test(val);
}, 'Invalid number.');


mongoose.model('patientSurvey', patientSurveySchema);