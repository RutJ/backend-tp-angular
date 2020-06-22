const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmpresaSchema = new Schema({
    _id: {type:String},
    nombre: {type: String, required: true},
    email: {type: String, required: true},
})

module.exports = mongoose.model('Empresa', EmpresaSchema);