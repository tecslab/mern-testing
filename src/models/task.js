const mongoose = require('mongoose');
const { Schema } = mongoose;

const pedidoShema = new Schema ({
    mesa:{type:Number},
    fecha: Date,


});


//Hacer una abstraccion para la hora

module.exports=pedidoShema;