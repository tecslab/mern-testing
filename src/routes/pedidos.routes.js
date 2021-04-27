const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

router.get('/', async (req, res)=>{
    var pedidos = await Pedido.find();
    res.json(pedidos);
});

router.get('/:id', async (req, res)=>{
    var pedido = await Pedido.findById(req.params.id);
    res.json(pedido);
});

router.post('/', async(req,res)=>{
    const {mesa, total, fecha, canasta} = req.body;
    const pedido = new Pedido({mesa, total, fecha, canasta});
    await pedido.save();
    res.json('Tarea guardada');
});

router.put('/:id', async(req, res)=>{
    const { mesa, total, fecha, canasta } = req.body;
    const newPedido = {mesa, total, fecha, canasta};
    await Pedido.findByIdAndUpdate(req.params.id, newPedido);
    res.json('recibido');
});

router.delete('/:id', async(req, res)=>{
    await Pedido.findByIdAndRemove(req.params.id);
    res.json('Pedido borrado');
});



module.exports = router;

/*{
    "mesa" : "5",
    "total" : "10",
    "fecha" : "2021-04-26T23:22:55.410Z",
     "canasta" : [{
           "producto_id" : "53589",
           "observacion" : "Sin cebolla",
           "cantidad" : "6"
       }, {
            "producto_id" : "96654",
            "cantidad" : "2"
        }]
}*/