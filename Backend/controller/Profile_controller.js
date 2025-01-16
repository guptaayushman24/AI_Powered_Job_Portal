const Profile = require('../schema/Profile_Schema');
async function userprofile (req,res){
    try{
        const data = req.body;
        await Profile(data).save();
        return res.status(201).json({
            'msg':data
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            'err':err
        })
    }
    
}
module.exports = {
    userprofile
}