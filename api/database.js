const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_ATLAS_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( db => console.log('DB Is connected'))
    .catch( err => console.log('Error: ', err));
;;;