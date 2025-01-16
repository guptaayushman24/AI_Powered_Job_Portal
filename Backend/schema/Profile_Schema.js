const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    Email:{
     type:String,
     require:true
    },
    Skills:{
       type:[String],
       require:true
    }
})
const Profile = mongoose.model('Profile',ProfileSchema);
module.exports = Profile;


// const mongoose = require('mongoose');
// const Profile = new mongoose.Schema({
//     Email:{
//         type:String,
//         require:true
//     },
//     Skills:{
//         type:String,
//         require:true
//     }
// },{collection: 'All_Jobs'})
// const ProfileSchema = mongoose.model('ProfileSchema',Profile);
// module.exports = ProfileSchema;