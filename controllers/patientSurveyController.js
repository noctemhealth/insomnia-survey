const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const PatientSurvey = mongoose.model('patientSurvey');

router.get('/', (req, res) => {
    res.render("patientSurvey/addOrEdit", {
        viewTitle: "Create a New Insomnia Severity Index"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});


function insertRecord(req, res) {

    var patientSurvey = new PatientSurvey();

    patientSurvey.fullName = req.body.fullName;
    patientSurvey.difficultyFallingAsleep = req.body.difficultyFallingAsleep;
    patientSurvey.difficultyStayingAsleep = req.body.difficultyStayingAsleep;
    patientSurvey.problemsWakingUpTooEarly = req.body.problemsWakingUpTooEarly;
    patientSurvey.currentSleepPattern = req.body.currentSleepPattern;
    patientSurvey.noticeableToOthers = req.body.noticeableToOthers;
    patientSurvey.worriedCurrentSleepProblem = req.body.worriedCurrentSleepProblem;
    patientSurvey.sleepProblemToInterface = req.body.sleepProblemToInterface;
    patientSurvey.createdBy = req.body.fullName;
    console.log(patientSurvey);
    patientSurvey.save((err, doc) => {
        if (!err)
            res.redirect('patientSurvey/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("patientSurvey/addOrEdit", {
                    viewTitle: "Create a New Insomnia Severity Index",
                    patientSurvey: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    PatientSurvey.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('patientSurvey/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("patientSurvey/addOrEdit", {
                    viewTitle: 'Update Insomnia Severity Index',
                    patientSurvey: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    PatientSurvey.find((err, docs) => {
        if (!err) {
            res.render("patientSurvey/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving survey list :' + err);
        }
    });
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'difficultyFallingAsleep':
                body['difficultyFallingAsleepError'] = err.errors[field].message;
                break;
            case 'difficultyStayingAsleep':
                body['difficultyStayingAsleepError'] = err.errors[field].message;
                break;
            case 'problemsWakingUpTooEarly':
                body['problemsWakingUpTooEarlyError'] = err.errors[field].message;
                break;
            case 'currentSleepPattern':
                body['currentSleepPatternError'] = err.errors[field].message;
                break;
            case 'noticeableToOthers':
                body['noticeableToOthersError'] = err.errors[field].message;
                break;
            case 'worriedCurrentSleepProblem':
                body['worriedCurrentSleepProblemError'] = err.errors[field].message;
                break;
            case 'sleepProblemToInterface':
                body['sleepProblemToInterfaceError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    PatientSurvey.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("patientSurvey/addOrEdit", {
                viewTitle: "Update Insomnia Severity Index",
                patientSurvey: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    PatientSurvey.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/patientSurvey/list');
        }
        else { console.log('Error in patientSurvey delete :' + err); }
    });
});



module.exports = router;