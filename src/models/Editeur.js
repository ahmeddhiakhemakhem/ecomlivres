import mongoose from "mongoose"
var editeurSchema = mongoose.Schema({
    nomediteur: String,
    email: String,
    numtel: String
},
    {
        timestamps: true
    }
);
const Editeur = mongoose.models.Editeur || mongoose.model('Editeur', editeurSchema);
export default Editeur