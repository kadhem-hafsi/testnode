const mongoose=require('mongoose')

var produit= new mongoose.Schema({
        Libelle: {type:String},
        Prix: { type: Number },
        Description: { type: String },
        Quantite: { type: Number }
})
module.exports = mongoose.model('produit',produit)