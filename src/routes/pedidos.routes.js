const express = require('express');
const router = express.Router();

router.get('/api/pedidos', (req, res)=>{
    res.json({
        status:'oks man'
    });   
});

module.exports = router;