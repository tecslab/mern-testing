var mongoose = require('mongoose'),
    {Schema} = mongoose;

var productoSchema = new Schema({
   nombre: {type: String, required:true},
   categoria: {type: String, required:true},
   variedad:{type:String, required:true},
   /* the 'nombre' field es being redundant
   It is needed to ref Inventario
   The units of cantidad is in Inventario*/
   ingredientBowl: [{ingredientId: {type: Schema.Types.ObjectId, required:true}, nombre:String, cantidad:Number}]
});

module.exports=mongoose.model('Producto',productoSchema);