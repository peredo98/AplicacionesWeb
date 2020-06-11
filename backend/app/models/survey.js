var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OptionSchema = new Schema ({ //Subdocument in QuestionSchema
    title: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    }
})

function notEmpty(arr) {
    return arr.length > 0;
}

var QuestionSchema = new Schema ({ //Subdocument in SurveySchema
    title: {
        type: String,
        required: true
    }, 
    options: {
        type: [OptionSchema],
        required: true,
        validate: [notEmpty, "Se necesitan opciones para crear encuesta"],
    }
});

function notEmptyQuestions(arr) {
    return arr.length > 0;
}

var SurveySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    creationDate: {
        type: String,
        required: true
    },
    questions: {
        type: [QuestionSchema],
        required: true,
        validate: [notEmptyQuestions, "Se necesitan preguntar para crear la encuesta"]
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    isPublish: {
        type: Boolean,
        default: false
    }  
});

module.exports = mongoose.model('Survey', SurveySchema);