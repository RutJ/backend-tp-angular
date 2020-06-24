const Pasaje = require('../models/pasaje1'); 

const pasajeCtrl = {}

pasajeCtrl.getPasajes = async (req, res) => {
    pasajes = await Pasaje.find();
    res.json(pasajes);
}

pasajeCtrl.createPasaje = async (req, res) => {
    console.log("entro create pasaje");
    const pasaje = new Pasaje (req.body);
    await pasaje.save();
    res.json({
        'status': 'Pasaje saved'
    });
}

pasajeCtrl.getPasaje = async (req, res) => {
    const pasaje = await Pasaje.findById(req.params.id);
    res.json(pasaje);
}

pasajeCtrl.editPasaje = async (req, res) => {
    const vpasaje =  new Pasaje (req.body);
    await Pasaje.findByIdAndUpdate(req.params.id, {$set: vpasaje}, {new: true});
    res.json({
        'status': 'Pasaje updated'
    })
}
pasajeCtrl.deletePasaje = async (req, res)=>{
    await Pasaje.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Pasaje removed'
    })
}
module.exports= pasajeCtrl;