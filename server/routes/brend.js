const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");
const brendController = require("../controllers/brend");
const {Brend} =require('../models/Brend');

router.post("/uploadBrend", auth, (req, res) => {
    try {
        const brend = new Brend(req.body)
        brend.save().then(brend => {
            return res.status(200).json({ success: true })
            
        }); 
            
    } catch (error) {
        res.status(400).json({ success: false, err })
    }
});

router.get("/getBrend",  (req, res) => {
    Brend.find({}).exec((error, brend) => {
        res.status(200).json({ success: true, brend: brend, brendlength: brend.length});
    })
});

router.delete("/delete_by_id/:id", auth, (req, res) => {
    Brend.findByIdAndDelete(req.params.id).then(brend => {
        res.status(200).json({saccess: true});
    })
});



module.exports = router;


