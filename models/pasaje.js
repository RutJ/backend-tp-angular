const mongoose = require('mongoose');
const {Schema} = mongoose;

const PasajeSchema = new Schema({
    dniPasajero: {type: String, required: true},
    precioPasaje: {type: String, required: true},
    categoriaPasajero: {type: Boolean, required: true},
    fechaCompra: {type:String, required:true},
    adelantos:[]
})


module.exports = mongoose.model('Pasaje', PasajeSchema);