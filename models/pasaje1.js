const mongoose = require('mongoose');
const Adelanto = require('./adelanto');
const {Schema} = mongoose;

const PasajeSchema = new Schema({
    dniPasajero: {type: String, required: true},
    precioPasaje: {type: String, required: true},
    categoriaPasajero: {type: Boolean, required: true},
    fechaCompra: {type:String, required:true},
    adelantos: [{type: Adelanto.schema}]
})
module.exports = mongoose.model('Pasaje', PasajeSchema);