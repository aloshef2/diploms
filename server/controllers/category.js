const Category = require('../models/Category').Category;

module.exports = {
    getAll: (req, res) =>{
        Category.find({}).exec((error, category) => {
           res.status(200).json({ success: true, category: category, categorylength: category.length});
        })
    },
    deletes: (req, res) =>{
        Category.findByIdAndDelete(req.params.id).then(deletedCategory=> {
            res.status(200).json({success: true});
        });
    },
    create: (req, res) =>{
        try {
            const category = new Category(req.body)
            category.save().then(category => {
                res.status(200).json({ success: true })
                
            }); 
                
        } catch (error) {
           res.status(400).json({ success: false, err })
        }
    }
}