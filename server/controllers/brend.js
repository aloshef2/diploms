const { Brend } = require('../models/Brend');


module.exports ={
    createBrend: (req, res) => {
        try {
            const brendTitle = Brend(body.name);

                const newBrend = new Brend({
                    title: brendTitle
                });
                
                newBrend.save().then(brend => {
                    res.status(200).json({success: true});
                    
                });
        } catch (error) {
            return res.json({ success: false, error });
        }
        
        
    },
    deleteBrend: (req, res) => {
        Brend.findByIdAndDelete(req.params.id).then(deletedBrend => {
            req.flash('success-massege', 'Delete');
            res.status(200).json({success: true});
        });
    },
}