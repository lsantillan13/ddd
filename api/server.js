//--------------------------------------------------------------------IMPORTS----------------------------------------------------------------------\\
/**/                                                                                                                                             /**/
/**/ process.env.NODE_ENV !== 'production'                                                                                                       /**/
/**/  ? require('dotenv').config() && console.log('Server running on DEVELOPMENT_MODE')                                                          /**/
/**/  : console.log('Server is running on PRODUCTION_MODE');                                                                                     /**/
/**/ const express = require('express');                                                                                                         /**/
/**/ const mongoose = require('mongoose');                                                                                                       /**/
/**/ const cors = require('cors');                                                                                                               /**/
/**/ const multer = require('multer');                                                                                                           /**/
/**/ const morgan = require('morgan');                                                                                                           /**/
/**/ const path = require('path');                                                                                                               /**/
/**/ const Products = require('./models/products');                                                                                              /**/
/**/                                                                                                                                             /**/
//------------------------------------------------------------------INITIALIZATION-----------------------------------------------------------------\\
/**/                                                                                                                                             /**/
/**/ const app = express();                                                                                                                      /**/
/**/ require('./database')                                                                                                                       /**/
/**/                                                                                                                                             /**/
//--------------------------------------------------------------------STATIC-----------------------------------------------------------------------\\
/**/                                                                                                                                             /**/
/**/ app.use(express.static(path.join(__dirname, 'public')));                                                                                    /**/
/**/                                                                                                                                             /**/
//--------------------------------------------------------------------MIDDLEWARES------------------------------------------------------------------\\
/**/                                                                                                                                             /**/
/**/ app.use(express.json());                                                                                                                    /**/
/**/ app.use(express.urlencoded({extended: false}));                                                                                             /**/
/**/ app.use(cors());                                                                                                                            /**/
/**/ app.use(morgan('dev'));                                                                                                                     /**/
/**/ const storage = multer.diskStorage({                                                                                                        /**/
/**/  destination: path.join(__dirname, 'public/uploads'),                                                                                       /**/
/**/  filename(req, file, cb){cb(null, new Date().getTime() + path.extname(file.originalname));}                                                 /**/
/**/ });                                                                                                                                         /**/
/**/ app.use(multer({storage}).single('image'));                                                                                                 /**/
/**/                                                                                                                                             /**/
//--------------------------------------------------------------------ROUTES-----------------------------------------------------------------------\\
/**/ app.use('/api/products/', require('./routes/products'));                                                                                    /**/
/**/ app.use('/api/users', require('./routes/users'));                                                                                           /**/
/**/                                                                                                                                             /**/
//-------------------------------------------------------------------SERVER-UP---------------------------------------------------------------------\\
/**/                                                                                                                                             /**/
/**/ app.set('port', process.env.PORT || 3001);                                                                                                  /**/
/**/ app.listen(app.get('port'), () => {console.log('Server is running on port', app.get('port')); });                                           /**/
/**/                                                                                                                                             /**/
//-------------------------------------------------------------------SERVER-UP---------------------------------------------------------------------\\
/**/                                                                                                                                             /**/
//-------------------------------------------------------------------SERVER-UP---------------------------------------------------------------------\\
/**/                                                                                                                                             /**/
//-------------------------------------------------------------------SERVER-UP---------------------------------------------------------------------\\
/**/                                                                                                                                             /**/
//-------------------------------------------------------------------SERVER-UP---------------------------------------------------------------------\\
/**/                                                                                                                                             /**/
//-------------------------------------------------------------------SERVER-UP---------------------------------------------------------------------\\
app.get('/', async (req, res) => {
    res.send(`
    <form>
    <input type="email"/>
    <input type="password"/>
    <button>enviar</button>
    </form>`);
});
