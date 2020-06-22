const mongoose = require('mongoose');
const {Schema} = mongoose;

const SectorSchema = new Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    dependencia: {type: String, required: true},
})


module.exports = mongoose.model('Sector', SectorSchema);