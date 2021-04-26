const express = require('express');
const router = express.Router();


router.get('/api/task', (req, res)=>{
    res.json({
        status:'ok'
    });   
});

module.exports = router;