const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
    username: { type: String, 
        required: true, 
        unique: true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    
    password: { 
        type: String,
        required: true
    },
  role: { type: String,
     enum: ['LIBRARIAN', 'MEMBER'],
      required: true
    },
    isDeleted: { type: Boolean,
     default: false }
},
 { timestamps: true }
);
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};
const User = mongoose.model('User', userSchema);
module.exports = User;