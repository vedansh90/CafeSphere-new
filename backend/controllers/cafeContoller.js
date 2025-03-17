import cafeModel from '../models/cafeModel.js';

const getCafe = async (req, res) => {
    try{
        const cafe = await cafeModel.findById(req.params.id);
        if (!cafe) {
            return res.json({success: false, message: "Cafe not found" });
        }
        res.json(cafe);
    }
    catch(err){
        res.json({ success: false, message: "Error fetching cafe details", err });
    }
}

export {getCafe}