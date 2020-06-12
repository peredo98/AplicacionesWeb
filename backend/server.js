var express = require('express'); //importar express
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
const cors = require("cors");
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options("*", cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //APi va a vivir en este puerto

var uri = "mongodb+srv://user_web:hola123@avotar-umbnv.mongodb.net/sistemadevotacion?retryWrites=true&w=majority";

var mongoose = require('mongoose');
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'error de conexion'));
db.once('openUri', function(){
    console.log("Me conecté a mongodb");
})

var router = express.Router();


router.use(function(req, res, next){
    next();
});//funcion habilita el middleware

router.get('/', function(req, res){
    res.json({
        mensaje: "keep alive"
    });
});


//Models declaration
var Survey = require('./app/models/survey');

//post and get surveys
router.route('/surveys').post(function(req, res){
    var survey = new Survey();
    var inputQuestions;
    try {
        if(req.body.questions){
            inputQuestions = req.body.questions;
        }
    } catch (error){
        res.status(500).send(error);
        return;
    }

    if(!req.body.title){
        res.status(400).send({error: "La encuesta tiene que tener un titulo para ser creada"});
        return;
    }else if(!req.body.startDate){
        res.status(400).send({error: "La encuesta tiene que tener una fecha de comienzo para ser creada"});
        return;
    }else if(!req.body.endDate){
        res.status(400).send({error: "La encuesta tiene que tener una fecha de término para ser creada"});
        return;
    }else if(!req.body.creationDate){
        res.status(400).send({error: "La encuesta tiene que tener una fecha de creación para ser creada"});
        return;
    }else if(!req.body.city){
        res.status(400).send({error: "La encuesta tiene que tener una ciudad para ser creada"});
        return;
    }else if(!req.body.state){
        res.status(400).send({error: "La encuesta tiene que tener un estado para ser creada"});
        return;
    }else if(!req.body.questions){
        res.status(400).send({error: "La encuesta tiene que tener preguntas para ser creada"});
        return;
    }

    survey.title = req.body.title;
    survey.startDate = req.body.startDate;
    survey.endDate = req.body.endDate;
    survey.creationDate = req.body.creationDate;
    survey.city = req.body.city;
    survey.state = req.body.state;
    survey.isPublish = false;
    survey.resultsPublish = false;
    survey.questions = [];
    
    // console.log(inputQuestions);
    if(inputQuestions != undefined){
        inputQuestions.forEach(question => {
            survey.questions.push(
                {
                    title: question.title,
                    options: question.options
                }
            );
            console.log(question.title);
        });
    }
    try {
        console.log(survey.questions.length);

        survey.save(function (err){
            if(err){
                if((survey.questions === undefined || survey.questions.length == 0) || !survey.title || !survey.startDate || !survey.endDate || !survey.creationDate || !survey.city || !survey.state){
                    res.status(400).send({mensaje: "Uno de los campos no fue llenado correctamente"});
                    return;
                }
                if(err._message == "Survey validation failed"){
                    res.status(400).send({ mensaje: "Las preguntas de la encuesta no han sido llenados correctamente" });
                    return;
                }
                res.status(500).send(err);
            }else{
                res.status(201).send({ mensaje: "Encuesta creada con éxito." });
            }
        });

    } catch(error){
        res.status(500).send(error);
    }
})

.get(function (req, res){
    limite = 5;
    Survey.find(function(err, surveys){
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(surveys);
    });
});

//get specific survey and delete specific survey
router
  .route("/surveys/:id_survey")
  .get(function (req, res) {
    Survey.findById(req.params.id_survey, function (error, survey) {
      if (error) {
        res.status(404).send({ message: "La encuesta no fue encontrada." });
        return;
      }
      if (survey == null) {
        res.status(404).send({ survey: "La encuesta no fue encontrada." });
        return;
      }
      res.status(200).send(survey);
    });
  })
  .delete(function (req, res) {
    Survey.remove(
      {
        _id: req.params.id_survey,
      },
      function (err, alumno) {
        if (err) {
          res.status(404).send({message: "La encuesta no fue encontrada."});
          return;
        }
        res.status(200).send({ mensaje: "Encuesta borrada con exito." });
      }
    );
  });
//   .put(function (req, res) {
//     Survey.findById(req.params.id_survey, async function (err, survey) {
//       if (err) {
//         res.send(err);
//         return;
//       }
//       if(survey.isPublish == false){
//         survey.isPublish = true;
//       }else{
//         survey.isPublish = false;
//       }
//       await survey.save(function (err) {
//         if (err) {
//           res.status(500).send(err);
//           return;
//         }
//         res.json({ message: "encuesta actualizada" });
//       });
//     });
//   });

//Toggle survey to be Hidden or Published
router.route("/surveys/:id_survey/turn")
  .put(function (req, res) {
    Survey.findById(req.params.id_survey, async function (err, survey) {
      if (err) {
        res.status(404).send(err);
        return;
      }
      if(survey.isPublish == false){
        survey.isPublish = true;
      }else{
        survey.isPublish = false;
      }
      await survey.save(function (err) {
        if (err) {
          res.status(500).send({message: "Hubo un error al hacer la operación."});
          return;
        }
        res.status(200).send({ message: "Estatus de la encuesta cambió con éxito." });
      });
    });
  });

//Toggle results to be Hidden or Published
router.route("/surveys/:id_survey/results")
.put(function (req, res) {
  Survey.findById(req.params.id_survey, async function (err, survey) {
    if (err) {
      res.status(404).send(err);
      return;
    }
    if(survey.resultsPublish == false){
      survey.resultsPublish = true;
    }else{
      survey.resultsPublish = false;
    }
    await survey.save(function (err) {
      if (err) {
        res.status(500).send({message: "Hubo un error al hacer la operación."});
        return;
      }
      res.status(200).send({ message: "Estatus de la encuesta cambió con éxito." });
    });
  });
});


//Add votes to a specific survey
router.route("/surveys/:id_survey/addVotes")
.put(function (req, res) {
  Survey.findById(req.params.id_survey, async function (err, survey) {
    if (err) {
      res.status(404).send(err);
      return;
    }
    
    if(!req.body.selectedOptions){
        res.status(400).send({error: "Tiene que haber opciones seleccionadas"});
        return;
    }
    var selectedOptions = req.body.selectedOptions;

    if(selectedOptions.length == 0){
        res.status(400).send({error: "Tiene que haber opciones seleccionadas"});
        return;
    }


    var i = 0;

    survey.questions.forEach(question => {
        question.options.forEach(option =>{
            if(option.title == selectedOptions[i]){
                survey.questions.id(question._id).options.id(option._id).votes++;
            }
        });
        i++;
    })

    await survey.save(function (err) {
      if (err) {
        res.status(500).send("Hubo un error al hacer la operación");
        return;
      }
      res.status(200).send({ message: "Voto agregado." });
    });
  });
});

app.use('/api', router); //url base de nuestro api que tiene las rutas en el router

app.listen(port); //abre el puerto que escucha

console.log("servidor arriba");