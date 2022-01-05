const {Schema, model} = require('mongoose');
const reqString = { type: String, required: true}
const ProductsSchema = new Schema({
    title: reqString,
    emoji: reqString,
    products: [{
        title: reqString,
        description: {type: String, required: false},
    }],
});
module.exports = model("Products", ProductsSchema);


// invited: [{
//     title: reqString,
//     products: [{title: reqString, description: {type: String, required: false}}]
// }],
// invited1: [{
//     title: reqString,
//     products: [{title: reqString, description: {type: String, required: false}}]
// }],
// invited2: [{
//     title: reqString,
//     products: [{title: reqString, description: {type: String, required: false}}]
// }],
// invited3: [{
//     title: reqString,
//     products: [{title: reqString, description: {type: String, required: false}}]
// }],
// invited4: [{
//     title: reqString,
//     products: [{title: reqString, description: {type: String, required: false}}]
// }],
// invited5: [{
//     title: reqString,
//     products: [{title: reqString, description: {type: String, required: false}}]
// }],

