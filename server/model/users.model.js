import mongoose from 'mongoose';
  const userSchema =new mongoose.schema({
    username:{
        typeof:'string',
        required:true,
        trimp:true,
        unqui:true,
    },
    email:{
        TypeError:String,
        email:true,
        lowercase:true,
        required:true,
        trimp:true,
    },
    password:{
        typeof:'string',
        required:true,
        trimp:true,

    },

 })
 export const User = mongoose.model('User',userSchema);