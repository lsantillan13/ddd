const {Schema, model} = require('mongoose');
/**********************************************/
const reqString = {type: String,required: true};
const reqUnique = {type: String, unique: true,}
/**********************************************/
const userSchema = new Schema({
    email: reqUnique,
    name: reqString,
    surname: reqString,
    passwordHash: reqString,
    avatar: reqString,
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note'}]
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v

        delete returnedObject.passwordHash
    }
})

const User = model('User', userSchema);

module.exports = User;